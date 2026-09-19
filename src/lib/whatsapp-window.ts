export function hasOpenWhatsAppWindow(timestamp: unknown, now = Date.now()) {
  if (typeof timestamp !== "string" || !timestamp) return false;
  const receivedAt = Date.parse(timestamp);
  const age = now - receivedAt;
  return Number.isFinite(age) && age >= 0 && age < 24 * 60 * 60 * 1000;
}
