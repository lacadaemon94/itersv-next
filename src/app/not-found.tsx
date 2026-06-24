import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="iter-panel max-w-xl rounded-[32px] p-10 text-center">
        <div className="iter-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
          404
        </div>
        <h1 className="iter-section-title mt-4 text-4xl font-bold tracking-[-0.04em]">
          That route is not part of the revamp.
        </h1>
        <p className="mt-4 leading-7 text-[var(--text-dim)]">
          The new site currently exposes the landing page and case studies while
          the rest of the rebuild continues inside `itersv_revamp`.
        </p>
        <Link
          href="/"
          className="iter-accent-ring mt-6 inline-flex rounded-2xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-ink)]"
        >
          Back to landing page
        </Link>
      </div>
    </main>
  );
}
