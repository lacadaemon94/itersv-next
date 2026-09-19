import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("privacy", "en");

export default function Page() {
  return <LegalPage kind="privacy" locale="en" />;
}
