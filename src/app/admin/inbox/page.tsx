import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/admin-auth";
import { loadInboxData } from "@/lib/admin-inbox";

import { InboxClient } from "./inbox-client";

export const metadata: Metadata = {
  title: "Iter WhatsApp Inbox",
};

type InboxPageProps = {
  searchParams: Promise<{
    code?: string;
    conversation?: string;
    error?: string;
    error_code?: string;
    error_description?: string;
  }>;
};

export default async function InboxPage({ searchParams }: InboxPageProps) {
  const params = await searchParams;
  const next = params.conversation
    ? `/admin/inbox?conversation=${encodeURIComponent(params.conversation)}`
    : "/admin/inbox";

  if (params.code) {
    const callbackPath = new URLSearchParams({
      code: params.code,
      next,
    });

    redirect(`/auth/callback?${callbackPath.toString()}`);
  }

  if (params.error || params.error_code || params.error_description) {
    const loginPath = new URLSearchParams({
      error: params.error || params.error_code || "auth_error",
      next,
    });

    redirect(`/login?${loginPath.toString()}`);
  }

  await requireAdmin(next);
  const data = await loadInboxData(params.conversation);

  return <InboxClient data={data} />;
}
