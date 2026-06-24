type N8nResult = {
  ok: boolean;
  status?: number;
  body?: unknown;
  error?: string;
};

export async function postToN8n(url: string | undefined, payload: unknown): Promise<N8nResult> {
  if (!url) {
    return { ok: false, error: "Missing n8n webhook URL." };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const text = await response.text();
    let body: unknown = text;

    if (text) {
      try {
        body = JSON.parse(text);
      } catch {
        body = text;
      }
    }

    return {
      ok: response.ok,
      status: response.status,
      body,
      error: response.ok ? undefined : text.slice(0, 500),
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "n8n request failed.",
    };
  }
}

export function getStrategyCallWebhookUrl() {
  return process.env.N8N_STRATEGY_CALL_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL;
}

export function getOutboundWhatsAppWebhookUrl() {
  return process.env.N8N_OUTBOUND_WEBHOOK_URL;
}
