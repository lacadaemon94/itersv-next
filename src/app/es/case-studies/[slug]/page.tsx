import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { CaseStudyPage } from "@/components/case-study-page";
import { SitePreferencesProvider } from "@/components/site-preferences";
import { getCaseStudyPath } from "@/lib/i18n";
import {
  caseStudySlugs,
  resolveCaseStudySlug,
} from "@/lib/site-data";
import { buildCaseStudyMetadata } from "@/lib/seo";

type SpanishCaseStudyRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SpanishCaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = resolveCaseStudySlug(slug);

  if (!resolvedSlug) {
    return {
      title: "Caso de Estudio | Iter",
    };
  }

  return buildCaseStudyMetadata(resolvedSlug, "es");
}

export default async function SpanishCaseStudyRoute({
  params,
}: SpanishCaseStudyRouteProps) {
  const { slug } = await params;
  const resolvedSlug = resolveCaseStudySlug(slug);

  if (!resolvedSlug) {
    notFound();
  }

  if (resolvedSlug !== slug) {
    redirect(getCaseStudyPath(resolvedSlug, "es"));
  }

  return (
    <SitePreferencesProvider initialLocale="es">
      <CaseStudyPage slug={resolvedSlug} />
    </SitePreferencesProvider>
  );
}
