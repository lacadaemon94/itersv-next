import { NextResponse, type NextRequest } from "next/server";

import { isAllowedAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const accessToken = String(payload.access_token || "");
  const refreshToken = String(payload.refresh_token || "");
  const next = String(payload.next || "/admin/inbox");
  const supabase = await createClient();

  if (!accessToken || !refreshToken) {
    return NextResponse.json({ error: "missing_code" }, { status: 400 });
  }

  const { error } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (error) {
    return NextResponse.json({ error: "exchange_failed" }, { status: 401 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isAllowedAdminEmail(user?.email)) {
    await supabase.auth.signOut();
    return NextResponse.json({ error: "unauthorized" }, { status: 403 });
  }

  return NextResponse.json({ ok: true, next });
}
