import { NextResponse, type NextRequest } from "next/server";

import { isAllowedAdminEmail, normalizeEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";

function getRedirectOrigin(request: NextRequest) {
  const forwardedHost = request.headers
    .get("x-forwarded-host")
    ?.split(",")[0]
    ?.trim();
  const host = forwardedHost || request.headers.get("host");

  if (host) {
    const hostname = host.split(":")[0].toLowerCase();

    if (hostname === "itersv.com" || hostname === "www.itersv.com") {
      return "https://www.itersv.com";
    }

    const forwardedProto = request.headers
      .get("x-forwarded-proto")
      ?.split(",")[0]
      ?.trim();
    const protocol =
      forwardedProto || request.nextUrl.protocol.replace(/:$/, "") || "https";

    return `${protocol}://${host}`.replace(/\/$/, "");
  }

  return request.nextUrl.origin.replace(/\/$/, "");
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
