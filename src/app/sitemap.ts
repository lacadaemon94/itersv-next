import type { MetadataRoute } from "next";

import { getCaseStudyPath, getHomePath, localizePath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { caseStudySlugs, type Locale } from "@/lib/site-data";

const locales: Locale[] = ["en", "es"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const homeRoutes = locales.map((locale) => ({
    url: absoluteUrl(getHomePath(locale)),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
  }));
  const caseRoutes = locales.flatMap((locale) =>
    caseStudySlugs.map((slug) => ({
      url: absoluteUrl(getCaseStudyPath(slug, locale)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  );

  const legalRoutes = locales.flatMap((locale) =>
    ["/privacy", "/data-deletion", "/terms"].map((path) => ({
      url: absoluteUrl(localizePath(path, locale)),
      lastModified: new Date("2026-09-19T00:00:00Z"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  );

  return [...homeRoutes, ...caseRoutes, ...legalRoutes];
}
