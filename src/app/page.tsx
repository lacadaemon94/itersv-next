import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { LandingPage } from "@/components/landing-page";
import { SitePreferencesProvider } from "@/components/site-preferences";
import { buildHomeMetadata } from "@/lib/seo";
import { buildHomeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildHomeMetadata("en");

export default function HomePage() {
  return (
    <SitePreferencesProvider initialLocale="en">
      <JsonLd data={buildHomeJsonLd("en")} />
      <LandingPage />
    </SitePreferencesProvider>
  );
}
