"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

import { caseStudySlugs } from "@/lib/site-data";

type PageTransitionShellProps = {
  children: ReactNode;
};

function resolveCaseStudyIndex(pathname: string | null) {
  if (!pathname?.startsWith("/case-studies/")) {
    return -1;
  }

  const slug = pathname.slice("/case-studies/".length);
  return caseStudySlugs.indexOf(slug as (typeof caseStudySlugs)[number]);
}

function resolveDirection(previousPath: string | null, nextPath: string) {
  if (!previousPath || previousPath === nextPath) {
    return 0;
  }

  const previousCaseIndex = resolveCaseStudyIndex(previousPath);
  const nextCaseIndex = resolveCaseStudyIndex(nextPath);

  if (previousPath === "/" && nextCaseIndex >= 0) {
    return 1;
  }

  if (previousCaseIndex >= 0 && nextPath === "/") {
    return -1;
  }

  if (previousCaseIndex >= 0 && nextCaseIndex >= 0) {
    return nextCaseIndex >= previousCaseIndex ? 1 : -1;
  }

  return 0;
}

export function PageTransitionShell({ children }: PageTransitionShellProps) {
  const pathname = usePathname();
  const prefersReducedMotion = Boolean(useReducedMotion());
  const previousPathRef = useRef(pathname);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const nextDirection = resolveDirection(previousPathRef.current, pathname);
    setDirection(nextDirection);
    previousPathRef.current = pathname;
  }, [pathname]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    if (prefersReducedMotion || !pathname.startsWith("/case-studies/")) {
      return;
    }

    const animations: Animation[] = [];
    let rafA = 0;
    let rafB = 0;
    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

    const play = (
      element: Element | undefined,
      keyframes: Keyframe[],
      delay: number,
      duration: number,
    ) => {
      if (!(element instanceof HTMLElement)) {
        return;
      }

      const animation = element.animate(keyframes, {
        delay,
        duration,
        easing,
        fill: "both",
      });
      animations.push(animation);
    };

    const run = () => {
      const sections = Array.from(document.querySelectorAll("main > section"));
      const heroWrap = sections[0]?.querySelector(":scope > div");
      const heroChildren = heroWrap ? Array.from(heroWrap.children) : [];
      const cover = heroChildren[1] as HTMLElement | undefined;
      const coverChildren = cover ? Array.from(cover.children) : [];
      const summaryGrid = sections[1]?.querySelector(":scope > div");
      const summaryChildren = summaryGrid ? Array.from(summaryGrid.children) : [];
      const statsGrid = sections[2]?.querySelector(":scope > div > div");
      const statsItems = statsGrid ? Array.from(statsGrid.children) : [];
      const contentGrid = sections[3]?.querySelector(":scope > div");
      const contentChildren = contentGrid ? Array.from(contentGrid.children) : [];
      const aside = contentChildren[0] as HTMLElement | undefined;
      const tocItems = aside ? Array.from(aside.querySelectorAll("ul > li")) : [];

      play(
        heroChildren[0],
        [
          { opacity: 0, transform: "translateY(14px)" },
          { opacity: 1, transform: "translateY(0px)" },
        ],
        40,
        420,
      );
      play(
        cover,
        [
          { opacity: 0, transform: "translateY(22px) scale(0.972)", filter: "blur(10px)" },
          { opacity: 1, transform: "translateY(0px) scale(1)", filter: "blur(0px)" },
        ],
        90,
        720,
      );
      play(
        coverChildren[1],
        [
          { opacity: 0, transform: "translate3d(-18px,-12px,0)" },
          { opacity: 1, transform: "translate3d(0px,0px,0)" },
        ],
        180,
        620,
      );
      play(coverChildren[2], [{ opacity: 0 }, { opacity: 1 }], 210, 560);
      play(
        coverChildren[3],
        [
          { opacity: 0, transform: "translateY(-12px)" },
          { opacity: 1, transform: "translateY(0px)" },
        ],
        240,
        520,
      );
      play(
        coverChildren[4],
        [
          { opacity: 0, transform: "translateX(30px) scale(0.92)" },
          { opacity: 1, transform: "translateX(0px) scale(1)" },
        ],
        280,
        620,
      );
      play(
        coverChildren[5],
        [
          { opacity: 0, transform: "translateX(12px)" },
          { opacity: 1, transform: "translateX(0px)" },
        ],
        340,
        520,
      );
      play(
        coverChildren[6],
        [
          { opacity: 0, transform: "translateY(22px)" },
          { opacity: 1, transform: "translateY(0px)" },
        ],
        320,
        620,
      );
      play(
        summaryChildren[0],
        [
          { opacity: 0, transform: "translateY(18px)" },
          { opacity: 1, transform: "translateY(0px)" },
        ],
        360,
        520,
      );
      play(
        summaryChildren[1],
        [
          { opacity: 0, transform: "translate3d(18px,10px,0)" },
          { opacity: 1, transform: "translate3d(0px,0px,0)" },
        ],
        420,
        560,
      );

      statsItems.forEach((item, index) => {
        play(
          item,
          [
            { opacity: 0, transform: "translateY(20px) scale(0.985)" },
            { opacity: 1, transform: "translateY(0px) scale(1)" },
          ],
          260 + index * 60,
          500,
        );
      });

      play(
        aside,
        [
          { opacity: 0, transform: "translateX(-20px)" },
          { opacity: 1, transform: "translateX(0px)" },
        ],
        280,
        520,
      );
      tocItems.forEach((item, index) => {
        play(
          item,
          [
            { opacity: 0, transform: "translateX(-10px)" },
            { opacity: 1, transform: "translateX(0px)" },
          ],
          340 + index * 45,
          420,
        );
      });
    };

    rafA = window.requestAnimationFrame(() => {
      rafB = window.requestAnimationFrame(run);
    });

    return () => {
      window.cancelAnimationFrame(rafA);
      window.cancelAnimationFrame(rafB);
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname, prefersReducedMotion]);

  return (
    <AnimatePresence initial={false} mode="wait" custom={direction}>
      <motion.div
        key={pathname}
        custom={direction}
        className="relative min-h-screen"
        initial={
          prefersReducedMotion
            ? { opacity: 0 }
            : direction > 0
              ? { opacity: 0, x: 34, scale: 0.988, filter: "blur(10px)" }
              : direction < 0
                ? { opacity: 0, x: -30, scale: 0.992, filter: "blur(10px)" }
                : { opacity: 0, y: 18, filter: "blur(8px)" }
        }
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={
          prefersReducedMotion
            ? { opacity: 0 }
            : direction > 0
              ? { opacity: 0, x: -24, scale: 0.994, filter: "blur(8px)" }
              : direction < 0
                ? { opacity: 0, x: 24, scale: 0.994, filter: "blur(8px)" }
                : { opacity: 0, y: -10, filter: "blur(8px)" }
        }
        transition={{
          duration: prefersReducedMotion ? 0.18 : 0.38,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[70]"
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  background:
                    direction >= 0
                      ? "linear-gradient(90deg, rgba(31,255,199,0.12), rgba(31,255,199,0) 32%, rgba(78,94,255,0.16) 68%, rgba(78,94,255,0.05))"
                      : "linear-gradient(270deg, rgba(31,255,199,0.12), rgba(31,255,199,0) 32%, rgba(78,94,255,0.16) 68%, rgba(78,94,255,0.05))",
                }
          }
          animate={prefersReducedMotion ? { opacity: 0 } : { opacity: [0, 0.18, 0] }}
          transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
