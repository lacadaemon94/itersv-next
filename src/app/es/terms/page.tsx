import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("terms", "es");

export default function Page() {
  return <LegalPage kind="terms" locale="es" />;
}
