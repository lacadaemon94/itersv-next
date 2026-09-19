import type { Metadata } from "next";
import Link from "next/link";

import { getHomePath, localizePath } from "@/lib/i18n";
import { legalContent, type LegalPageKind } from "@/lib/legal-content";
import { absoluteUrl } from "@/lib/seo";
import type { Locale } from "@/lib/site-data";

export function legalMetadata(kind: LegalPageKind, locale: Locale): Metadata {
  const content = legalContent[locale][kind];
  return {
    title: content.title + " | Iter",
    description: content.intro,
    alternates: {
      canonical: absoluteUrl(localizePath("/" + kind, locale)),
      languages: {
        "en-US": absoluteUrl("/" + kind),
        es: absoluteUrl("/es/" + kind),
        "x-default": absoluteUrl("/" + kind),
      },
    },
  };
}

export function LegalPage({ kind, locale }: { kind: LegalPageKind; locale: Locale }) {
  const content = legalContent[locale][kind];
  const otherLocale = locale === "en" ? "es" : "en";
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 sm:py-16">
      <header className="mb-14 flex items-center justify-between border-b border-[var(--border)] pb-6">
        <Link href={getHomePath(locale)} className="iter-display text-2xl font-bold">Iter<span className="text-[var(--accent)]">.</span></Link>
        <Link href={localizePath("/" + kind, otherLocale)} lang={otherLocale} hrefLang={otherLocale} className="text-sm underline underline-offset-4">
          {otherLocale === "es" ? "Español" : "English"}
        </Link>
      </header>
      <main>
        <p className="iter-mono mb-4 text-sm text-[var(--text-dim)]">{locale === "es" ? "Actualizado: 19 de septiembre de 2026" : "Updated: September 19, 2026"}</p>
        <h1 className="iter-display text-4xl font-bold tracking-tight sm:text-5xl">{content.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--text-dim)]">{content.intro}</p>
        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="iter-display mb-3 text-xl font-medium">{section.title}</h2>
              <div className="space-y-3 leading-7 text-[var(--text-dim)]">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <a href="mailto:hola@itersv.com" className="mt-10 inline-block rounded-lg border border-[var(--border-strong)] px-5 py-3 text-[var(--accent)] underline underline-offset-4">hola@itersv.com</a>
      </main>
      <footer className="mt-14 border-t border-[var(--border)] pt-6">
        <nav aria-label={locale === "es" ? "Privacidad y datos" : "Privacy and data"} className="flex flex-wrap gap-6 text-sm underline underline-offset-4">
          <Link href={getHomePath(locale)}>{locale === "es" ? "Inicio" : "Home"}</Link>
          <Link href={localizePath("/terms", locale)}>{legalContent[locale].terms.title}</Link>
          <Link href={localizePath("/privacy", locale)}>{legalContent[locale].privacy.title}</Link>
          <Link href={localizePath("/data-deletion", locale)}>{legalContent[locale]["data-deletion"].title}</Link>
        </nav>
      </footer>
    </div>
  );
}
