import { redirect } from "next/navigation";

type SpanishSingularCaseStudyRouteProps = {
  params: Promise<{ slug: string }>;
};

export default async function SpanishSingularCaseStudyRoute({
  params,
}: SpanishSingularCaseStudyRouteProps) {
  const { slug } = await params;

  redirect(`/es/case-studies/${encodeURIComponent(slug)}`);
}
