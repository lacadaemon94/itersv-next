import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Confirm Iter Admin Login",
};

type ConfirmPageProps = {
  searchParams: Promise<{
    next?: string;
    token_hash?: string;
    type?: string;
  }>;
};

function getSafeNext(next: string | undefined) {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return "/admin/inbox";
  }

  return next;
}

export default async function ConfirmPage({ searchParams }: ConfirmPageProps) {
  const params = await searchParams;
  const next = getSafeNext(params.next);
  const tokenHash = params.token_hash || "";
  const type = params.type || "email";
  const canConfirm = Boolean(tokenHash);

  return (
    <main className="min-h-screen bg-[var(--bg)] px-5 py-20 text-[var(--text)]">
      <section className="mx-auto max-w-[420px] rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_-48px_var(--accent-glow)]">
        <p className="mb-3 iter-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
          / admin
        </p>
        <h1 className="mb-3 iter-display text-3xl font-bold tracking-[-0.025em]">
          Confirm sign in
        </h1>
        <p className="mb-6 text-sm leading-6 text-[var(--text-dim)]">
          Continue to the private Iter inbox.
        </p>

        {!canConfirm ? (
          <div className="mb-5 rounded-[8px] border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            This sign-in link is missing its verification token. Request a fresh
            link.
          </div>
        ) : null}

        <form action="/api/auth/confirm" method="post">
          <input type="hidden" name="next" value={next} />
          <input type="hidden" name="token_hash" value={tokenHash} />
          <input type="hidden" name="type" value={type} />
          <button
            type="submit"
            disabled={!canConfirm}
            className="w-full rounded-[8px] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-ink)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue to inbox
          </button>
        </form>

        <Link
          href="/login"
          className="mt-6 inline-block text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          Request a new link
        </Link>
      </section>
    </main>
  );
}
