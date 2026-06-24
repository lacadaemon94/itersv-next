"use client";

import { useMemo, useState } from "react";

import type { InboxData } from "@/lib/admin-inbox";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function InboxClient({ data }: { data: InboxData }) {
  const [reply, setReply] = useState(data.latestSummary?.suggested_reply || "");
  const [status, setStatus] = useState<string | null>(null);
  const selected = data.selectedConversation;
  const contact = selected?.whatsapp_contacts;
  const latestInbound = useMemo(
    () => [...data.messages].reverse().find((message) => message.direction === "inbound"),
    [data.messages],
  );

  async function sendReply(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selected || !reply.trim()) {
      return;
    }

    setStatus("Sending...");
    const response = await fetch("/api/admin/replies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        conversation_id: selected.id,
        body: reply,
      }),
    });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      setStatus(payload.error || "Reply failed.");
      return;
    }

    setReply("");
    setStatus("Reply sent and queued in Twilio.");
    window.location.reload();
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="border-b border-[var(--border)] px-5 py-4">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4">
          <div>
            <p className="iter-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
              / iter ops
            </p>
            <h1 className="iter-display text-2xl font-bold">
              WhatsApp Inbox
            </h1>
          </div>
          <form action="/api/auth/logout" method="post">
            <button className="rounded-[8px] border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-dim)] hover:text-[var(--text)]">
              Log out
            </button>
          </form>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1320px] gap-0 px-5 py-5 lg:grid-cols-[340px_1fr]">
        <aside className="border border-[var(--border)] lg:min-h-[calc(100vh-116px)]">
          <div className="border-b border-[var(--border)] p-4">
            <p className="text-sm text-[var(--text-dim)]">
              {data.conversations.length} conversations
            </p>
          </div>
          <div className="max-h-[70vh] overflow-auto">
            {data.conversations.length ? (
              data.conversations.map((conversation) => {
                const isSelected = conversation.id === selected?.id;
                const label =
                  conversation.whatsapp_contacts?.profile_name ||
                  conversation.whatsapp_contacts?.display_name ||
                  conversation.whatsapp_contacts?.phone_number ||
                  "Unknown contact";

                return (
                  <a
                    key={conversation.id}
                    href={`/admin/inbox?conversation=${conversation.id}`}
                    className={`block border-b border-[var(--border)] p-4 ${
                      isSelected ? "bg-[var(--accent-soft)]" : "hover:bg-[var(--surface)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <strong className="text-sm">{label}</strong>
                      <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]">
                        {conversation.status}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--text-dim)]">
                      {conversation.latest_summary || conversation.external_thread_id}
                    </p>
                    <p className="mt-2 iter-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                      {formatDate(conversation.last_message_at)}
                    </p>
                  </a>
                );
              })
            ) : (
              <p className="p-4 text-sm text-[var(--text-dim)]">
                No WhatsApp conversations yet.
              </p>
            )}
          </div>
        </aside>

        <section className="border-x border-b border-[var(--border)] lg:border-l-0 lg:border-t">
          {selected ? (
            <div className="grid min-h-[calc(100vh-116px)] lg:grid-cols-[1fr_340px]">
              <div className="flex min-h-[520px] flex-col">
                <div className="border-b border-[var(--border)] p-4">
                  <h2 className="text-lg font-semibold">
                    {contact?.profile_name || contact?.display_name || contact?.phone_number}
                  </h2>
                  <p className="text-xs text-[var(--text-muted)]">
                    {selected.external_thread_id}
                  </p>
                </div>

                <div className="flex-1 space-y-3 overflow-auto p-4">
                  {data.messages.map((message) => {
                    const outbound = message.direction === "outbound";

                    return (
                      <article
                        key={message.id}
                        className={`max-w-[76%] rounded-[8px] border border-[var(--border)] p-3 ${
                          outbound
                            ? "ml-auto bg-[var(--accent-soft)]"
                            : "bg-[var(--surface)]"
                        }`}
                      >
                        <p className="whitespace-pre-wrap text-sm leading-6">
                          {message.body || "(media / empty message)"}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2 iter-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                          <span>{message.sender_type}</span>
                          <span>{message.delivery_status || "received"}</span>
                          <span>{formatDate(message.created_at)}</span>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <form onSubmit={sendReply} className="border-t border-[var(--border)] p-4">
                  <label className="mb-2 block iter-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Reply
                  </label>
                  <textarea
                    value={reply}
                    onChange={(event) => setReply(event.target.value)}
                    rows={4}
                    className="w-full resize-y rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm outline-none focus:border-[var(--accent)]"
                    placeholder="Write a reply for this WhatsApp conversation..."
                  />
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs text-[var(--text-muted)]">
                      {latestInbound
                        ? `Latest inbound: ${formatDate(latestInbound.created_at)}`
                        : "No inbound message found."}
                    </p>
                    <button
                      type="submit"
                      disabled={!reply.trim()}
                      className="rounded-[8px] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)] disabled:opacity-45"
                    >
                      Send via WhatsApp
                    </button>
                  </div>
                  {status ? (
                    <p className="mt-3 text-sm text-[var(--text-dim)]">{status}</p>
                  ) : null}
                </form>
              </div>

              <aside className="border-t border-[var(--border)] p-4 lg:border-l lg:border-t-0">
                <h3 className="mb-3 iter-display text-xl font-semibold">
                  AI Summary
                </h3>
                {data.latestSummary ? (
                  <div className="space-y-4 text-sm leading-6 text-[var(--text-dim)]">
                    <p>{data.latestSummary.summary || "No summary text."}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-[8px] border border-[var(--border)] p-3">
                        <span className="block text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                          Intent
                        </span>
                        <strong className="text-[var(--text)]">
                          {data.latestSummary.intent || "unknown"}
                        </strong>
                      </div>
                      <div className="rounded-[8px] border border-[var(--border)] p-3">
                        <span className="block text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                          Urgency
                        </span>
                        <strong className="text-[var(--text)]">
                          {data.latestSummary.urgency || "unknown"}
                        </strong>
                      </div>
                    </div>
                    <div>
                      <span className="mb-2 block text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                        Suggested reply
                      </span>
                      <p className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-3">
                        {data.latestSummary.suggested_reply ||
                          data.latestSummary.recommended_action ||
                          "No draft yet."}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-[var(--text-dim)]">
                    No AI summary has been saved for this conversation yet.
                  </p>
                )}
              </aside>
            </div>
          ) : (
            <div className="flex min-h-[420px] items-center justify-center p-8 text-center text-[var(--text-dim)]">
              No conversation selected.
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
