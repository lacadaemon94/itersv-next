import {
  createHomeSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Vista previa social de Iter para agentes de IA y automatización";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function SpanishOpenGraphImage() {
  return createHomeSocialImage("es");
}
