import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("privacy", "es");

export default function Page() {
  return <LegalPage kind="privacy" locale="es" />;
}
