import { NextResponse, type NextRequest } from "next/server";

import { isAllowedAdminEmail, normalizeEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";

function getRedirectOrigin(request: NextRequest) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  if (configured && configured !== "http://localhost:3000") {
    return configured;
  }

  return request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";
  const payload = contentType.includes("application/json")
    ? await request.json()
    : Object.fromEntries((await request.formData()).entries());

  const email = normalizeEmail(String(payload.email || ""));
  const next = String(payload.next || "/admin/inbox");
  const loginUrl = new URL("/login", request.nextUrl.origin);
  loginUrl.searchParams.set("next", next);

  if (!email || !isAllowedAdminEmail(email)) {
    loginUrl.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(loginUrl, 303);
  }

  const origin = getRedirectOrigin(request);
  const callbackUrl = new URL("/auth/callback", origin);
  callbackUrl.searchParams.set("next", next);

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: callbackUrl.toString(),
      shouldCreateUser: true,
    },
  });

  if (error) {
    loginUrl.searchParams.set("error", "send_failed");
    return NextResponse.redirect(loginUrl, 303);
  }

  loginUrl.searchParams.set("sent", "1");
  return NextResponse.redirect(loginUrl, 303);
}
