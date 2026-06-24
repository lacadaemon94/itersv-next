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

type CaseStudyRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = resolveCaseStudySlug(slug);

  if (!resolvedSlug) {
    return {
      title: "Case Study | Iter",
    };
  }

  return buildCaseStudyMetadata(resolvedSlug, "en");
}

export default async function CaseStudyRoute({ params }: CaseStudyRouteProps) {
  const { slug } = await params;
  const resolvedSlug = resolveCaseStudySlug(slug);

  if (!resolvedSlug) {
    notFound();
  }

  if (resolvedSlug !== slug) {
    redirect(getCaseStudyPath(resolvedSlug, "en"));
  }

  return (
    <SitePreferencesProvider initialLocale="en">
      <CaseStudyPage slug={resolvedSlug} />
    </SitePreferencesProvider>
  );
}
