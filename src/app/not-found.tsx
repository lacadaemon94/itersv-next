import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="iter-panel max-w-xl rounded-[32px] p-10 text-center">
        <div className="iter-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
          404
        </div>
        <h1 className="iter-section-title mt-4 text-4xl font-bold tracking-[-0.04em]">
          We could not find that page.
        </h1>
        <p className="mt-4 leading-7 text-[var(--text-dim)]">
          The link may be old, mistyped, or pointing to a page that moved.
          Head back home to explore Iter&apos;s automation services and sample
          workflows.
        </p>
        <Link
          href="/"
          className="iter-accent-ring mt-6 inline-flex rounded-2xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold"
          style={{ color: "var(--accent-ink)" }}
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
