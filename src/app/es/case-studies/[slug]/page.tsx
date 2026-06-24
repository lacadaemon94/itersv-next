import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/components/case-study-page";
import { SitePreferencesProvider } from "@/components/site-preferences";
import {
  caseStudySlugs,
  isCaseStudySlug,
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

  if (!isCaseStudySlug(slug)) {
    return {
      title: "Caso de Estudio | Iter",
    };
  }

  return buildCaseStudyMetadata(slug, "es");
}

export default async function SpanishCaseStudyRoute({
  params,
}: SpanishCaseStudyRouteProps) {
  const { slug } = await params;

  if (!isCaseStudySlug(slug)) {
    notFound();
  }

  return (
    <SitePreferencesProvider initialLocale="es">
      <CaseStudyPage slug={slug} />
    </SitePreferencesProvider>
  );
}
