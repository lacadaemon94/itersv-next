import { NextResponse, type NextRequest } from "next/server";

import { isAllowedAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";

type EmailOtpType =
  | "signup"
  | "invite"
  | "magiclink"
  | "recovery"
  | "email_change"
  | "email";

const allowedOtpTypes = new Set<EmailOtpType>([
  "signup",
  "invite",
  "magiclink",
  "recovery",
  "email_change",
  "email",
]);

function getSafeNext(next: string) {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return "/admin/inbox";
  }

  return next;
}

function getOtpType(type: string): EmailOtpType {
  return allowedOtpTypes.has(type as EmailOtpType)
    ? (type as EmailOtpType)
    : "email";
}

function redirectToLogin(request: NextRequest, error: string, next: string) {
  const loginUrl = new URL("/login", request.nextUrl.origin);
  loginUrl.searchParams.set("error", error);
  loginUrl.searchParams.set("next", next);
  return NextResponse.redirect(loginUrl, 303);
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const tokenHash = String(formData.get("token_hash") || "");
  const type = getOtpType(String(formData.get("type") || "email"));
  const next = getSafeNext(String(formData.get("next") || "/admin/inbox"));

  if (!tokenHash) {
    return redirectToLogin(request, "missing_code", next);
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    token_hash: tokenHash,
    type,
  });

  if (error) {
    return redirectToLogin(request, "exchange_failed", next);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isAllowedAdminEmail(user?.email)) {
    await supabase.auth.signOut();
    return redirectToLogin(request, "unauthorized", next);
  }

  return NextResponse.redirect(new URL(next, request.nextUrl.origin), 303);
}
