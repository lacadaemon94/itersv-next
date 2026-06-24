"use client";

import {
  ArrowRight01Icon,
  Facebook01Icon,
  InstagramIcon,
  Linkedin01Icon,
  MoonIcon,
  NewTwitterIcon,
  Sun01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { AppIcon } from "@/components/app-icon";
import { useSitePreferences } from "@/components/site-preferences";
import {
  contactPhoneHref,
  socialLinks,
  type Locale,
  type NavLink,
  type SocialPlatform,
  type ThemeMode,
} from "@/lib/site-data";

const socialIcons = {
  x: NewTwitterIcon,
  facebook: Facebook01Icon,
  instagram: InstagramIcon,
  linkedin: Linkedin01Icon,
  whatsapp: WhatsappIcon,
} satisfies Record<SocialPlatform, typeof NewTwitterIcon>;

function ThemeGlyph({ theme }: { theme: ThemeMode }) {
  if (theme === "dark") {
    return <AppIcon aria-hidden="true" icon={MoonIcon} size={16} />;
  }

  return <AppIcon aria-hidden="true" icon={Sun01Icon} size={16} />;
}

function IterMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-[82px] sm:h-9 sm:w-[92px]"
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

type SiteHeaderProps = {
  locale: Locale;
  navLinks: NavLink[];
  ctaLabel: string;
  caseStudyMode?: boolean;
  phoneLabel?: string;
  onCtaClick?: () => void;
};

export function SiteHeader({
  locale,
  navLinks,
  ctaLabel,
  caseStudyMode = false,
  phoneLabel,
  onCtaClick,
}: SiteHeaderProps) {
  const { toggleLocale, toggleTheme, theme } = useSitePreferences();
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl"
      initial={
        prefersReducedMotion ? undefined : { opacity: 0, y: -18, filter: "blur(10px)" }
      }
      animate={
        prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-3 sm:gap-4 sm:px-6">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: -12 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={caseStudyMode ? "/" : "#hero"}
            className="shrink-0 text-[var(--text)]"
            aria-label="Iter"
          >
            <IterMark />
          </Link>
        </motion.div>

        <motion.nav
          className="hidden flex-1 items-center justify-center gap-6 text-sm text-[var(--text-dim)] lg:flex"
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "show"}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1,
              },
            },
          }}
          onMouseLeave={() => setHoveredHref(null)}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              className="relative"
              variants={{
                hidden: { opacity: 0, y: -8 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              {hoveredHref === link.href ? (
                <motion.span
                  layoutId="site-header-nav-pill"
                  className="absolute inset-x-[-10px] inset-y-[-8px] rounded-xl border border-[var(--border)] bg-[var(--surface)]/90"
                  transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.7 }}
                />
              ) : null}
              <Link
                href={link.href}
                onMouseEnter={() => setHoveredHref(link.href)}
                onFocus={() => setHoveredHref(link.href)}
                onBlur={() => setHoveredHref(null)}
                className="relative z-[1] transition hover:text-[var(--text)]"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <motion.div
            className="hidden items-center gap-1 xl:flex"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="iter-pill flex size-9 items-center justify-center rounded-lg text-[var(--text-dim)] transition hover:-translate-y-px hover:text-[var(--text)]"
              >
                <AppIcon
                  aria-hidden="true"
                  icon={socialIcons[link.platform]}
                  size={16}
                  strokeWidth={1.9}
                />
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={toggleLocale}
              className="iter-pill iter-mono rounded-lg px-3 py-2 text-xs tracking-[0.14em]"
              aria-label="Toggle language"
            >
              <span className={locale === "en" ? "text-[var(--accent)]" : ""}>
                EN
              </span>
              <span className="px-1 opacity-40">/</span>
              <span className={locale === "es" ? "text-[var(--accent)]" : ""}>
                ES
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={toggleTheme}
              className="iter-pill rounded-lg p-2 text-[var(--text-dim)] transition hover:text-[var(--text)]"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  className="block"
                  initial={
                    prefersReducedMotion ? undefined : { opacity: 0, rotate: -28, scale: 0.88 }
                  }
                  animate={
                    prefersReducedMotion ? undefined : { opacity: 1, rotate: 0, scale: 1 }
                  }
                  exit={
                    prefersReducedMotion ? undefined : { opacity: 0, rotate: 24, scale: 0.88 }
                  }
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ThemeGlyph theme={theme} />
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.div>

          {phoneLabel ? (
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: 10 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.42, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={contactPhoneHref}
                className="hidden items-center gap-2 px-1 font-[family:var(--font-mono)] text-xs tracking-[0.04em] text-[var(--text-dim)] transition hover:text-[var(--text)] xl:inline-flex"
              >
                <AppIcon aria-hidden="true" icon={WhatsappIcon} size={14} />
                {phoneLabel}
              </Link>
            </motion.div>
          ) : null}

          {onCtaClick ? (
            <motion.button
              type="button"
              onClick={onCtaClick}
              className="iter-accent-ring inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-[var(--accent)] px-3 py-2 text-xs font-semibold sm:gap-2 sm:px-4 sm:text-sm"
              style={{ color: "var(--accent-ink)" }}
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: 14, scale: 0.96 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
              whileHover={prefersReducedMotion ? undefined : { y: -1.5, scale: 1.01 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              transition={{
                duration: 0.42,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="max-[430px]:hidden">{ctaLabel}</span>
              <span className="hidden max-[430px]:inline">
                {locale === "es" ? "Llamada" : "Book call"}
              </span>
              <motion.span
                initial={false}
                whileHover={prefersReducedMotion ? undefined : { x: 2.5 }}
                transition={{ type: "spring", stiffness: 360, damping: 22, mass: 0.7 }}
              >
                <AppIcon aria-hidden="true" icon={ArrowRight01Icon} size={16} strokeWidth={2.2} />
              </motion.span>
            </motion.button>
          ) : (
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: 14, scale: 0.96 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
              whileHover={prefersReducedMotion ? undefined : { y: -1.5, scale: 1.01 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              transition={{
                duration: 0.42,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={caseStudyMode ? "/" : "#contact"}
                className="iter-accent-ring inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-[var(--accent)] px-3 py-2 text-xs font-semibold sm:gap-2 sm:px-4 sm:text-sm"
                style={{ color: "var(--accent-ink)" }}
              >
                <span className="max-[430px]:hidden">{ctaLabel}</span>
                <span className="hidden max-[430px]:inline">
                  {locale === "es" ? "Llamada" : "Book call"}
                </span>
                <motion.span
                  initial={false}
                  whileHover={prefersReducedMotion ? undefined : { x: 2.5 }}
                  transition={{ type: "spring", stiffness: 360, damping: 22, mass: 0.7 }}
                >
                  <AppIcon aria-hidden="true" icon={ArrowRight01Icon} size={16} strokeWidth={2.2} />
                </motion.span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
