-- Iter project only. Restores the pre-fix functions; does not alter message records.
CREATE OR REPLACE FUNCTION public.log_twilio_whatsapp_outbound_message(payload jsonb, request_context jsonb DEFAULT '{}'::jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
 SET search_path TO 'public'
AS $function$
declare
  v_from text := coalesce(request_context->>'from', payload->>'from', payload->>'From');
  v_to text := coalesce(request_context->>'to', payload->>'to', payload->>'To');
  v_body text := coalesce(request_context->>'body', payload->>'body', payload->>'Body');
  v_sid text := coalesce(payload->>'sid', payload->>'MessageSid', payload->>'message_sid');
  v_status text := coalesce(payload->>'status', payload->>'MessageStatus', 'queued');
  v_sender_type text := coalesce(request_context->>'sender_type', 'operator');
  v_contact_id uuid;
  v_conversation_id uuid := nullif(request_context->>'conversation_id', '')::uuid;
  v_message_id uuid;
  v_thread text := coalesce(request_context->>'external_thread_id', 'twilio-messaging:' || v_from || ':' || v_to);
begin
  if v_to is null or v_from is null then
    raise exception 'Outbound payload is missing from or to';
  end if;

  select id into v_contact_id from public.whatsapp_contacts where phone_number = v_to;
  if v_contact_id is null then
    insert into public.whatsapp_contacts (phone_number, last_seen_at)
    values (v_to, now())
    on conflict (phone_number) do update set last_seen_at = now()
    returning id into v_contact_id;
  end if;

  if v_conversation_id is null then
    insert into public.whatsapp_conversations (contact_id, external_thread_id, business_phone_number, last_message_at, status)
    values (v_contact_id, v_thread, v_from, now(), 'open')
    on conflict (external_thread_id) do update set last_message_at = now()
    returning id into v_conversation_id;
  end if;

  insert into public.whatsapp_messages (
    conversation_id, contact_id, direction, sender_type, twilio_message_sid,
    from_address, to_address, body, delivery_status, raw_payload, status_payload, sent_at, received_at
  ) values (
    v_conversation_id, v_contact_id, 'outbound', v_sender_type, v_sid,
    v_from, v_to, v_body, v_status, jsonb_build_object('payload', payload, 'request_context', request_context), '{}'::jsonb, now(), now()
  )
  on conflict (twilio_message_sid) do update set
    delivery_status = excluded.delivery_status,
    raw_payload = excluded.raw_payload,
    sent_at = excluded.sent_at
  returning id into v_message_id;

  update public.whatsapp_conversations set last_message_at = now() where id = v_conversation_id;

  return jsonb_build_object('ok', true, 'message_id', v_message_id, 'conversation_id', v_conversation_id, 'contact_id', v_contact_id, 'twilio_message_sid', v_sid, 'status', v_status);
end;
$function$;

CREATE OR REPLACE FUNCTION public.update_twilio_message_status(payload jsonb, request_headers jsonb DEFAULT '{}'::jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
 SET search_path TO 'public'
AS $function$
declare
  v_sid text := coalesce(payload->>'MessageSid', payload->>'SmsMessageSid', payload->>'SmsSid', payload->>'sid');
  v_status text := coalesce(payload->>'MessageStatus', payload->>'SmsStatus', payload->>'status');
  v_updated uuid;
begin
  if v_sid is null then
    raise exception 'Twilio status payload is missing MessageSid';
  end if;

  update public.whatsapp_messages
  set delivery_status = coalesce(v_status, delivery_status),
      error_code = payload->>'ErrorCode',
      error_message = payload->>'ErrorMessage',
      status_payload = status_payload || jsonb_build_object('payload', payload, 'headers', request_headers),
      sent_at = case when coalesce(v_status, '') in ('sent', 'delivered', 'read') then coalesce(sent_at, now()) else sent_at end
  where twilio_message_sid = v_sid
  returning id into v_updated;

  return jsonb_build_object('ok', v_updated is not null, 'message_id', v_updated, 'twilio_message_sid', v_sid, 'status', v_status);
end;
$function$;
