"use client";

import {
  AiChatIcon,
  ArrowDown01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Cancel01Icon,
  CheckIcon,
  ChevronDownIcon,
  Facebook01Icon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
  Shield02Icon,
  SourceCodeIcon,
  WhatsappIcon,
  WorkflowCircle01Icon,
} from "@hugeicons/core-free-icons";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState, type PointerEvent } from "react";

import { AppIcon } from "@/components/app-icon";
import { SiteHeader } from "@/components/site-header";
import { useSitePreferences } from "@/components/site-preferences";
import { StrategyCallSubmitStatus } from "@/components/strategy-call-submit-status";
import { getCaseStudyPath, localizeHref } from "@/lib/i18n";
import {
  contactPhoneHref,
  getNavLinks,
  landingContent,
  socialLinks,
  stackTools,
  tickerStack,
  type SocialPlatform,
} from "@/lib/site-data";

const landingMotionEase = [0.22, 1, 0.36, 1] as const;
const strategyCallSubmitCopy = {
  en: {
    loadingDetail: "Saving the request and notifying Iter now.",
    loadingTitle: "Routing request",
    successDetail: "Your request was received and Iter has been notified.",
    successTitle: "Request sent",
  },
  es: {
    loadingDetail: "Guardando la solicitud y notificando a Iter.",
    loadingTitle: "Enviando solicitud",
    successDetail: "Recibimos tu solicitud e Iter ya fue notificado.",
    successTitle: "Solicitud enviada",
  },
} as const;

const socialIcons = {
  x: NewTwitterIcon,
  facebook: Facebook01Icon,
  instagram: InstagramIcon,
  linkedin: Linkedin01Icon,
  whatsapp: WhatsappIcon,
} satisfies Record<SocialPlatform, typeof NewTwitterIcon>;

const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.58, ease: landingMotionEase },
  },
};

const sectionStaggerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const sectionCardVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.982, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.58, ease: landingMotionEase },
  },
};

const sectionListItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.34, ease: landingMotionEase },
  },
};

const ctaPanelVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.982, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.68,
      ease: landingMotionEase,
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

function HeroOrb({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 20, mass: 0.9 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 20, mass: 0.9 });
  const orbitX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const orbitY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const chipShiftX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const chipShiftY = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const farDotX = useTransform(springX, [-0.5, 0.5], [10, -10]);
  const farDotY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const topChipX = useTransform(springX, [-0.5, 0.5], [6, -6]);
  const topChipY = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const sideChipX = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const sideChipY = useTransform(springY, [-0.5, 0.5], [-5, 5]);
  const bottomChipX = useTransform(springX, [-0.5, 0.5], [3, -3]);
  const bottomChipY = useTransform(springY, [-0.5, 0.5], [5, -5]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(px);
    pointerY.set(py);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className="relative aspect-square w-full max-w-[460px] justify-self-end max-lg:order-first max-lg:mx-auto max-lg:max-w-[300px] max-sm:max-w-[220px]"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26, scale: 0.94 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={
        prefersReducedMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }
      }
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-8%] bg-[radial-gradient(circle,var(--dot)_1px,transparent_1.5px)] opacity-90"
        style={{
          x: prefersReducedMotion ? undefined : chipShiftX,
          y: prefersReducedMotion ? undefined : chipShiftY,
          backgroundSize: "12px 12px",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 32%, black 36%, black 56%, transparent 64%)",
          maskImage:
            "radial-gradient(circle, transparent 32%, black 36%, black 56%, transparent 64%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-22%] bg-[radial-gradient(circle,var(--dot)_1px,transparent_1.5px)] opacity-55"
        style={{
          x: prefersReducedMotion ? undefined : farDotX,
          y: prefersReducedMotion ? undefined : farDotY,
          backgroundSize: "18px 18px",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 64%, black 68%, black 82%, transparent 88%)",
          maskImage:
            "radial-gradient(circle, transparent 64%, black 68%, black 82%, transparent 88%)",
        }}
      />
      <div className="absolute left-0 top-0 size-[18px] border-l border-t border-[var(--text)] opacity-35" />
      <div className="absolute right-0 top-0 size-[18px] border-r border-t border-[var(--text)] opacity-35" />
      <div className="absolute bottom-0 left-0 size-[18px] border-b border-l border-[var(--text)] opacity-35" />
      <div className="absolute bottom-0 right-0 size-[18px] border-b border-r border-[var(--text)] opacity-35" />

      <motion.svg
        viewBox="0 0 490 490"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-[12%] h-[76%] w-[76%] [filter:drop-shadow(0_30px_70px_rgba(31,255,199,0.22))_drop-shadow(0_16px_48px_rgba(105,30,235,0.28))]"
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: orbitX,
                y: orbitY,
              }
        }
      >
        <defs>
          <radialGradient id="iter-c-magenta" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#C24DFF" />
            <stop offset="0.5" stopColor="#8A3DFF" />
            <stop offset="1" stopColor="#691EEB" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="iter-c-purple" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#691EEB" />
            <stop offset="0.55" stopColor="#4B12B0" />
            <stop offset="1" stopColor="#4B12B0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="iter-c-cyan" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#7DFFE6" />
            <stop offset="0.5" stopColor="#3FFFCF" />
            <stop offset="1" stopColor="#16D9C4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="iter-c-teal" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#23E6C8" />
            <stop offset="0.6" stopColor="#1FA9C9" />
            <stop offset="1" stopColor="#1FA9C9" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="iter-c-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#2E7CFF" />
            <stop offset="0.6" stopColor="#1E5CE6" />
            <stop offset="1" stopColor="#1E5CE6" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="iter-wash"
            gradientUnits="userSpaceOnUse"
            x1="40"
            y1="0"
            x2="380"
            y2="490"
          >
            <stop offset="0" stopColor="#7A2BD6" />
            <stop offset="0.45" stopColor="#1FB8C4" />
            <stop offset="1" stopColor="#2456D8" />
          </linearGradient>
          <filter id="iter-melt" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="42" />
          </filter>
          <filter id="iter-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
              result="n"
            >
              <animate
                attributeName="baseFrequency"
                values="0.9;0.82;0.9"
                dur="8s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix
              in="n"
              type="matrix"
              values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0.7 0"
            />
          </filter>
          <clipPath id="iter-iconClip">
            <path d="M490 245C490 380.31 380.31 490 245 490C200.561 490 158.885 478.169 122.951 457.484L255.916 183.931C258.176 179.282 254.79 173.871 249.621 173.871H107.115C104.439 173.871 101.998 175.397 100.824 177.801L20.3093 342.824C7.2455 312.86 0 279.776 0 245C0 109.69 109.69 0 245 0C380.31 0 490 109.69 490 245ZM362.419 316.129C401.703 316.129 433.548 284.283 433.548 245C433.548 205.717 401.703 173.871 362.419 173.871C323.136 173.871 291.29 205.717 291.29 245C291.29 284.283 323.136 316.129 362.419 316.129Z" />
          </clipPath>
        </defs>
        <g className="[animation:iter-orb-breathe_11s_ease-in-out_infinite] [transform-origin:50%_50%]">
          <g clipPath="url(#iter-iconClip)">
            <rect x="-40" y="-40" width="540" height="570" fill="url(#iter-wash)" />
            <g filter="url(#iter-melt)">
              <circle r="150" fill="url(#iter-c-magenta)" cx="70" cy="60">
                <animate
                  attributeName="cx"
                  values="70;130;40;70"
                  dur="19s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="60;140;30;60"
                  dur="23s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="180" fill="url(#iter-c-purple)" cx="60" cy="430">
                <animate
                  attributeName="cx"
                  values="60;120;30;60"
                  dur="25s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="430;360;470;430"
                  dur="21s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="170" fill="url(#iter-c-cyan)" cx="210" cy="240">
                <animate
                  attributeName="cx"
                  values="210;150;270;210"
                  dur="17s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="240;180;320;240"
                  dur="15s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="170;200;150;170"
                  dur="13s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="120" fill="url(#iter-c-teal)" cx="190" cy="360">
                <animate
                  attributeName="cx"
                  values="190;240;150;190"
                  dur="20s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="360;300;420;360"
                  dur="18s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="200" fill="url(#iter-c-blue)" cx="370" cy="260">
                <animate
                  attributeName="cx"
                  values="370;330;400;370"
                  dur="22s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="260;200;330;260"
                  dur="24s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <rect
              x="0"
              y="0"
              width="490"
              height="490"
              filter="url(#iter-grain)"
              style={{ mixBlendMode: "overlay", opacity: 0.42 }}
            />
          </g>
        </g>
      </motion.svg>

      <motion.div
        className="absolute right-[-8px] top-[12%] flex items-center gap-2 rounded-[10px] border border-[var(--border-strong)] bg-[var(--bg)] px-3 py-2 iter-mono text-[11px] text-[var(--text-dim)] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] max-sm:hidden"
        initial={prefersReducedMotion ? undefined : { opacity: 0, x: 16, y: -10 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.72, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: topChipX,
                y: topChipY,
              }
        }
      >
        <span className="inline-block size-1.5 rounded-full bg-[var(--accent)]" />
        <span>intent.router → llm</span>
      </motion.div>
      <motion.div
        className="absolute bottom-[22%] left-[-16px] flex items-center gap-2 rounded-[10px] border border-[var(--border-strong)] bg-[var(--bg)] px-3 py-2 iter-mono text-[11px] text-[var(--text-dim)] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] max-sm:hidden"
        initial={prefersReducedMotion ? undefined : { opacity: 0, x: -18, y: 10 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.72, delay: 0.74, ease: [0.22, 1, 0.36, 1] }}
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: sideChipX,
                y: sideChipY,
              }
        }
      >
        <span className="opacity-60">tokens</span>
        <span className="text-[var(--accent)]">1,284</span>
        <span className="opacity-60">/ msg</span>
      </motion.div>
      <motion.div
        className="absolute bottom-[4%] right-[8%] flex items-center gap-2 rounded-[10px] border border-[var(--border-strong)] bg-[var(--bg)] px-3 py-2 iter-mono text-[11px] text-[var(--text-dim)] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] max-sm:hidden"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.72, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: bottomChipX,
                y: bottomChipY,
              }
        }
      >
        <span>route</span>
        <span className="text-[var(--accent)]">ready</span>
      </motion.div>
    </motion.div>
  );
}

function OfferIcons({ index }: { index: number }) {
  const common =
    "flex items-center justify-center rounded-[12px] border border-[var(--border-strong)] bg-[var(--accent-soft)] text-[var(--accent)]";

  if (index === 0) {
    return (
      <div className={`${common} size-14 rounded-[14px]`}>
        <AppIcon aria-hidden="true" icon={AiChatIcon} size={26} strokeWidth={1.7} />
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={`${common} size-11`}>
        <AppIcon aria-hidden="true" icon={WorkflowCircle01Icon} size={22} strokeWidth={1.7} />
      </div>
    );
  }

  return (
    <div className={`${common} size-11`}>
      <AppIcon aria-hidden="true" icon={SourceCodeIcon} size={22} strokeWidth={1.7} />
    </div>
  );
}

export function LandingPage() {
  const { locale } = useSitePreferences();
  const prefersReducedMotion = Boolean(useReducedMotion());
  const copy = landingContent[locale];
  const navLinks = getNavLinks(locale);
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<"idle" | "success" | "error">("idle");
  const [contactError, setContactError] = useState("");
  const submitCopy = strategyCallSubmitCopy[locale];

  const casesWithState = useMemo(
    () =>
      copy.cases.items.map((item, index) => ({
        ...item,
        idx1: index + 1,
        expanded: expandedCase === index,
      })),
    [copy.cases.items, expandedCase],
  );

  const canSubmit = Boolean(name.trim() && email.trim() && message.trim());

  const submitStrategyCall = async () => {
    if (!canSubmit || contactSubmitting) {
      return;
    }

    setContactSubmitting(true);
    setContactStatus("idle");
    setContactError("");

    try {
      const response = await fetch("/api/strategy-call", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          locale,
          source_path:
            typeof window === "undefined" ? undefined : window.location.pathname,
        }),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "Could not send the request.");
      }

      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setContactStatus("success");
    } catch (error) {
      setContactStatus("error");
      setContactError(
        error instanceof Error
          ? error.message
          : "Could not send the request. Please try again.",
      );
    } finally {
      setContactSubmitting(false);
    }
  };

  const openContact = () => setContactOpen(true);
  const modalBackdropTransition = {
    duration: 0.28,
    ease: [0.22, 1, 0.36, 1] as const,
  };
  const modalPanelTransition = {
    duration: 0.36,
    ease: [0.22, 1, 0.36, 1] as const,
  };
  const footerRevealTransition = {
    duration: 0.52,
    ease: [0.22, 1, 0.36, 1] as const,
  };
  const footerLinkHoverState = prefersReducedMotion ? "rest" : "hover";

  useEffect(() => {
    if (!contactOpen) {
      return;
    }

    document.documentElement.classList.add("iter-modal-open");

    return () => {
      document.documentElement.classList.remove("iter-modal-open");
    };
  }, [contactOpen]);

  return (
    <div className="iter-shell">
      <div className="iter-grid" />
      <SiteHeader
        locale={locale}
        navLinks={navLinks}
        ctaLabel={copy.nav.cta}
        phoneLabel={copy.cta.btn2}
        onCtaClick={openContact}
      />

      <main>
        <section id="hero" className="relative z-[1] px-[18px] pb-12 pt-[120px] sm:px-[22px] sm:pb-[60px] sm:pt-[130px] lg:px-7 lg:pb-20 lg:pt-40">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.618fr_1fr] lg:items-center lg:gap-16">
            <div className="max-lg:text-center">
              <motion.div
                className="mb-6 inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-3 py-[7px] iter-mono text-xs tracking-[0.04em] text-[var(--text-dim)] max-lg:mx-auto max-lg:justify-center sm:mb-7 sm:rounded-full sm:py-[6px]"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="relative inline-block size-2">
                  <span className="absolute inset-0 rounded-full bg-[var(--accent)] [animation:iter-pulse_2.4s_ease-in-out_infinite]" />
                  <span className="absolute inset-[2px] rounded-full bg-[var(--accent)]" />
                </span>
                <span>{copy.hero.eyebrow}</span>
                <span className="opacity-40 max-[520px]:hidden">·</span>
                <span className="max-[520px]:basis-full max-[520px]:pl-[18px]">{copy.hero.meta}</span>
              </motion.div>

              <h1 className="m-0 iter-display text-[clamp(42px,12vw,92px)] font-bold leading-[0.96] tracking-[-0.035em] text-[var(--text)]">
                <motion.span
                  className="block"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {copy.hero.titleA}
                </motion.span>
                <motion.span
                  className="block bg-[linear-gradient(120deg,var(--accent),var(--text)_70%)] bg-clip-text text-transparent"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.76, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {copy.hero.titleB}
                </motion.span>
              </h1>

              <motion.p
                className="mb-8 mt-5 max-w-[560px] text-[17px] leading-[1.55] text-[var(--text-dim)] max-lg:mx-auto sm:mb-9 sm:mt-6 sm:text-[19px]"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                {copy.hero.sub}
              </motion.p>

              <motion.div
                className="mb-10 flex flex-col gap-3 min-[520px]:flex-row min-[520px]:flex-wrap max-lg:justify-center sm:mb-14"
                initial={prefersReducedMotion ? undefined : "hidden"}
                animate={prefersReducedMotion ? undefined : "show"}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.5,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={prefersReducedMotion ? undefined : "hover"}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                >
                  <Link
                    href="#plans"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[var(--accent)] px-[18px] py-[13px] text-[15px] font-semibold tracking-[-0.01em] shadow-[0_0_0_1px_var(--accent),0_16px_32px_-12px_var(--accent-glow)] transition hover:-translate-y-px min-[520px]:w-auto min-[520px]:px-[22px] min-[520px]:py-[14px]"
                    style={{ color: "var(--accent-ink)" }}
                  >
                    <span>{copy.hero.ctaA}</span>
                    <motion.span
                      variants={{
                        hover: { y: 2.5 },
                      }}
                      transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.8 }}
                    >
                      <AppIcon aria-hidden="true" icon={ArrowDown01Icon} size={16} strokeWidth={2.2} />
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-[18px] py-[13px] text-[15px] font-medium text-[var(--text)] transition hover:border-[var(--text)] hover:bg-[var(--surface-strong)] min-[520px]:w-auto min-[520px]:px-[22px] min-[520px]:py-[14px]"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={prefersReducedMotion ? undefined : { y: -1.5 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                >
                  <Link
                    href="#cases"
                    className="-m-[13px] inline-flex w-[calc(100%+26px)] items-center justify-center gap-2.5 px-[18px] py-[13px] min-[520px]:-m-[14px] min-[520px]:w-auto min-[520px]:px-[22px] min-[520px]:py-[14px]"
                  >
                    <motion.span
                      className="flex size-[22px] items-center justify-center rounded-full bg-[var(--accent)] text-[#0A0B10]"
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 340, damping: 20, mass: 0.7 }}
                    >
                      <motion.span
                        whileHover={prefersReducedMotion ? undefined : { y: 1.2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.8 }}
                      >
                        <AppIcon aria-hidden="true" icon={ArrowDown01Icon} size={12} strokeWidth={2.6} />
                      </motion.span>
                    </motion.span>
                    <span>{copy.hero.ctaB}</span>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid gap-px overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--border)] text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left"
                initial={prefersReducedMotion ? undefined : "hidden"}
                animate={prefersReducedMotion ? undefined : "show"}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.62,
                    },
                  },
                }}
              >
                {copy.stats.map((stat) => (
                  <motion.div
                    key={stat.k}
                    className="bg-[var(--bg)] px-[18px] py-4"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mb-1.5 iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {stat.k}
                    </div>
                    <div className="iter-display text-[22px] font-bold tracking-[-0.02em] text-[var(--text)]">
                      {stat.v}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <HeroOrb prefersReducedMotion={prefersReducedMotion} />
          </div>

          <div className="mx-auto mt-24 max-w-[1320px] px-0 lg:px-7">
            <div className="mb-[18px] text-center iter-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              {copy.tickerLabel}
            </div>
            <div
              className="relative overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
                maskImage:
                  "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
              }}
            >
              <div className="flex w-max gap-14 [animation:iter-ticker_34s_linear_infinite]">
                {[...tickerStack, ...tickerStack].map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="whitespace-nowrap iter-display text-[17px] font-medium tracking-[-0.01em] text-[var(--text-dim)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative z-[1] px-[18px] py-[72px] sm:px-[22px] sm:py-[88px] lg:px-7 lg:py-[120px]">
          <div className="mx-auto max-w-[1320px]">
            <motion.div
              className="mb-14 grid items-end gap-5 max-lg:text-center lg:grid-cols-[1fr_1.4fr] lg:gap-16"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.36 }}
              variants={sectionHeaderVariants}
            >
              <div>
                <div className="mb-[14px] iter-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  {copy.offers.eyebrow}
                </div>
                <h2 className="m-0 max-w-[620px] iter-display text-[clamp(34px,4.2vw,56px)] font-bold leading-[1] tracking-[-0.03em] text-balance max-lg:mx-auto">
                  {copy.offers.title}
                </h2>
              </div>
              <p className="m-0 max-w-[520px] justify-self-end text-[18px] leading-[1.55] text-[var(--text-dim)] max-lg:mx-auto">
                {copy.offers.sub}
              </p>
            </motion.div>

            <motion.div
              className="grid gap-4 lg:grid-cols-[1.618fr_1fr] lg:grid-rows-[minmax(280px,1fr)_minmax(280px,1fr)_minmax(220px,auto)]"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.18 }}
              variants={sectionStaggerVariants}
            >
              <motion.article
                className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] max-sm:text-center sm:p-10 lg:row-span-2"
                variants={sectionCardVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.003 }}
                transition={{ duration: 0.24, ease: landingMotionEase }}
              >
                <div className="absolute right-[-120px] top-[-120px] size-[380px] bg-[radial-gradient(circle,var(--accent-glow),transparent_65%)] opacity-35 blur-[20px]" />
                <div className="relative flex h-full flex-col gap-7">
                  <div className="flex items-start justify-between gap-5 max-sm:flex-col max-sm:items-center max-sm:justify-center">
                    <div className="flex min-w-0 items-center justify-center gap-3 iter-mono text-[11.5px] uppercase tracking-[0.12em] text-[var(--text-muted)] max-[380px]:gap-2 max-[380px]:text-[10.5px]">
                      <span>{copy.offers.cards[0].num}</span>
                      <span className="h-px w-6 bg-[var(--text-muted)] max-[380px]:w-4" />
                      <span className="min-w-0 truncate">{copy.offers.cards[0].tag}</span>
                    </div>
                    <OfferIcons index={0} />
                  </div>

                  <div className="mt-auto">
                    <h3 className="mb-[14px] iter-display text-[clamp(28px,3vw,38px)] font-bold leading-[1.05] tracking-[-0.025em]">
                      {copy.offers.cards[0].title}
                    </h3>
                    <p className="mb-[22px] max-w-[520px] text-[16.5px] leading-[1.55] text-[var(--text-dim)] max-sm:mx-auto">
                      {copy.offers.cards[0].body}
                    </p>
                    <div className="flex flex-wrap gap-2 max-sm:justify-center">
                      {copy.offers.cards[0].stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-[10px] py-[5px] iter-mono text-[11.5px] text-[var(--text-dim)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 iter-mono text-[12.5px] leading-[1.7]">
                    <div className="mb-2.5 flex items-center gap-2">
                      <span className="inline-block size-[7px] rounded-full bg-[var(--accent)] [animation:iter-pulse_2s_ease-in-out_infinite]" />
                      <span className="text-[10.5px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                        wa.message · live
                      </span>
                    </div>
                    <div className="text-[var(--text-dim)]">
                      <span className="text-[var(--text-muted)]">user&gt;</span> hola, precio del plan empresarial?
                    </div>
                    <div className="text-[var(--text-dim)]">
                      <span className="text-[var(--accent)]">router&gt;</span> intent=
                      <span className="text-[var(--text)]">pricing</span> confidence=
                      <span className="text-[var(--text)]">0.94</span>
                    </div>
                    <div className="text-[var(--text-dim)]">
                      <span className="text-[var(--accent)]">agent&gt;</span> route → sales/pricing-bot
                    </div>
                  </div>
                </div>
              </motion.article>

              {copy.offers.cards.slice(1, 3).map((card, index) => (
                <motion.article
                  key={card.title}
                  className="relative flex flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] max-sm:text-center"
                  variants={sectionCardVariants}
                  whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.004 }}
                  transition={{ duration: 0.24, ease: landingMotionEase }}
                >
                  <div className="mb-6 flex items-start justify-between gap-5 max-sm:flex-col max-sm:items-center max-sm:justify-center">
                    <div className="flex min-w-0 items-center justify-center gap-3 iter-mono text-[11.5px] uppercase tracking-[0.12em] text-[var(--text-muted)] max-[380px]:gap-2 max-[380px]:text-[10.5px]">
                      <span>{card.num}</span>
                      <span className="h-px w-[18px] bg-[var(--text-muted)] max-[380px]:w-4" />
                      <span className="min-w-0 truncate">{card.tag}</span>
                    </div>
                    <OfferIcons index={index + 1} />
                  </div>

                  <div className="mt-auto">
                    <h3 className="mb-3 iter-display text-[22px] font-bold leading-[1.15] tracking-[-0.025em]">
                      {card.title}
                    </h3>
                    <p className="mb-4 text-[14.5px] leading-[1.55] text-[var(--text-dim)]">
                      {card.body}
                    </p>
                    <div className="flex flex-wrap gap-1.5 max-sm:justify-center">
                      {card.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-[9px] py-1 iter-mono text-[11px] text-[var(--text-dim)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}

              <motion.article
                className="grid gap-8 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] px-9 py-8 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] max-sm:text-center lg:col-span-2 lg:grid-cols-[1fr_auto] lg:items-center"
                variants={sectionCardVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.002 }}
                transition={{ duration: 0.24, ease: landingMotionEase }}
              >
                <div>
                  <div className="mb-[14px] flex items-center gap-3 iter-mono text-[11.5px] uppercase tracking-[0.12em] text-[var(--text-muted)] max-sm:justify-center">
                    <span>{copy.offers.cards[3].num}</span>
                    <span className="h-px w-[18px] bg-[var(--text-muted)]" />
                    <span>{copy.offers.cards[3].tag}</span>
                  </div>
                  <h3 className="mb-2.5 iter-display text-[28px] font-bold leading-[1.1] tracking-[-0.025em]">
                    {copy.offers.cards[3].title}
                  </h3>
                  <p className="max-w-[640px] text-[15.5px] leading-[1.55] text-[var(--text-dim)] max-sm:mx-auto">
                    {copy.offers.cards[3].body}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 max-sm:justify-center">
                  {copy.offers.cards[3].stack.map((item) => (
                    <span
                      key={item}
                      className="whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--bg)] px-[11px] py-1.5 iter-mono text-[11.5px] text-[var(--text-dim)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            </motion.div>
          </div>
        </section>

        <section id="cases" className="relative z-[1] bg-[linear-gradient(180deg,transparent,var(--bg-elevated),transparent)] px-[18px] py-[72px] sm:px-[22px] sm:py-[88px] lg:px-7 lg:py-[120px]">
          <div className="mx-auto max-w-[1320px]">
            <motion.div
              className="mb-14 grid items-end gap-5 max-lg:text-center lg:grid-cols-[1fr_1.4fr] lg:gap-16"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.36 }}
              variants={sectionHeaderVariants}
            >
              <div>
                <div className="mb-[14px] iter-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  {copy.cases.eyebrow}
                </div>
                <h2 className="m-0 text-[clamp(34px,4.2vw,56px)] iter-display font-bold leading-[1] tracking-[-0.03em] text-balance max-lg:mx-auto">
                  {copy.cases.title}
                </h2>
              </div>
              <p className="m-0 max-w-[520px] justify-self-end text-[18px] leading-[1.55] text-[var(--text-dim)] max-lg:mx-auto">
                {copy.cases.sub}
              </p>
            </motion.div>

            <motion.div
              className="grid gap-5 lg:grid-cols-2"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.18 }}
              variants={sectionStaggerVariants}
            >
              {casesWithState.map((item, index) => (
                <motion.article
                  key={item.slug}
                  className="flex flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
                  variants={sectionCardVariants}
                  whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.002 }}
                  transition={{ duration: 0.24, ease: landingMotionEase }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--border)]">
                    <div className="absolute inset-0" style={{ background: item.coverBg }} />
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1.5px)]"
                      style={{
                        backgroundSize: "14px 14px",
                        WebkitMaskImage:
                          "linear-gradient(135deg, black, transparent 70%)",
                        maskImage:
                          "linear-gradient(135deg, black, transparent 70%)",
                      }}
                    />
                    <div className="absolute left-4 top-4 flex items-center gap-2 iter-mono text-[11px] uppercase tracking-[0.12em] text-white/85">
                      <span className="inline-block size-1.5 rounded-full bg-[#1FFFC7] shadow-[0_0_8px_#1FFFC7]" />
                      <span>{item.kicker}</span>
                    </div>
                    <div className="absolute bottom-[18px] right-[22px] iter-display text-[64px] font-bold leading-[0.9] tracking-[-0.05em] text-white/90">
                      0{item.idx1}
                      <span className="text-white/40">/02</span>
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.4))]" />
                  </div>

                  <div className="flex flex-col gap-4 p-7 max-sm:text-center">
                    <h3 className="m-0 iter-display text-[26px] font-bold leading-[1.1] tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="m-0 text-[15.5px] leading-[1.55] text-[var(--text-dim)]">
                      {item.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 max-sm:justify-center">
                      {item.stack.map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-[9px] py-1 iter-mono text-[11px] text-[var(--text-dim)]"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>

                    {item.expanded ? (
                      <div className="mt-1 flex flex-col gap-[18px] border-t border-[var(--border)] pt-[18px] [animation:iter-fade-up_.35s_ease_both]">
                        <p className="m-0 text-[14.5px] leading-[1.6] text-[var(--text-dim)]">
                          {copy.cases.items[index].summary}
                        </p>
                        <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
                          {item.stats.map((stat) => (
                            <div key={stat.k} className="bg-[var(--bg)] p-3">
                              <div className="mb-1 iter-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                                {stat.k}
                              </div>
                              <div className="iter-display text-lg font-bold tracking-[-0.02em] text-[var(--accent)]">
                                {stat.v}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-1 grid grid-cols-2 items-center gap-2.5 sm:flex sm:flex-wrap">
                      <Link
                        href={item.live}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[var(--accent)] px-[14px] py-[9px] text-[13px] font-semibold tracking-[-0.005em]"
                        style={{ color: "var(--accent-ink)" }}
                      >
                        <span>{copy.cases.live}</span>
                        <AppIcon aria-hidden="true" icon={ArrowUpRight01Icon} size={12} strokeWidth={2.4} />
                      </Link>
                      <Link
                        href={item.code}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[var(--border)] bg-[var(--surface-strong)] px-[14px] py-[9px] text-[13px] font-medium text-[var(--text)]"
                      >
                        <AppIcon aria-hidden="true" icon={GithubIcon} size={13} strokeWidth={2.1} />
                        <span>{copy.cases.code}</span>
                      </Link>
                      <Link
                        href={getCaseStudyPath(item.slug, locale)}
                        scroll
                        className="inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-transparent px-1 py-[9px] text-[13px] font-medium text-[var(--text-dim)] sm:justify-start"
                      >
                        <span>{copy.cases.read}</span>
                        <AppIcon aria-hidden="true" icon={ArrowRight01Icon} size={12} strokeWidth={2.4} />
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedCase(expandedCase === index ? null : index)
                        }
                        className="inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-[var(--border)] px-3 py-[9px] text-[12.5px] font-medium text-[var(--text-dim)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)] sm:ml-auto"
                      >
                        <span>
                          {expandedCase === index
                            ? locale === "en"
                              ? "Close"
                              : "Cerrar"
                            : locale === "en"
                              ? "Quick look"
                            : "Vista rápida"}
                        </span>
                        <AppIcon
                          aria-hidden="true"
                          icon={ChevronDownIcon}
                          size={11}
                          strokeWidth={2.4}
                          className={`transition ${expandedCase === index ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="plans" className="relative z-[1] px-[18px] py-[72px] sm:px-[22px] sm:py-[88px] lg:px-7 lg:py-[120px]">
          <div className="mx-auto max-w-[1320px]">
            <motion.div
              className="mb-14 text-center"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.36 }}
              variants={sectionHeaderVariants}
            >
              <div className="mb-[14px] iter-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                {copy.plans.eyebrow}
              </div>
              <h2 className="mx-auto mb-[14px] max-w-[760px] text-[clamp(34px,4.2vw,56px)] iter-display font-bold leading-[1.05] tracking-[-0.03em] text-balance">
                {copy.plans.title}
              </h2>
              <p className="mx-auto max-w-[580px] text-[18px] leading-[1.55] text-[var(--text-dim)]">
                {copy.plans.sub}
              </p>
            </motion.div>

            <motion.div
              className="grid gap-4 lg:grid-cols-3"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionStaggerVariants}
            >
              {copy.plans.items.map((plan) => (
                <motion.article
                  key={plan.title}
                  className={`relative flex flex-col rounded-3xl border p-8 transition hover:-translate-y-[3px] max-sm:text-center ${
                    plan.featured
                      ? "border-transparent bg-[var(--bg-elevated)]"
                      : "border-[var(--border)] bg-[var(--surface)]"
                  }`}
                  variants={sectionCardVariants}
                  whileHover={prefersReducedMotion ? undefined : { y: -5, scale: plan.featured ? 1.006 : 1.003 }}
                  transition={{ duration: 0.24, ease: landingMotionEase }}
                >
                  {plan.featured ? (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-3xl"
                      style={{
                        padding: "1px",
                        background:
                          "linear-gradient(180deg, var(--accent), transparent 60%)",
                        WebkitMask:
                          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                  ) : null}
                  <div className="mb-[22px] flex items-center justify-between">
                    <div
                      className={`iter-mono text-[10.5px] uppercase tracking-[0.12em] ${
                        plan.featured ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {plan.tag}
                    </div>
                    {plan.featured ? (
                      <div className="rounded-full bg-[var(--accent)] px-[9px] py-1 iter-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0A0B10]">
                        ★ popular
                      </div>
                    ) : null}
                  </div>
                  <h3 className="mb-2.5 iter-display text-[28px] font-bold leading-[1.1] tracking-[-0.025em]">
                    {plan.title}
                  </h3>
                  <p className="mb-6 min-h-[44px] text-[14.5px] leading-[1.55] text-[var(--text-dim)]">
                    {plan.for}
                  </p>
                  <div className="mb-6 flex items-baseline gap-2 border-b border-dashed border-[var(--border)] pb-6 max-sm:justify-center">
                    <span className="iter-display text-4xl font-bold tracking-[-0.03em]">
                      {plan.price}
                    </span>
                    <span className="iter-mono text-xs text-[var(--text-muted)]">
                      {plan.priceSub}
                    </span>
                  </div>
                  <motion.ul
                    className="mb-7 flex list-none flex-col gap-2.5 p-0"
                    variants={sectionStaggerVariants}
                  >
                    {plan.includes.map((item) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-2.5 text-[14.5px] leading-[1.45] text-[var(--text)] max-sm:justify-center"
                        variants={sectionListItemVariants}
                      >
                        <span className="mt-[3px] inline-flex size-4 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                          <AppIcon aria-hidden="true" icon={CheckIcon} size={9} strokeWidth={3.2} />
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <button
                    type="button"
                    onClick={() => setContactOpen(true)}
                    className={`mt-auto rounded-xl border px-[18px] py-[13px] text-[14.5px] font-semibold tracking-[-0.005em] transition hover:-translate-y-px ${
                      plan.featured
                        ? "border-[var(--accent)] bg-[var(--accent)] text-[#0A0B10]"
                        : "border-[var(--border-strong)] bg-transparent text-[var(--text)]"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </motion.article>
              ))}
            </motion.div>

            <div className="mt-7 flex justify-center">
              <motion.div
                className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 iter-mono text-[11.5px] tracking-[0.04em] text-[var(--text-dim)]"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.46, delay: 0.18, ease: landingMotionEase }}
              >
                <AppIcon aria-hidden="true" icon={Shield02Icon} size={14} className="text-[var(--accent)]" />
                <span>{copy.plans.badge}</span>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="credibility" className="relative z-[1] px-[18px] py-[72px] sm:px-[22px] sm:py-[88px] lg:px-7 lg:py-[120px]">
          <div className="mx-auto max-w-[1320px]">
            <motion.div
              className="grid gap-12 max-lg:text-center lg:grid-cols-[1fr_1.2fr] lg:gap-20"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.22 }}
              variants={sectionStaggerVariants}
            >
              <motion.div variants={sectionHeaderVariants}>
                <div className="mb-[14px] iter-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  {copy.trust.eyebrow}
                </div>
                <h2 className="mb-[22px] max-w-[560px] text-[clamp(32px,3.8vw,48px)] iter-display font-bold leading-[1.05] tracking-[-0.03em] text-balance max-lg:mx-auto">
                  {copy.trust.title}
                </h2>
                <p className="mb-8 max-w-[480px] text-[17px] leading-[1.6] text-[var(--text-dim)] max-lg:mx-auto">
                  {copy.trust.body}
                </p>

                <motion.div
                  className="grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2"
                  variants={sectionStaggerVariants}
                >
                  {copy.trust.pillars.map((pillar) => (
                    <motion.div
                      key={pillar.k}
                      className="bg-[var(--bg)] px-5 py-[18px]"
                      variants={sectionListItemVariants}
                    >
                      <div className="mb-1.5 iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                        {pillar.k}
                      </div>
                      <div className="iter-display text-lg font-bold tracking-[-0.02em] text-[var(--text)]">
                        {pillar.v}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={sectionCardVariants}>
                <motion.div
                  className="mb-4 flex items-center gap-3 iter-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)] max-lg:justify-center"
                  variants={sectionListItemVariants}
                >
                  <span>{copy.trust.stackLabel}</span>
                  <span className="h-px flex-1 bg-[var(--border)]" />
                  <span>0{stackTools.length} tools</span>
                </motion.div>
                <motion.div
                  className="grid gap-px overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3"
                  variants={sectionStaggerVariants}
                >
                  {stackTools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      className="relative flex min-h-[110px] flex-col gap-2 bg-[var(--bg)] px-5 py-6 transition hover:bg-[var(--surface)]"
                      variants={sectionListItemVariants}
                      whileHover={prefersReducedMotion ? undefined : { y: -2, backgroundColor: "var(--surface)" }}
                      transition={{ duration: 0.2, ease: landingMotionEase }}
                    >
                      <div className="iter-display text-[17px] font-bold tracking-[-0.015em] text-[var(--text)]">
                        {tool.name}
                      </div>
                      <div className="iter-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                        {tool.role}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-[1] px-[18px] py-14 sm:px-[22px] sm:py-16 lg:px-7 lg:py-20">
          <div className="mx-auto max-w-[1320px]">
            <motion.div
              className="relative overflow-hidden rounded-[32px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-[22px] py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-[72px]"
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.34 }}
              variants={ctaPanelVariants}
            >
              <motion.div
                className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse,var(--accent-glow),transparent_65%)] opacity-55 blur-[40px]"
                variants={{
                  hidden: { opacity: 0, scale: 0.88, y: 24 },
                  show: {
                    opacity: 0.55,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.72, ease: landingMotionEase },
                  },
                }}
              />
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--dot)_1px,transparent_1.5px)] opacity-50"
                style={{
                  backgroundSize: "18px 18px",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at 90% 100%, black, transparent 50%)",
                  maskImage:
                    "radial-gradient(ellipse at 90% 100%, black, transparent 50%)",
                }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 0.5,
                    transition: { duration: 0.62, ease: landingMotionEase },
                  },
                }}
              />
              <motion.div
                className="relative grid gap-7 max-lg:text-center lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-14"
                variants={sectionStaggerVariants}
              >
                <motion.div variants={sectionListItemVariants}>
                  <div className="mb-[18px] iter-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                    {copy.cta.eyebrow}
                  </div>
                  <h2 className="max-w-[760px] text-[clamp(34px,4.4vw,60px)] iter-display font-bold leading-[1.05] tracking-[-0.03em] text-balance max-lg:mx-auto">
                    {copy.cta.title}
                  </h2>
                </motion.div>
                <motion.div variants={sectionListItemVariants}>
                  <p className="mb-6 text-base leading-[1.55] text-[var(--text-dim)] max-lg:mx-auto max-lg:max-w-[620px]">
                    {copy.cta.sub}
                  </p>
                  <motion.div
                    className="flex flex-wrap gap-3 max-lg:justify-center"
                    variants={sectionStaggerVariants}
                  >
                    <motion.button
                      type="button"
                      onClick={openContact}
                      className="inline-flex items-center gap-2.5 rounded-xl bg-[var(--accent)] px-[22px] py-[14px] text-[15px] font-semibold tracking-[-0.01em] shadow-[0_0_0_1px_var(--accent),0_18px_36px_-10px_var(--accent-glow)] transition hover:-translate-y-px"
                      style={{ color: "var(--accent-ink)" }}
                      variants={sectionListItemVariants}
                      whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.015 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                      transition={{ duration: 0.22, ease: landingMotionEase }}
                    >
                      <span>{copy.cta.btn}</span>
                      <AppIcon aria-hidden="true" icon={ArrowRight01Icon} size={15} strokeWidth={2.4} />
                    </motion.button>
                    <motion.div
                      variants={sectionListItemVariants}
                      whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                      transition={{ duration: 0.22, ease: landingMotionEase }}
                    >
                      <Link
                        href={contactPhoneHref}
                        className="inline-flex items-center gap-2.5 rounded-xl border border-[var(--border-strong)] bg-transparent px-[22px] py-[14px] iter-mono text-[14.5px] text-[var(--text)]"
                      >
                        <AppIcon aria-hidden="true" icon={WhatsappIcon} size={16} />
                        <span>{copy.cta.btn2}</span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {contactOpen ? (
          <motion.div
            className="iter-scrollbar-none fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-5 backdrop-blur-[14px] sm:px-6 sm:py-8"
            onClick={() => setContactOpen(false)}
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={modalBackdropTransition}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              initial={prefersReducedMotion ? undefined : { opacity: 0 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ ...modalBackdropTransition, delay: 0.04 }}
            >
              <motion.div
                className="absolute left-[-8%] top-[44%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_68%)] opacity-45 blur-[40px]"
                initial={prefersReducedMotion ? undefined : { scale: 0.88, x: -20, y: 16 }}
                animate={prefersReducedMotion ? undefined : { scale: 1, x: 0, y: 0 }}
                exit={prefersReducedMotion ? undefined : { scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute right-[-8%] top-[12%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(108,46,255,0.28),transparent_70%)] opacity-75 blur-[54px]"
                initial={prefersReducedMotion ? undefined : { scale: 0.9, x: 26, y: -18 }}
                animate={prefersReducedMotion ? undefined : { scale: 1, x: 0, y: 0 }}
                exit={prefersReducedMotion ? undefined : { scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.54, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
            <motion.div
              className="iter-scrollbar-none relative my-auto max-h-[calc(100svh-40px)] w-full max-w-[540px] overflow-y-auto rounded-[24px] border border-[var(--border-strong)] bg-[var(--bg)] p-6 sm:max-h-[92vh] sm:rounded-3xl sm:p-9"
              onClick={(event) => event.stopPropagation()}
              initial={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 0, y: 22, scale: 0.972, filter: "blur(8px)" }
              }
              animate={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              }
              exit={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 0, y: 14, scale: 0.985, filter: "blur(6px)" }
              }
              transition={modalPanelTransition}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--dot)_1px,transparent_1.5px)] opacity-[0.18]"
                style={{
                  backgroundSize: "16px 16px",
                  WebkitMaskImage:
                    "linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)",
                  maskImage:
                    "linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)",
                }}
                initial={prefersReducedMotion ? undefined : { opacity: 0 }}
                animate={prefersReducedMotion ? undefined : { opacity: 0.18 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.36, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close strategy call modal"
                className="absolute right-4 top-4 z-20 flex size-10 touch-manipulation items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[0_12px_30px_-18px_rgba(0,0,0,0.8)] sm:right-[18px] sm:top-[18px] sm:size-[38px] sm:rounded-[10px]"
                whileHover={prefersReducedMotion ? undefined : { rotate: 90, scale: 1.04 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <AppIcon aria-hidden="true" icon={Cancel01Icon} size={13} strokeWidth={2.1} />
              </motion.button>

              <motion.div
                className="relative"
                initial={prefersReducedMotion ? undefined : "hidden"}
                animate={prefersReducedMotion ? undefined : "show"}
                exit={prefersReducedMotion ? undefined : "exit"}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.08,
                    },
                  },
                  exit: {},
                }}
              >
                <motion.div
                  className="relative mb-2 pr-10 iter-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] max-sm:pr-0 max-sm:text-center"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                    exit: { opacity: 0 },
                  }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {copy.contact.eyebrow}
                </motion.div>
                <motion.h3
                  className="relative mb-2 pr-10 iter-display text-[clamp(30px,9vw,42px)] font-bold leading-[1.1] tracking-[-0.025em] max-sm:pr-0 max-sm:text-center sm:text-[42px]"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                    exit: { opacity: 0 },
                  }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  {copy.contact.title}
                </motion.h3>
                <motion.p
                  className="relative mb-[26px] text-[15px] leading-[1.55] text-[var(--text-dim)] max-sm:text-center"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                    exit: { opacity: 0 },
                  }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  {copy.contact.sub}
                </motion.p>

                <motion.div
                  className="relative flex flex-col gap-[14px]"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                    exit: { opacity: 0 },
                  }}
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                >
                  <label className="flex flex-col gap-1.5">
                    <span className="iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {copy.contact.name} *
                    </span>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      disabled={contactSubmitting}
                      className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-[14px] py-3 text-[15px] text-[var(--text)]"
                      placeholder="Jane Doe"
                    />
                  </label>

                  <div className="grid gap-[14px] sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                        {copy.contact.email} *
                      </span>
                      <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        disabled={contactSubmitting}
                        className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-[14px] py-3 text-[15px] text-[var(--text)]"
                        placeholder="jane@company.com"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                        {copy.contact.company}
                      </span>
                      <input
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                        disabled={contactSubmitting}
                        className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-[14px] py-3 text-[15px] text-[var(--text)]"
                        placeholder="Acme Inc."
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {copy.contact.message} *
                    </span>
                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      disabled={contactSubmitting}
                      rows={4}
                      className="resize-y rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-[14px] py-3 text-[15px] leading-[1.5] text-[var(--text)]"
                      placeholder={copy.contact.messagePlaceholder}
                    />
                  </label>

                  <motion.div
                    whileHover={prefersReducedMotion ? undefined : canSubmit && !contactSubmitting ? { y: -1.5 } : undefined}
                    whileTap={prefersReducedMotion ? undefined : canSubmit && !contactSubmitting ? { scale: 0.99 } : undefined}
                  >
                    <button
                      type="button"
                      disabled={!canSubmit || contactSubmitting}
                      onClick={submitStrategyCall}
                      aria-busy={contactSubmitting}
                      className={`mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-[22px] py-[14px] text-[15px] font-semibold tracking-[-0.01em] ${
                        canSubmit && !contactSubmitting
                          ? "bg-[var(--accent)] shadow-[0_0_0_1px_var(--accent),0_12px_28px_-10px_var(--accent-glow)]"
                          : "bg-[var(--surface-strong)] text-[var(--text-dim)]"
                      }`}
                      style={canSubmit && !contactSubmitting ? { color: "var(--accent-ink)" } : undefined}
                    >
                      <span>{contactSubmitting ? submitCopy.loadingTitle : copy.contact.send}</span>
                      {contactSubmitting ? (
                        <span className="flex items-center gap-1">
                          {[0, 0.12, 0.24].map((delay) => (
                            <motion.span
                              key={delay}
                              className="size-1.5 rounded-full bg-current"
                              animate={prefersReducedMotion ? undefined : { opacity: [0.45, 1, 0.45], y: [0, -3, 0] }}
                              transition={{
                                delay,
                                duration: 0.52,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </span>
                      ) : canSubmit ? (
                        <motion.span
                          initial={false}
                          animate={prefersReducedMotion ? undefined : { x: [0, 2, 0] }}
                          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <AppIcon aria-hidden="true" icon={ArrowRight01Icon} size={14} strokeWidth={2.4} />
                        </motion.span>
                      ) : null}
                    </button>
                  </motion.div>

                  <AnimatePresence mode="wait">
                    {contactSubmitting ? (
                      <StrategyCallSubmitStatus
                        key="loading"
                        detail={submitCopy.loadingDetail}
                        prefersReducedMotion={prefersReducedMotion}
                        state="loading"
                        title={submitCopy.loadingTitle}
                      />
                    ) : contactStatus === "success" ? (
                      <StrategyCallSubmitStatus
                        key="success"
                        detail={submitCopy.successDetail}
                        prefersReducedMotion={prefersReducedMotion}
                        state="success"
                        title={submitCopy.successTitle}
                      />
                    ) : null}
                  </AnimatePresence>

                  {contactStatus === "error" ? (
                    <div className="rounded-[10px] border border-red-400/40 bg-red-500/10 px-3 py-2 text-center text-sm text-red-100">
                      {contactError}
                    </div>
                  ) : null}

                  <div className="text-center iter-mono text-[11px] tracking-[0.04em] text-[var(--text-muted)]">
                    {copy.contact.helper}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <footer id="contact" className="relative z-[1] border-t border-[var(--border)] px-[18px] pb-7 pt-12 sm:px-[22px] sm:pb-9 sm:pt-14 lg:px-7">
        <motion.div
          className="mx-auto max-w-[1320px]"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={footerRevealTransition}
        >
          <div className="mb-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ ...footerRevealTransition, delay: 0.04 }}
            >
              <div className="mb-[18px] flex items-center text-[var(--text)]">
                <svg viewBox="0 0 116 48" className="h-[38px] w-[92px]" fill="none">
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
              </div>
              <p className="mb-[18px] max-w-[320px] text-sm leading-[1.55] text-[var(--text-dim)]">
                {copy.footer.tagline}
              </p>
              <div className="flex gap-2 iter-mono text-[11px] tracking-[0.04em] text-[var(--text-muted)]">
                <span className="mt-[5px] inline-block size-[7px] rounded-full bg-[var(--accent)] [animation:iter-pulse_2s_ease-in-out_infinite]" />
                <span>{copy.footer.statusLabel}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <Link
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex size-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dim)] transition hover:-translate-y-px hover:border-[var(--border-strong)] hover:text-[var(--text)]"
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
            </motion.div>
            {copy.footer.cols.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ ...footerRevealTransition, delay: 0.08 + columnIndex * 0.05 }}
              >
                <div className="mb-[14px] iter-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {column.title}
                </div>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {column.links.map((link) => (
                    <motion.li
                      key={link.href + link.label}
                      initial="rest"
                      animate="rest"
                      whileHover={footerLinkHoverState}
                    >
                      <Link
                        href={localizeHref(link.href, locale)}
                        className="inline-flex items-center gap-2 text-sm text-[var(--text-dim)] transition hover:text-[var(--text)] focus-visible:text-[var(--text)]"
                      >
                        <motion.span
                          variants={{
                            rest: { x: 0 },
                            hover: { x: prefersReducedMotion ? 0 : 3 },
                          }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {link.label}
                        </motion.span>
                        <motion.span
                          aria-hidden="true"
                          className="inline-flex text-[var(--accent)]"
                          variants={{
                            rest: { opacity: 0, x: -5, scale: 0.96 },
                            hover: { opacity: 1, x: 0, scale: 1 },
                          }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <AppIcon aria-hidden="true" icon={ArrowUpRight01Icon} size={12} strokeWidth={2.2} />
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-6 iter-mono text-[11.5px] tracking-[0.04em] text-[var(--text-muted)]"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ ...footerRevealTransition, delay: 0.18 }}
          >
            <div>{copy.footer.legal}</div>
            <div>{copy.footer.legal2}</div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}
