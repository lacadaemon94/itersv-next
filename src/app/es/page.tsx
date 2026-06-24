import type { Metadata } from "next";

import { LandingPage } from "@/components/landing-page";
import { SitePreferencesProvider } from "@/components/site-preferences";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata: Metadata = buildHomeMetadata("es");

export default function SpanishHomePage() {
  return (
    <SitePreferencesProvider initialLocale="es">
      <LandingPage />
    </SitePreferencesProvider>
  );
}
