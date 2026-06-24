import {
  createCaseStudySocialImage,
  createHomeSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";
import { isCaseStudySlug } from "@/lib/site-data";

type CaseStudyImageProps = {
  params: Promise<{ slug: string }>;
};

export const alt = "Iter case study social preview";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function CaseStudyOpenGraphImage({
  params,
}: CaseStudyImageProps) {
  const { slug } = await params;

  if (!isCaseStudySlug(slug)) {
    return createHomeSocialImage("en");
  }

  return createCaseStudySocialImage(slug, "en");
}
