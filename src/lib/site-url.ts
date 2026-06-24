import { headers } from "next/headers";

export async function getRequestOrigin() {
  const requestHeaders = await headers();
  const configured = process.env.NEXT_PUBLIC_SITE_URL;

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const proto = requestHeaders.get("x-forwarded-proto") || "http";
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host");

  if (!host) {
    return "http://localhost:3000";
  }

  return `${proto}://${host}`;
}
