import type { Metadata } from "next";

import { getCaseStudyPath, getHomePath, localizePath } from "@/lib/i18n";
import {
  caseStudyContent,
  type CaseStudySlug,
  type Locale,
} from "@/lib/site-data";

const fallbackSiteUrl = "http://localhost:3000";

const siteDescriptions: Record<Locale, string> = {
  en: "Iter builds AI agents, WhatsApp automation, RevOps integrations, and operator-grade internal tools for fast-moving teams across the US and LATAM.",
  es: "Iter diseña agentes de IA, automatización para WhatsApp, integraciones RevOps y herramientas internas para equipos en Estados Unidos y Latinoamérica.",
};

const siteTitles: Record<Locale, string> = {
  en: "Iter | AI Agents, Workflow Automation, and Operator Tooling",
  es: "Iter | Agentes de IA, Automatización y Herramientas Operativas",
};

const homeOgTitles: Record<Locale, string> = {
  en: "Join the AI Revolution.",
  es: "Únete a la revolución de IA.",
};

const keywords = [
  "Iter",
  "AI agents",
  "workflow automation",
  "WhatsApp automation",
  "Meta Cloud API",
  "RevOps automation",
  "operator tooling",
  "internal tools",
  "n8n",
  "Supabase",
  "Next.js",
  "LATAM engineering",
  "Delaware LLC",
];

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl;

  try {
    const url = new URL(rawUrl);
    return url.origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export function absoluteUrl(pathname: string) {
  return new URL(pathname, getSiteUrl()).toString();
}

function alternateLanguages(pathname: string) {
  const cleanPath = localizePath(pathname, "en");
  const englishPath = localizePath(cleanPath, "en");
  const spanishPath = localizePath(cleanPath, "es");

  return {
    "en-US": absoluteUrl(englishPath),
    es: absoluteUrl(spanishPath),
    "x-default": absoluteUrl(englishPath),
  };
}

function socialImagePath(kind: "opengraph-image" | "twitter-image", pathname: string) {
  const basePath = pathname === "/" ? "" : pathname;
  return `${basePath}/${kind}`;
}

type BuildMetadataOptions = {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
  imageAlt: string;
  type?: "website" | "article";
};

function buildMetadata({
  locale,
  pathname,
  title,
  description,
  imageAlt,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const canonical = absoluteUrl(pathname);
  const ogImage = absoluteUrl(socialImagePath("opengraph-image", pathname));
  const twitterImage = absoluteUrl(socialImagePath("twitter-image", pathname));

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: alternateLanguages(pathname),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Iter",
      locale: locale === "es" ? "es_SV" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_SV"],
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: twitterImage,
          alt: imageAlt,
        },
      ],
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: "Iter",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "Iter",
  publisher: "Iter",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#571fff" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Iter",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-TileColor": "#0a0b10",
    "msapplication-TileImage": "/mstile-150x150.png",
    "theme-color": "#0a0b10",
  },
};

export function buildHomeMetadata(locale: Locale): Metadata {
  const pathname = getHomePath(locale);

  return buildMetadata({
    locale,
    pathname,
    title: siteTitles[locale],
    description: siteDescriptions[locale],
    imageAlt:
      locale === "es"
        ? "Vista previa social de Iter para agentes de IA y automatización"
        : "Iter social preview for AI agents and workflow automation",
  });
}

export function buildCaseStudyMetadata(
  slug: CaseStudySlug,
  locale: Locale,
): Metadata {
  const study = caseStudyContent[slug][locale];
  const pathname = getCaseStudyPath(slug, locale);

  return buildMetadata({
    locale,
    pathname,
    title: `${study.title} | Iter Case Study`,
    description: study.summary,
    imageAlt:
      locale === "es"
        ? `Portada del caso de estudio de Iter: ${study.title}`
        : `Iter case study cover: ${study.title}`,
    type: "article",
  });
}

export function getHomeOgTitle(locale: Locale) {
  return homeOgTitles[locale];
}

export function getHomeOgDescription(locale: Locale) {
  return siteDescriptions[locale];
}
