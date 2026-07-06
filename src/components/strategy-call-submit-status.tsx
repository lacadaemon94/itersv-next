"use client";

import { CheckIcon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

import { AppIcon } from "@/components/app-icon";

type StrategyCallSubmitStatusProps = {
  detail: string;
  prefersReducedMotion: boolean;
  state: "loading" | "success";
  title: string;
};

const dotDelays = [0, 0.12, 0.24] as const;

export function StrategyCallSubmitStatus({
  detail,
  prefersReducedMotion,
  state,
  title,
}: StrategyCallSubmitStatusProps) {
  const isLoading = state === "loading";

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[14px] border px-4 py-3 text-left ${
        isLoading
          ? "border-[var(--accent)] bg-[var(--accent-soft)]"
          : "border-[var(--accent)] bg-[linear-gradient(135deg,var(--accent-soft),rgba(31,255,199,0.03))]"
      }`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8, scale: 0.985 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6, scale: 0.99 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-live="polite"
    >
      {isLoading ? (
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 left-[-45%] w-[45%] bg-[linear-gradient(90deg,transparent,rgba(31,255,199,0.22),transparent)]"
          animate={prefersReducedMotion ? undefined : { x: ["0%", "325%"] }}
          transition={{ duration: 1.12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ) : null}
      <div className="relative flex items-center gap-3">
        <div className="relative flex size-9 flex-none items-center justify-center rounded-full border border-[var(--accent)] bg-[rgba(31,255,199,0.08)] text-[var(--accent)]">
          {isLoading ? (
            <>
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-[var(--accent)]"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.55], opacity: [0.5, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
              />
              <span className="flex items-center gap-1">
                {dotDelays.map((delay) => (
                  <motion.span
                    key={delay}
                    className="size-1.5 rounded-full bg-[var(--accent)]"
                    animate={prefersReducedMotion ? undefined : { y: [0, -4, 0], opacity: [0.55, 1, 0.55] }}
                    transition={{
                      delay,
                      duration: 0.58,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </span>
            </>
          ) : (
            <motion.span
              initial={prefersReducedMotion ? false : { scale: 0.72, rotate: -8 }}
              animate={prefersReducedMotion ? undefined : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <AppIcon aria-hidden="true" icon={CheckIcon} size={15} strokeWidth={3} />
            </motion.span>
          )}
        </div>
        <div className="min-w-0">
          <div className="iter-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
            {title}
          </div>
          <div className="mt-1 text-sm leading-[1.45] text-[var(--text)]">
            {detail}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
