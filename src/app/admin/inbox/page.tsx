import type { Metadata } from "next";

import { requireAdmin } from "@/lib/admin-auth";
import { loadInboxData } from "@/lib/admin-inbox";

import { InboxClient } from "./inbox-client";

export const metadata: Metadata = {
  title: "Iter WhatsApp Inbox",
};

type InboxPageProps = {
  searchParams: Promise<{
    conversation?: string;
  }>;
};

export default async function InboxPage({ searchParams }: InboxPageProps) {
  await requireAdmin("/admin/inbox");
  const params = await searchParams;
  const data = await loadInboxData(params.conversation);

  return <InboxClient data={data} />;
}
