import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("data-deletion", "es");

export default function Page() {
  return <LegalPage kind="data-deletion" locale="es" />;
}
