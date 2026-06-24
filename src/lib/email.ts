import nodemailer from "nodemailer";

type StrategyCallEmail = {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  locale: string;
  sourcePath?: string;
  createdAt: string;
};

function getSmtpConfig() {
  const host = process.env.PRIVATE_ZOHO_SMTP_HOST;
  const port = Number(
    process.env.PRIVATE_ZOHO_SMTP_PORT || 465,
  );
  const secure =
    String(
      process.env.PRIVATE_ZOHO_SMTP_SECURE || "true",
    ) ===
    "true";
  const user = process.env.PRIVATE_ZOHO_SMTP_USER;
  const pass = process.env.PRIVATE_ZOHO_SMTP_PASSWORD;
  const fromEmail =
    process.env.PRIVATE_ZOHO_SMTP_FROM_EMAIL ||
    user;
  const fromName =
    process.env.PRIVATE_ZOHO_SMTP_FROM_NAME ||
    "Iter";
  const notifyTo =
    process.env.PRIVATE_ZOHO_NOTIFY_TO ||
    user;

  if (!host || !user || !pass || !fromEmail || !notifyTo) {
    return null;
  }

  return {
    host,
    port,
    secure,
    user,
    pass,
    fromEmail,
    fromName,
    notifyTo,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendStrategyCallEmail(payload: StrategyCallEmail) {
  const config = getSmtpConfig();

  if (!config) {
    return {
      ok: false,
      error: "Missing Zoho SMTP environment variables.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
  const subject = `New strategy call request from ${payload.name}`;
  const text = [
    "New strategy call request",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "-"}`,
    `Locale: ${payload.locale}`,
    `Source: ${payload.sourcePath || "-"}`,
    `Created: ${payload.createdAt}`,
    `Request ID: ${payload.id}`,
    "",
    payload.message,
  ].join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
      <h2>New strategy call request</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company || "-")}</p>
      <p><strong>Locale:</strong> ${escapeHtml(payload.locale)}</p>
      <p><strong>Source:</strong> ${escapeHtml(payload.sourcePath || "-")}</p>
      <p><strong>Created:</strong> ${escapeHtml(payload.createdAt)}</p>
      <p><strong>Request ID:</strong> ${escapeHtml(payload.id)}</p>
      <hr />
      <p style="white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `${config.fromName} <${config.fromEmail}>`,
      to: config.notifyTo,
      replyTo: payload.email,
      subject,
      text,
      html,
    });

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Email send failed.",
    };
  }
}
