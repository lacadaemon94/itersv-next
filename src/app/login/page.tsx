import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Iter Admin Login",
};

type LoginPageProps = {
  searchParams: Promise<{
    sent?: string;
    error?: string;
    next?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const next = params.next || "/admin/inbox";
  const sent = params.sent === "1";
  const error = params.error;

  return (
    <main className="min-h-screen bg-[var(--bg)] px-5 py-20 text-[var(--text)]">
      <section className="mx-auto max-w-[420px] rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_-48px_var(--accent-glow)]">
        <p className="mb-3 font-[family:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
          / admin
        </p>
        <h1 className="mb-3 font-[family:var(--font-display)] text-3xl font-bold tracking-[-0.025em]">
          Magic link login
        </h1>
        <p className="mb-6 text-sm leading-6 text-[var(--text-dim)]">
          Access is limited to Javier&apos;s Iter email. Supabase Auth sends the
          link through the configured Zoho SMTP account.
        </p>

        {sent ? (
          <div className="mb-5 rounded-[8px] border border-[var(--accent)] bg-[var(--accent-soft)] px-4 py-3 text-sm">
            Check your inbox for the magic link.
          </div>
        ) : null}

        {error ? (
          <div className="mb-5 rounded-[8px] border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {error === "unauthorized"
              ? "That email is not allowed for this admin area."
              : "The login link could not be completed. Request a fresh link."}
          </div>
        ) : null}

        <form action="/api/auth/login" method="post" className="space-y-4">
          <input type="hidden" name="next" value={next} />
          <label className="block">
            <span className="mb-2 block font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Email
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="javier.flores@itersv.com"
              className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-[8px] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-ink)]"
          >
            Send magic link
          </button>
        </form>

        <Link
          href="/"
          className="mt-6 inline-block text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          Back to site
        </Link>
      </section>
    </main>
  );
}
