"use client";

import { useEffect, useState } from "react";

function redirectToLogin(error: string, next = "/admin/inbox") {
  const params = new URLSearchParams({ error, next });
  window.location.replace(`/login?${params.toString()}`);
}

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("Completing sign in...");

  useEffect(() => {
    const completeSignIn = async () => {
      const query = new URLSearchParams(window.location.search);
      const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      const next = query.get("next") || hash.get("next") || "/admin/inbox";
      const error =
        query.get("error") ||
        query.get("error_code") ||
        hash.get("error") ||
        hash.get("error_code");
      const errorDescription =
        query.get("error_description") || hash.get("error_description");

      if (error) {
        redirectToLogin(errorDescription || error, next);
        return;
      }

      const code = query.get("code") || hash.get("code");

      if (code) {
        const callbackParams = new URLSearchParams({ code, next });
        window.location.replace(`/api/auth/callback?${callbackParams.toString()}`);
        return;
      }

      const accessToken = hash.get("access_token") || query.get("access_token");
      const refreshToken = hash.get("refresh_token") || query.get("refresh_token");

      if (!accessToken || !refreshToken) {
        redirectToLogin("missing_code", next);
        return;
      }

      setMessage("Securing session...");
      const response = await fetch("/api/auth/session", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          access_token: accessToken,
          refresh_token: refreshToken,
          next,
        }),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        redirectToLogin(payload.error || "exchange_failed", next);
        return;
      }

      window.location.replace(payload.next || next);
    };

    completeSignIn().catch((error) => {
      redirectToLogin(error instanceof Error ? error.message : "exchange_failed");
    });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-5 text-[var(--text)]">
      <section className="w-full max-w-[420px] rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
        <p className="font-[family:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
          / auth
        </p>
        <h1 className="mt-3 font-[family:var(--font-display)] text-2xl font-bold">
          {message}
        </h1>
      </section>
    </main>
  );
}
