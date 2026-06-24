"use client";

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Cancel01Icon,
  CheckIcon,
  ChevronDownIcon,
  Facebook01Icon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  MoonIcon,
  NewTwitterIcon,
  Sun01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";

import { AppIcon } from "@/components/app-icon";
import { useSitePreferences } from "@/components/site-preferences";
import { getCaseStudyPath, getHomePath } from "@/lib/i18n";
import {
  caseStudyContent,
  caseStudySlugs,
  socialLinks,
  type CaseStudySlug,
  type SocialPlatform,
} from "@/lib/site-data";

type CaseStudyPageProps = {
  slug: CaseStudySlug;
};

const caseMotionEase = [0.22, 1, 0.36, 1] as const;

const socialIcons = {
  x: NewTwitterIcon,
  facebook: Facebook01Icon,
  instagram: InstagramIcon,
  linkedin: Linkedin01Icon,
  whatsapp: WhatsappIcon,
} satisfies Record<SocialPlatform, typeof NewTwitterIcon>;

const caseHeroSectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.42, ease: caseMotionEase } },
};

const caseCoverVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.972, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.78,
      ease: caseMotionEase,
      when: "beforeChildren",
      staggerChildren: 0.075,
      delayChildren: 0.1,
    },
  },
};

const caseCoverLayerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.62, ease: caseMotionEase } },
};

const caseCoverContentVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.56, ease: caseMotionEase } },
};

const caseCoverNumberVariants: Variants = {
  hidden: { opacity: 0, x: 34, scale: 0.92 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.68, ease: caseMotionEase } },
};

const caseStatsGridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

const caseStatVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: caseMotionEase } },
};

const caseMenuVariants: Variants = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.52, ease: caseMotionEase, when: "beforeChildren" } },
};

const caseMenuListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
};

const caseMenuItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.36, ease: caseMotionEase } },
};

function ThemeGlyph({ theme }: { theme: "dark" | "light" }) {
  if (theme === "dark") {
    return <AppIcon aria-hidden="true" icon={MoonIcon} size={16} />;
  }

  return <AppIcon aria-hidden="true" icon={Sun01Icon} size={16} />;
}

function IterMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-[38px] w-[92px]"
      viewBox="0 0 116 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 24C48 37.2548 37.2548 48 24 48C19.6468 48 15.5643 46.841 12.0442 44.8147L24.7101 18.7569C25.0975 17.9598 24.5171 17.0323 23.6309 17.0323H10.8142C10.3555 17.0323 9.93692 17.2938 9.73577 17.7061L1.98948 33.5827C0.709764 30.6475 0 27.4066 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM35.5023 30.9677C39.3505 30.9677 42.47 27.8482 42.47 24C42.47 20.1518 39.3505 17.0323 35.5023 17.0323C31.6541 17.0323 28.5346 20.1518 28.5346 24C28.5346 27.8482 31.6541 30.9677 35.5023 30.9677Z"
      />
      <path
        fill="currentColor"
        d="M62.56 13.324H67.552V35.5H62.56V13.324ZM72.205 14.476L76.973 13.708V18.668H82.701V22.636H76.973V28.556C76.973 29.5587 77.1437 30.3587 77.485 30.956C77.8477 31.5533 78.5623 31.852 79.629 31.852C80.141 31.852 80.6637 31.8093 81.197 31.724C81.7517 31.6173 82.253 31.4787 82.701 31.308L83.373 35.02C82.797 35.2547 82.157 35.4573 81.453 35.628C80.749 35.7987 79.885 35.884 78.861 35.884C77.5597 35.884 76.4823 35.7133 75.629 35.372C74.7757 35.0093 74.093 34.5187 73.581 33.9C73.069 33.26 72.7063 32.492 72.493 31.596C72.301 30.7 72.205 29.708 72.205 28.62V14.476ZM85.1588 27.212C85.1588 25.7187 85.3828 24.4173 85.8307 23.308C86.3001 22.1773 86.9081 21.2387 87.6548 20.492C88.4014 19.7453 89.2548 19.18 90.2148 18.796C91.1961 18.412 92.1988 18.22 93.2228 18.22C95.6121 18.22 97.5001 18.956 98.8868 20.428C100.273 21.8787 100.967 24.0227 100.967 26.86C100.967 27.1373 100.956 27.4467 100.935 27.788C100.913 28.108 100.892 28.396 100.871 28.652H90.0548C90.1614 29.6333 90.6201 30.412 91.4308 30.988C92.2414 31.564 93.3294 31.852 94.6948 31.852C95.5694 31.852 96.4228 31.7773 97.2548 31.628C98.1081 31.4573 98.8014 31.2547 99.3348 31.02L99.9748 34.892C99.7188 35.02 99.3774 35.148 98.9508 35.276C98.5241 35.404 98.0441 35.5107 97.5108 35.596C96.9988 35.7027 96.4441 35.788 95.8468 35.852C95.2494 35.916 94.6521 35.948 94.0548 35.948C92.5401 35.948 91.2174 35.724 90.0868 35.276C88.9774 34.828 88.0494 34.22 87.3028 33.452C86.5774 32.6627 86.0334 31.7347 85.6708 30.668C85.3294 29.6013 85.1588 28.4493 85.1588 27.212ZM96.3588 25.388C96.3374 24.9827 96.2628 24.588 96.1348 24.204C96.0281 23.82 95.8468 23.4787 95.5908 23.18C95.3561 22.8813 95.0468 22.636 94.6628 22.444C94.3001 22.252 93.8414 22.156 93.2868 22.156C92.7534 22.156 92.2948 22.252 91.9108 22.444C91.5268 22.6147 91.2068 22.8493 90.9508 23.148C90.6948 23.4467 90.4921 23.7987 90.3428 24.204C90.2148 24.588 90.1188 24.9827 90.0548 25.388H96.3588ZM114.79 22.892C114.364 22.7853 113.862 22.6787 113.286 22.572C112.71 22.444 112.092 22.38 111.43 22.38C111.132 22.38 110.769 22.412 110.342 22.476C109.937 22.5187 109.628 22.572 109.414 22.636V35.5H104.646V19.564C105.5 19.2653 106.502 18.988 107.654 18.732C108.828 18.4547 110.129 18.316 111.558 18.316C111.814 18.316 112.124 18.3373 112.486 18.38C112.849 18.4013 113.212 18.444 113.574 18.508C113.937 18.5507 114.3 18.6147 114.662 18.7C115.025 18.764 115.334 18.8493 115.59 18.956L114.79 22.892Z"
      />
    </svg>
  );
}

export function CaseStudyPage({ slug }: CaseStudyPageProps) {
  const { locale, theme, toggleLocale, toggleTheme } = useSitePreferences();
  const prefersReducedMotion = Boolean(useReducedMotion());
  const study = caseStudyContent[slug][locale];
  const homePath = getHomePath(locale);
  const nextSlug =
    caseStudySlugs[(caseStudySlugs.indexOf(slug) + 1) % caseStudySlugs.length];
  const nextStudy = caseStudyContent[nextSlug][locale];

  const copy =
    locale === "en"
      ? {
          nav: {
            services: "Services",
            cases: "Case Studies",
            plans: "Plans",
            credibility: "Credibility",
          },
          backToSite: "Back to site",
          live: "Live demo",
          code: "Source",
          onPage: "On this page",
          problem: "/ problem",
          approach: "/ approach",
          build: "/ build",
          outcome: "/ outcome",
          impactMap: "Business impact map",
          takeaways: "/ takeaways",
          nextCase: "/ next case",
          openNext: "Open case",
          want: "/ your turn",
          ctaTitle: "Want one of these for your team?",
          ctaSub:
            "Book a 20-minute diagnostic. We map your workflow and tell you which shape fits.",
          ctaBtn: "Book a call",
          rights: "All rights reserved.",
        }
      : {
          nav: {
            services: "Servicios",
            cases: "Casos",
            plans: "Planes",
            credibility: "Respaldo",
          },
          backToSite: "Volver al sitio",
          live: "Demo en vivo",
          code: "Codigo",
          onPage: "En esta pagina",
          problem: "/ problema",
          approach: "/ enfoque",
          build: "/ build",
          outcome: "/ resultado",
          impactMap: "Mapa de impacto",
          takeaways: "/ aprendizajes",
          nextCase: "/ siguiente caso",
          openNext: "Abrir caso",
          want: "/ tu turno",
          ctaTitle: "Quieres uno asi para tu equipo?",
          ctaSub:
            "Agenda un diagnostico de 20 min. Mapeamos tu workflow y te decimos que forma encaja.",
          ctaBtn: "Agenda llamada",
          rights: "Todos los derechos reservados.",
        };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] font-[family:var(--font-body)] text-[var(--text)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] [background-size:80px_80px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(180deg, black 0%, black 20%, transparent 80%)",
          maskImage:
            "linear-gradient(180deg, black 0%, black 20%, transparent 80%)",
        }}
      />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-[18px]">
        <div className="mx-auto flex max-w-[1200px] items-center gap-5 whitespace-nowrap px-6 py-[14px] max-lg:justify-between max-sm:px-[18px]">
          <Link href={homePath} className="flex items-center text-[var(--text)]" aria-label="Iter">
            <IterMark />
          </Link>

          <div className="flex flex-1 justify-center gap-6 text-[13.5px] text-[var(--text)] max-lg:hidden">
            <Link href={`${homePath}#services`} className="py-1.5">
              {copy.nav.services}
            </Link>
            <Link href={`${homePath}#cases`} className="py-1.5 text-[var(--accent)]">
              {copy.nav.cases}
            </Link>
            <Link href={`${homePath}#plans`} className="py-1.5">
              {copy.nav.plans}
            </Link>
            <Link href={`${homePath}#credibility`} className="py-1.5">
              {copy.nav.credibility}
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-lg border border-[var(--border)] bg-transparent px-[10px] py-2 font-[family:var(--font-mono)] text-xs tracking-[0.04em] text-[var(--text-dim)]"
            aria-label="Toggle language"
          >
            <span className={locale === "en" ? "text-[var(--accent)]" : ""}>EN</span>
            <span className="mx-1.5 opacity-40">/</span>
            <span className={locale === "es" ? "text-[var(--accent)]" : ""}>ES</span>
          </button>

          <div className="hidden items-center gap-1 xl:flex">
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex size-9 items-center justify-center rounded-lg border border-[var(--border)] bg-transparent text-[var(--text-dim)] transition hover:-translate-y-px hover:text-[var(--text)]"
              >
                <AppIcon
                  aria-hidden="true"
                  icon={socialIcons[link.platform]}
                  size={16}
                  strokeWidth={1.9}
                />
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex size-9 items-center justify-center rounded-lg border border-[var(--border)] bg-transparent text-[var(--text-dim)]"
            aria-label="Toggle theme"
          >
            <ThemeGlyph theme={theme} />
          </button>

          <Link
            href={homePath}
            scroll
            className="inline-flex items-center gap-1.5 rounded-[10px] bg-[var(--accent)] px-4 py-2.5 text-[13px] font-semibold"
            style={{ color: "var(--accent-ink)" }}
          >
            <AppIcon aria-hidden="true" icon={ArrowLeft01Icon} size={13} strokeWidth={2.4} />
            <span className="max-[680px]:hidden">{copy.backToSite}</span>
          </Link>
        </div>
      </nav>

      <main>
        <motion.section
          className="relative z-[1] px-6 pb-10 pt-[120px] max-sm:px-4"
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "show"}
          variants={caseHeroSectionVariants}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-7 flex items-center gap-2.5 font-[family:var(--font-mono)] text-[11.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
              <Link href={homePath}>Iter</Link>
              <span>/</span>
              <Link href={`${homePath}#cases`}>cases</Link>
              <span>/</span>
              <span className="text-[var(--accent)]">{study.slug}</span>
            </div>

            <motion.div
              className="relative aspect-[21/9] overflow-hidden rounded-[28px] border border-[var(--border-strong)] max-[920px]:aspect-[4/3] max-[920px]:rounded-[22px] max-[680px]:aspect-[5/4] max-[680px]:rounded-[18px]"
              variants={caseCoverVariants}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: study.coverBg }}
                variants={caseCoverLayerVariants}
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1.5px)] [background-size:18px_18px]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(135deg, black, transparent 65%)",
                  maskImage: "linear-gradient(135deg, black, transparent 65%)",
                }}
                variants={caseCoverLayerVariants}
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]"
                variants={caseCoverLayerVariants}
              />

              <motion.div
                className="absolute left-8 top-7 flex items-center gap-2.5 max-[680px]:left-[18px]"
                variants={caseCoverContentVariants}
              >
                <span className="relative inline-block size-2">
                  <span className="absolute inset-0 rounded-full bg-[#1FFFC7] [animation:iter-pulse_2.4s_ease-in-out_infinite]" />
                  <span className="absolute inset-[2px] rounded-full bg-[#1FFFC7]" />
                </span>
                <span className="font-[family:var(--font-mono)] text-[11.5px] uppercase tracking-[0.14em] text-white/90">
                  {study.kicker}
                </span>
              </motion.div>

              <motion.div className="absolute bottom-9 right-10 font-[family:var(--font-display)] text-[220px] font-bold leading-[0.82] tracking-[-0.06em] text-white/95 max-[920px]:bottom-6 max-[920px]:right-6 max-[920px]:text-[clamp(96px,22vw,160px)] max-[680px]:bottom-4 max-[680px]:right-[18px] max-[680px]:text-[clamp(72px,22vw,120px)]"
                variants={caseCoverNumberVariants}
              >
                0{study.num}
              </motion.div>
              <motion.div
                className="absolute bottom-14 right-[254px] font-[family:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-white/70 [writing-mode:vertical-rl] max-[920px]:hidden"
                variants={caseCoverContentVariants}
              >
                case /02
              </motion.div>

              <motion.div className="absolute bottom-10 left-10 right-80 max-[920px]:bottom-6 max-[920px]:left-6 max-[920px]:right-6 max-[680px]:bottom-4 max-[680px]:left-[18px] max-[680px]:right-[18px]"
                variants={caseCoverContentVariants}
              >
                <div className="text-balance font-[family:var(--font-display)] text-[clamp(36px,5vw,64px)] font-bold leading-none tracking-[-0.03em] text-white/95">
                  {study.title}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <section className="relative z-[1] px-6 py-10 max-sm:px-4">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[1.4fr_1fr] items-start gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-8">
            <div>
              <p className="mb-7 max-w-[640px] text-[22px] leading-[1.5] text-[var(--text)]">
                {study.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-[family:var(--font-mono)] text-xs text-[var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[18px] rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-6">
              {study.meta.map((item) => (
                <div
                  key={item.k}
                  className="grid grid-cols-[1fr_1.4fr] items-baseline gap-4"
                >
                  <div className="font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {item.k}
                  </div>
                  <div className="text-[14.5px] font-medium tracking-[-0.005em] text-[var(--text)]">
                    {item.v}
                  </div>
                </div>
              ))}
              <div className="mt-1.5 flex gap-2">
                <Link
                  href={study.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 items-center justify-center gap-2 rounded-[10px] bg-[var(--accent)] px-[14px] py-2.5 text-center text-[13px] font-semibold"
                  style={{ color: "var(--accent-ink)" }}
                >
                  <span>{copy.live}</span>
                  <AppIcon
                    aria-hidden="true"
                    icon={ArrowUpRight01Icon}
                    size={11}
                    strokeWidth={2.4}
                    className="ml-2 inline"
                  />
                </Link>
                <Link
                  href={study.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-[var(--border)] bg-[var(--surface-strong)] px-[14px] py-2.5 text-[13px] font-medium text-[var(--text)]"
                >
                  <AppIcon aria-hidden="true" icon={GithubIcon} size={12} strokeWidth={2.1} />
                  <span>{copy.code}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-[1] px-6 py-10 max-sm:px-4">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              className="grid grid-cols-4 gap-px overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--border)] max-[920px]:grid-cols-2 max-[480px]:grid-cols-1"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.28 }}
              variants={caseStatsGridVariants}
            >
              {study.heroStats.map((stat) => (
                <motion.div
                  key={stat.k}
                  className="bg-[var(--bg)] px-6 py-7"
                  variants={caseStatVariants}
                >
                  <div className="mb-2.5 font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {stat.k}
                  </div>
                  <div className="font-[family:var(--font-display)] text-[38px] font-bold leading-none tracking-[-0.025em] text-[var(--text)]">
                    {stat.v}
                  </div>
                  <div className="mt-1.5 text-[13px] text-[var(--text-dim)]">
                    {stat.s}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative z-[1] px-6 pb-20 pt-[60px] max-sm:px-4">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[240px_1fr] gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-8">
            <motion.aside
              className="sticky top-[100px] h-fit max-[920px]:hidden"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.32 }}
              variants={caseMenuVariants}
            >
              <div className="mb-4 font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {copy.onPage}
              </div>
              <motion.ul
                className="m-0 flex list-none flex-col gap-2.5 p-0"
                variants={caseMenuListVariants}
              >
                {study.toc.map((item) => (
                  <motion.li key={item.id} variants={caseMenuItemVariants}>
                    <Link
                      href={`#${item.id}`}
                      className="flex items-center gap-2.5 text-[13.5px] text-[var(--text-dim)]"
                    >
                      <span className="w-6 flex-none font-[family:var(--font-mono)] text-[10.5px] text-[var(--text-muted)]">
                        {item.num}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.aside>

            <div className="max-w-[720px]">
              <section id="problem" className="mb-14">
                <div className="mb-3 font-[family:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  {copy.problem}
                </div>
                <h2 className="mb-[18px] font-[family:var(--font-display)] text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--text)] max-[680px]:text-[26px]">
                  {study.problemTitle}
                </h2>
                <p className="mb-4 text-[17px] leading-[1.65] text-[var(--text-dim)] max-[680px]:text-base">
                  {study.problemP1}
                </p>
                <p className="text-[17px] leading-[1.65] text-[var(--text-dim)] max-[680px]:text-base">
                  {study.problemP2}
                </p>
              </section>

              <section id="approach" className="mb-14">
                <div className="mb-3 font-[family:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  {copy.approach}
                </div>
                <h2 className="mb-[18px] font-[family:var(--font-display)] text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--text)] max-[680px]:text-[26px]">
                  {study.approachTitle}
                </h2>
                <p className="mb-6 text-[17px] leading-[1.65] text-[var(--text-dim)] max-[680px]:text-base">
                  {study.approachP}
                </p>

                <div className="relative mb-6 overflow-hidden rounded-[20px] border border-[var(--border-strong)] bg-[var(--surface)] p-8 max-[920px]:rounded-2xl max-[920px]:p-[22px]">
                  <div className="mb-6 font-[family:var(--font-mono)] text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {study.architecture} . {study.archCaption}
                  </div>
                  <div className="flex items-center justify-between gap-3 overflow-x-auto pb-2 max-[920px]:justify-start">
                    {study.archNodes.map((node, index) => (
                      <div key={node.label} className="flex flex-none items-center gap-3">
                        <div className="flex min-w-[88px] flex-col items-center gap-2">
                          <div
                            className={`flex size-14 items-center justify-center rounded-[14px] border px-1 text-center font-[family:var(--font-mono)] text-[11px] tracking-[0.04em] ${
                              node.accent
                                ? "border-[var(--accent-soft)] bg-[rgba(31,255,199,0.08)] text-[var(--accent)]"
                                : "border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--text)]"
                            }`}
                          >
                            {node.icon}
                          </div>
                          <div className="text-center font-[family:var(--font-mono)] text-[10.5px] leading-[1.3] text-[var(--text)]">
                            {node.label}
                          </div>
                        </div>
                        {index < study.archNodes.length - 1 ? (
                          <AppIcon
                            aria-hidden="true"
                            icon={ArrowRight01Icon}
                            size={20}
                            className="flex-none text-[var(--accent)]"
                            strokeWidth={1.8}
                          />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="build" className="mb-14">
                <div className="mb-3 font-[family:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  {copy.build}
                </div>
                <h2 className="mb-[22px] font-[family:var(--font-display)] text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--text)] max-[680px]:text-[26px]">
                  {study.buildTitle}
                </h2>

                <ul className="m-0 flex list-none flex-col gap-[18px] p-0">
                  {study.buildSteps.map((step) => (
                    <li
                      key={step.num}
                      className="grid grid-cols-[36px_1fr] gap-[18px] items-start"
                    >
                      <div className="flex size-9 items-center justify-center rounded-[10px] bg-[var(--accent-soft)] font-[family:var(--font-mono)] text-xs font-bold text-[var(--accent)]">
                        {step.num}
                      </div>
                      <div>
                        <div className="mb-1 font-[family:var(--font-display)] text-[17px] font-bold tracking-[-0.015em] text-[var(--text)]">
                          {step.title}
                        </div>
                        <p className="m-0 text-[15px] leading-[1.55] text-[var(--text-dim)]">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="result" className="mb-14">
                <div className="mb-3 font-[family:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  {copy.outcome}
                </div>
                <h2 className="mb-[22px] font-[family:var(--font-display)] text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--text)] max-[680px]:text-[26px]">
                  {study.outcomeTitle}
                </h2>
                <p className="mb-7 text-[17px] leading-[1.65] text-[var(--text-dim)] max-[680px]:text-base">
                  {study.outcomeP}
                </p>

                <div className="overflow-hidden rounded-[22px] border border-[var(--border-strong)] bg-[var(--surface)]">
                  <div className="relative border-b border-[var(--border)] bg-[var(--bg-elevated)] px-7 py-6">
                    <div
                      aria-hidden="true"
                      className="absolute right-[-64px] top-[-72px] size-48 rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_68%)] opacity-65 blur-[28px]"
                    />
                    <div className="relative mb-2 font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                      {copy.impactMap}
                    </div>
                    <p className="relative m-0 text-[16px] leading-[1.6] text-[var(--text)]">
                      {study.impactIntro}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-[var(--border)] max-[680px]:grid-cols-1">
                    {study.impactAreas.map((area) => (
                      <div key={area.k} className="bg-[var(--surface)] px-6 py-5">
                        <div className="mb-2 font-[family:var(--font-mono)] text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                          {area.k}
                        </div>
                        <div className="mb-2 font-[family:var(--font-display)] text-[21px] font-bold leading-[1.12] tracking-[-0.02em] text-[var(--text)]">
                          {area.v}
                        </div>
                        <p className="m-0 text-[14px] leading-[1.55] text-[var(--text-dim)]">
                          {area.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="takeaways" className="mb-6">
                <div className="mb-3 font-[family:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  {copy.takeaways}
                </div>
                <h2 className="mb-[22px] font-[family:var(--font-display)] text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--text)] max-[680px]:text-[26px]">
                  {study.takeawaysTitle}
                </h2>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {study.takeaways.map((item) => (
                    <li
                      key={item}
                      className="grid grid-cols-[22px_1fr] gap-[14px] items-start text-base leading-[1.55] text-[var(--text)]"
                    >
                      <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                        <AppIcon aria-hidden="true" icon={CheckIcon} size={11} strokeWidth={3.1} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>

        <section className="relative z-[1] px-6 pb-20 pt-[60px] max-sm:px-4">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-2 gap-5 max-[920px]:grid-cols-1 max-[920px]:gap-4">
              <Link
                href={getCaseStudyPath(nextStudy.slug, locale)}
                scroll
                className="block overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:border-[var(--border-strong)]"
              >
                <div className="mb-[18px] font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {copy.nextCase}
                </div>
                <h3 className="mb-2 font-[family:var(--font-display)] text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
                  {nextStudy.title}
                </h3>
                <p className="mb-[22px] text-[14.5px] leading-[1.5] text-[var(--text-dim)]">
                  {nextStudy.summary}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                  <span>{copy.openNext}</span>
                  <AppIcon aria-hidden="true" icon={ArrowRight01Icon} size={14} strokeWidth={2.4} />
                </div>
              </Link>

              <Link
                href={`${homePath}#contact`}
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-7"
              >
                <div className="absolute right-[-100px] top-[-100px] size-80 bg-[radial-gradient(circle,var(--accent-glow),transparent_65%)] opacity-55 blur-[40px]" />
                <div className="relative">
                  <div className="mb-[18px] font-[family:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                    {copy.want}
                  </div>
                  <h3 className="mb-2 font-[family:var(--font-display)] text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
                    {copy.ctaTitle}
                  </h3>
                  <p className="mb-[22px] text-[14.5px] leading-[1.5] text-[var(--text-dim)]">
                    {copy.ctaSub}
                  </p>
                </div>
                <div
                  className="relative inline-flex self-start rounded-xl bg-[var(--accent)] px-[18px] py-3 text-sm font-semibold"
                  style={{ color: "var(--accent-ink)" }}
                >
                  <span>{copy.ctaBtn}</span>
                  <AppIcon
                    aria-hidden="true"
                    icon={ArrowRight01Icon}
                    size={14}
                    strokeWidth={2.4}
                    className="ml-2 inline"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-[1] border-t border-[var(--border)] px-6 py-8 max-sm:px-4">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 font-[family:var(--font-mono)] text-[11.5px] tracking-[0.04em] text-[var(--text-muted)]">
          <div>© 2026 Iter Labs. {copy.rights}</div>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex size-8 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-dim)] transition hover:text-[var(--text)]"
              >
                <AppIcon
                  aria-hidden="true"
                  icon={socialIcons[link.platform]}
                  size={15}
                  strokeWidth={1.9}
                />
              </Link>
            ))}
          </div>
          <div>Clear scope . Source ownership</div>
        </div>
      </footer>
    </div>
  );
}
