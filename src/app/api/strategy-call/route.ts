import { NextResponse, type NextRequest } from "next/server";

import { sendStrategyCallEmail } from "@/lib/email";
import { getStrategyCallWebhookUrl, postToN8n } from "@/lib/n8n";
import { createServiceClient } from "@/lib/supabase/server";

function clean(value: unknown) {
  return String(value || "").trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const name = clean(payload.name);
  const email = clean(payload.email).toLowerCase();
  const company = clean(payload.company);
  const message = clean(payload.message);
  const locale = clean(payload.locale) === "es" ? "es" : "en";
  const sourcePath = clean(payload.source_path || payload.sourcePath);

  if (!name || !email || !message || !isEmail(email)) {
    return NextResponse.json(
      { error: "Name, valid email, and message are required." },
      { status: 400 },
    );
  }

  const supabase = createServiceClient();
  const { data: requestRow, error: insertError } = await supabase
    .from("strategy_call_requests")
    .insert({
      name,
      email,
      company: company || null,
      message,
      locale,
      source_path: sourcePath || request.nextUrl.pathname,
      raw_payload: payload,
    })
    .select("id, created_at")
    .single();

  if (insertError || !requestRow) {
    return NextResponse.json(
      { error: insertError?.message || "Could not save strategy call request." },
      { status: 500 },
    );
  }

  const notificationPayload = {
    event_type: "strategy_call_request",
    request_id: requestRow.id,
    name,
    email,
    company,
    message,
    locale,
    source_path: sourcePath,
    created_at: requestRow.created_at,
    notify_to: "hola@itersv.com",
  };
  const n8nWebhookUrl = getStrategyCallWebhookUrl();
  const notification =
    n8nWebhookUrl && n8nWebhookUrl !== process.env.N8N_WEBHOOK_URL
      ? await postToN8n(n8nWebhookUrl, notificationPayload)
      : await sendStrategyCallEmail({
          id: requestRow.id,
          name,
          email,
          company,
          message,
          locale,
          sourcePath: sourcePath,
          createdAt: requestRow.created_at,
        });

  await supabase.from("notification_events").insert({
    event_type: "strategy_call_request",
    channel: "email",
    target: "hola@itersv.com",
    status: notification.ok ? "sent" : "failed",
    payload: notificationPayload,
    error: notification.error || null,
  });

  await supabase
    .from("strategy_call_requests")
    .update({
      notification_status: notification.ok ? "sent" : "failed",
      notification_error: notification.error || null,
    })
    .eq("id", requestRow.id);

  return NextResponse.json({
    ok: true,
    id: requestRow.id,
    notification_sent: notification.ok,
  });
}
