import { ImageResponse } from "next/og";

import { getHomeOgDescription, getHomeOgTitle } from "@/lib/seo";
import {
  caseStudyContent,
  type CaseStudySlug,
  type Locale,
} from "@/lib/site-data";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

const iterMarkPath =
  "M48 24C48 37.2548 37.2548 48 24 48C19.6468 48 15.5643 46.841 12.0442 44.8147L24.7101 18.7569C25.0975 17.9598 24.5171 17.0323 23.6309 17.0323H10.8142C10.3555 17.0323 9.93692 17.2938 9.73577 17.7061L1.98948 33.5827C0.709764 30.6475 0 27.4066 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM35.5023 30.9677C39.3505 30.9677 42.47 27.8482 42.47 24C42.47 20.1518 39.3505 17.0323 35.5023 17.0323C31.6541 17.0323 28.5346 20.1518 28.5346 24C28.5346 27.8482 31.6541 30.9677 35.5023 30.9677Z";

type SocialImageOptions = {
  kicker: string;
  title: string;
  description: string;
  coverBg?: string;
  caseNumber?: number;
};

function createSocialImage({
  kicker,
  title,
  description,
  coverBg = "linear-gradient(135deg, #571fff 0%, #1fa9c9 52%, #1fffc7 100%)",
  caseNumber,
}: SocialImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: coverBg,
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.26) 1px, transparent 1.8px)",
            backgroundSize: "18px 18px",
            opacity: 0.72,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,11,16,0.08) 0%, rgba(10,11,16,0.62) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 72,
            top: 62,
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            opacity: 0.92,
          }}
        >
          <span
            style={{
              width: 13,
              height: 13,
              borderRadius: 999,
              background: "#1fffc7",
              boxShadow: "0 0 26px #1fffc7",
            }}
          />
          <span>{kicker}</span>
        </div>

        <svg
          viewBox="0 0 48 48"
          width="82"
          height="82"
          style={{ position: "absolute", right: 72, top: 58, opacity: 0.96 }}
        >
          <path d={iterMarkPath} fill="white" />
        </svg>

        <div
          style={{
            position: "absolute",
            left: 72,
            right: caseNumber ? 300 : 72,
            bottom: 78,
            display: "flex",
            flexDirection: "column",
            gap: 26,
          }}
        >
          <div
            style={{
              fontSize: title.length > 42 ? 70 : 82,
              lineHeight: 0.92,
              fontWeight: 800,
              letterSpacing: -3,
            }}
          >
            {title}
          </div>
          <div
            style={{
              maxWidth: 790,
              fontSize: 28,
              lineHeight: 1.28,
              color: "rgba(255,255,255,0.84)",
            }}
          >
            {description}
          </div>
        </div>

        {typeof caseNumber === "number" ? (
          <div
            style={{
              position: "absolute",
              right: 66,
              bottom: 64,
              display: "flex",
              alignItems: "flex-end",
              fontSize: 160,
              lineHeight: 0.82,
              fontWeight: 800,
              letterSpacing: -10,
            }}
          >
            0{caseNumber}
            <span style={{ color: "rgba(255,255,255,0.38)" }}>/02</span>
          </div>
        ) : null}
      </div>
    ),
    socialImageSize,
  );
}

export function createHomeSocialImage(locale: Locale) {
  return createSocialImage({
    kicker: locale === "es" ? "IA . Automatización . Integración" : "AI . Automation . Integration",
    title: getHomeOgTitle(locale),
    description: getHomeOgDescription(locale),
  });
}

export function createCaseStudySocialImage(slug: CaseStudySlug, locale: Locale) {
  const study = caseStudyContent[slug][locale];

  return createSocialImage({
    kicker: study.kicker,
    title: study.title,
    description: study.summary,
    coverBg: study.coverBg,
    caseNumber: study.num,
  });
}
