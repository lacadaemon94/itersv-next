"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

import { localizePath } from "@/lib/i18n";
import type { Locale, ThemeMode } from "@/lib/site-data";

type SitePreferencesContextValue = {
  locale: Locale;
  theme: ThemeMode;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  toggleTheme: () => void;
};

const SitePreferencesContext = createContext<SitePreferencesContextValue | null>(
  null,
);

const LOCALE_KEY = "iter.locale";
const THEME_KEY = "iter.theme";

export function SitePreferencesProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem(THEME_KEY);
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(LOCALE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const navigateLocale = (nextLocale: Locale) => {
    const currentPath = pathname || "/";
    const nextPath = localizePath(currentPath, nextLocale);
    const hash = typeof window === "undefined" ? "" : window.location.hash;

    router.push(`${nextPath}${hash}`);
  };

  const value: SitePreferencesContextValue = {
    locale,
    theme,
    setLocale: (nextLocale) => {
      startTransition(() => {
        setLocaleState(nextLocale);
        navigateLocale(nextLocale);
      });
    },
    toggleLocale: () => {
      const nextLocale = locale === "en" ? "es" : "en";

      startTransition(() => {
        setLocaleState(nextLocale);
        navigateLocale(nextLocale);
      });
    },
    toggleTheme: () => {
      startTransition(() =>
        setTheme((current) => (current === "dark" ? "light" : "dark")),
      );
    },
  };

  return (
    <SitePreferencesContext.Provider value={value}>
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error(
      "useSitePreferences must be used inside SitePreferencesProvider.",
    );
  }

  return context;
}
