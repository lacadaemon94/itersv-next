import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { LandingPage } from "@/components/landing-page";
import { SitePreferencesProvider } from "@/components/site-preferences";
import { buildHomeMetadata } from "@/lib/seo";
import { buildHomeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildHomeMetadata("es");

export default function SpanishHomePage() {
  return (
    <SitePreferencesProvider initialLocale="es">
      <JsonLd data={buildHomeJsonLd("es")} />
      <LandingPage />
    </SitePreferencesProvider>
  );
}
