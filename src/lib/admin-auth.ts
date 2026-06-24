import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

const defaultAdminEmails = ["javier.flores@itersv.com"];

export function normalizeEmail(email: string | null | undefined) {
  return String(email || "").trim().toLowerCase();
}

export function getAdminEmails() {
  const configured = process.env.PRIVATE_ADMIN_EMAILS;

  if (!configured) {
    return defaultAdminEmails;
  }

  return configured
    .split(",")
    .map((email) => normalizeEmail(email))
    .filter(Boolean);
}

export function isAllowedAdminEmail(email: string | null | undefined) {
  const normalized = normalizeEmail(email);
  return Boolean(normalized && getAdminEmails().includes(normalized));
}

export async function requireAdmin(nextPath = "/admin/inbox") {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?next=${encodeURIComponent(nextPath)}`);
  }

  if (!isAllowedAdminEmail(user.email)) {
    await supabase.auth.signOut();
    redirect("/login?error=unauthorized");
  }

  return user;
}
