import type { Metadata } from "next";

import { LandingPage } from "@/components/landing-page";
import { SitePreferencesProvider } from "@/components/site-preferences";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata: Metadata = buildHomeMetadata("en");

export default function HomePage() {
  return (
    <SitePreferencesProvider initialLocale="en">
      <LandingPage />
    </SitePreferencesProvider>
  );
}
