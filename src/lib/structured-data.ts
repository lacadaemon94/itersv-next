import { getCaseStudyPath, getHomePath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import {
  caseStudyContent,
  contactEmail,
  contactPhoneHref,
  landingContent,
  socialLinks,
  type CaseStudySlug,
  type Locale,
} from "@/lib/site-data";

function languageCode(locale: Locale) {
  return locale === "es" ? "es-SV" : "en-US";
}

function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: "Iter",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/android-chrome-512x512.png"),
    email: contactEmail,
    sameAs: socialLinks.map((link) => link.href),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contactEmail,
        url: contactPhoneHref,
        availableLanguage: ["English", "Spanish"],
      },
    ],
  };
}

function websiteJsonLd(locale: Locale) {
  const copy = landingContent[locale];

  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: "Iter",
    url: absoluteUrl("/"),
    description: copy.hero.sub,
    inLanguage: languageCode(locale),
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function buildHomeJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), websiteJsonLd(locale)],
  };
}

export function buildCaseStudyJsonLd(slug: CaseStudySlug, locale: Locale) {
  const study = caseStudyContent[slug][locale];
  const pathname = getCaseStudyPath(slug, locale);
  const url = absoluteUrl(pathname);
  const homeUrl = absoluteUrl(getHomePath(locale));

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      websiteJsonLd(locale),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "es" ? "Inicio" : "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: study.title,
            item: url,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#creative-work`,
        name: study.title,
        headline: study.title,
        description: study.summary,
        url,
        inLanguage: languageCode(locale),
        keywords: study.stack,
        creator: {
          "@id": absoluteUrl("/#organization"),
        },
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
        breadcrumb: {
          "@id": `${url}#breadcrumb`,
        },
      },
    ],
  };
}
