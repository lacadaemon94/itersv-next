import {
  createCaseStudySocialImage,
  createHomeSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";
import { isCaseStudySlug } from "@/lib/site-data";

type SpanishCaseStudyImageProps = {
  params: Promise<{ slug: string }>;
};

export const alt = "Vista previa social del caso de estudio de Iter";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function SpanishCaseStudyOpenGraphImage({
  params,
}: SpanishCaseStudyImageProps) {
  const { slug } = await params;

  if (!isCaseStudySlug(slug)) {
    return createHomeSocialImage("es");
  }

  return createCaseStudySocialImage(slug, "es");
}
