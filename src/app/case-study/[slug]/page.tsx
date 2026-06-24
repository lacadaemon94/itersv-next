import { redirect } from "next/navigation";

type SingularCaseStudyRouteProps = {
  params: Promise<{ slug: string }>;
};

export default async function SingularCaseStudyRoute({
  params,
}: SingularCaseStudyRouteProps) {
  const { slug } = await params;

  redirect(`/case-studies/${encodeURIComponent(slug)}`);
}
