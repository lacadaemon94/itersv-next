import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("data-deletion", "en");

export default function Page() {
  return <LegalPage kind="data-deletion" locale="en" />;
}
