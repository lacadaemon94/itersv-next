import { NextResponse, type NextRequest } from "next/server";

import { isAllowedAdminEmail } from "@/lib/admin-auth";
import { getOutboundWhatsAppWebhookUrl, postToN8n } from "@/lib/n8n";
import { createClient, createServiceClient } from "@/lib/supabase/server";

const serviceWindowMs = 24 * 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isAllowedAdminEmail(user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json();
  const conversationId = String(payload.conversation_id || "");
  const body = String(payload.body || "").trim();

  if (!conversationId || !body) {
    return NextResponse.json(
      { error: "conversation_id and body are required." },
      { status: 400 },
    );
  }

  const admin = createServiceClient();
  const { data: conversation, error: conversationError } = await admin
    .from("whatsapp_conversations")
    .select(
      "id, external_thread_id, business_phone_number, whatsapp_contacts(phone_number)",
    )
    .eq("id", conversationId)
    .single();

  if (conversationError || !conversation) {
    return NextResponse.json({ error: "Conversation not found." }, { status: 404 });
  }

  const { data: latestInbound } = await admin
    .from("whatsapp_messages")
    .select("created_at")
    .eq("conversation_id", conversationId)
    .eq("direction", "inbound")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (
    latestInbound?.created_at &&
    Date.now() - new Date(latestInbound.created_at).getTime() > serviceWindowMs
  ) {
    return NextResponse.json(
      {
        error:
          "This conversation is outside WhatsApp's 24-hour free-form reply window. Use an approved template before sending.",
      },
      { status: 409 },
    );
  }

  const contact = Array.isArray(conversation.whatsapp_contacts)
    ? conversation.whatsapp_contacts[0]
    : conversation.whatsapp_contacts;

  const result = await postToN8n(getOutboundWhatsAppWebhookUrl(), {
    from: conversation.business_phone_number,
    to: contact?.phone_number,
    body,
    sender_type: "operator",
    external_thread_id: conversation.external_thread_id,
    conversation_id: conversation.id,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error || "n8n outbound webhook failed.", details: result.body },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, result: result.body });
}
