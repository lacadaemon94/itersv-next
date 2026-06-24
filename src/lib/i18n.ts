import type { CaseStudySlug, Locale } from "@/lib/site-data";

export const defaultLocale: Locale = "en";
export const supportedLocales = ["en", "es"] as const;

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/es") {
    return "/";
  }

  if (pathname.startsWith("/es/")) {
    return pathname.slice(3) || "/";
  }

  return pathname || "/";
}

export function localizePath(pathname: string, locale: Locale) {
  const cleanPath = stripLocalePrefix(pathname);

  if (locale === "en") {
    return cleanPath;
  }

  return cleanPath === "/" ? "/es" : `/es${cleanPath}`;
}

export function getHomePath(locale: Locale) {
  return locale === "en" ? "/" : "/es";
}

export function getCaseStudyPath(slug: CaseStudySlug, locale: Locale) {
  return localizePath(`/case-studies/${slug}`, locale);
}

export function localizeHref(href: string, locale: Locale) {
  if (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const [pathname, hash] = href.split("#");
  const localizedPath = localizePath(pathname || "/", locale);

  return hash ? `${localizedPath}#${hash}` : localizedPath;
}
