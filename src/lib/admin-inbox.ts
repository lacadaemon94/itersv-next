import { createServiceClient } from "@/lib/supabase/server";

export type InboxContact = {
  id: string;
  phone_number: string;
  display_name: string | null;
  profile_name: string | null;
};

export type InboxConversation = {
  id: string;
  contact_id: string;
  external_thread_id: string;
  business_phone_number: string;
  status: string;
  latest_summary: string | null;
  last_message_at: string;
  created_at: string;
  whatsapp_contacts: InboxContact | null;
};

export type InboxMessage = {
  id: string;
  conversation_id: string;
  direction: "inbound" | "outbound";
  sender_type: string;
  twilio_message_sid: string | null;
  from_address: string;
  to_address: string;
  body: string | null;
  delivery_status: string | null;
  error_message: string | null;
  created_at: string;
};

export type InboxSummary = {
  id: string;
  conversation_id: string;
  message_id: string;
  intent: string | null;
  urgency: string | null;
  confidence: number | null;
  summary: string | null;
  suggested_reply: string | null;
  recommended_action: string | null;
  created_at: string;
};

export type InboxData = {
  conversations: InboxConversation[];
  selectedConversation: InboxConversation | null;
  messages: InboxMessage[];
  latestSummary: InboxSummary | null;
};

export async function loadInboxData(conversationId?: string | null): Promise<InboxData> {
  const supabase = createServiceClient();
  const { data: conversations, error: conversationsError } = await supabase
    .from("whatsapp_conversations")
    .select(
      "id, contact_id, external_thread_id, business_phone_number, status, latest_summary, last_message_at, created_at, whatsapp_contacts(id, phone_number, display_name, profile_name)",
    )
    .order("last_message_at", { ascending: false })
    .limit(50);

  if (conversationsError) {
    throw conversationsError;
  }

  const normalizedConversations = (conversations || []) as unknown as InboxConversation[];
  const selectedConversation =
    normalizedConversations.find((conversation) => conversation.id === conversationId) ||
    normalizedConversations[0] ||
    null;

  if (!selectedConversation) {
    return {
      conversations: normalizedConversations,
      selectedConversation: null,
      messages: [],
      latestSummary: null,
    };
  }

  const [{ data: messages, error: messagesError }, { data: summaries, error: summariesError }] =
    await Promise.all([
      supabase
        .from("whatsapp_messages")
        .select(
          "id, conversation_id, direction, sender_type, twilio_message_sid, from_address, to_address, body, delivery_status, error_message, created_at",
        )
        .eq("conversation_id", selectedConversation.id)
        .order("created_at", { ascending: true })
        .limit(100),
      supabase
        .from("ai_message_summaries")
        .select(
          "id, conversation_id, message_id, intent, urgency, confidence, summary, suggested_reply, recommended_action, created_at",
        )
        .eq("conversation_id", selectedConversation.id)
        .order("created_at", { ascending: false })
        .limit(1),
    ]);

  if (messagesError) {
    throw messagesError;
  }

  if (summariesError) {
    throw summariesError;
  }

  return {
    conversations: normalizedConversations,
    selectedConversation,
    messages: (messages || []) as InboxMessage[],
    latestSummary: ((summaries || [])[0] as InboxSummary | undefined) || null,
  };
}
