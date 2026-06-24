import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/components/case-study-page";
import { SitePreferencesProvider } from "@/components/site-preferences";
import {
  caseStudySlugs,
  isCaseStudySlug,
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

  if (!isCaseStudySlug(slug)) {
    return {
      title: "Case Study | Iter",
    };
  }

  return buildCaseStudyMetadata(slug, "en");
}

export default async function CaseStudyRoute({ params }: CaseStudyRouteProps) {
  const { slug } = await params;

  if (!isCaseStudySlug(slug)) {
    notFound();
  }

  return (
    <SitePreferencesProvider initialLocale="en">
      <CaseStudyPage slug={slug} />
    </SitePreferencesProvider>
  );
}
