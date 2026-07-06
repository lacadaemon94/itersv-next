"use client";

import {
  ArrowRight01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { AppIcon } from "@/components/app-icon";
import { StrategyCallSubmitStatus } from "@/components/strategy-call-submit-status";
import type { Locale } from "@/lib/site-data";

type StrategyCallCopy = {
  eyebrow: string;
  title: string;
  sub: string;
  name: string;
  email: string;
  company: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  helper: string;
};

type StrategyCallModalProps = {
  copy: StrategyCallCopy;
  locale: Locale;
  open: boolean;
  onClose: () => void;
};

const modalEase = [0.22, 1, 0.36, 1] as const;
const submitStatusCopy = {
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
} satisfies Record<Locale, Record<string, string>>;

export function StrategyCallModal({
  copy,
  locale,
  open,
  onClose,
}: StrategyCallModalProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const canSubmit = Boolean(name.trim() && email.trim() && message.trim());
  const submitCopy = submitStatusCopy[locale];

  const submitStrategyCall = async () => {
    if (!canSubmit || submitting) {
      return;
    }

    setSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

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
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not send the request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const modalBackdropTransition = {
    duration: 0.28,
    ease: modalEase,
  };
  const modalPanelTransition = {
    duration: 0.36,
    ease: modalEase,
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    document.documentElement.classList.add("iter-modal-open");

    return () => {
      document.documentElement.classList.remove("iter-modal-open");
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="iter-scrollbar-none fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-5 backdrop-blur-[14px] sm:px-6 sm:py-8"
          onClick={onClose}
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
              transition={{ duration: 0.5, ease: modalEase }}
            />
            <motion.div
              className="absolute right-[-8%] top-[12%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(108,46,255,0.28),transparent_70%)] opacity-75 blur-[54px]"
              initial={prefersReducedMotion ? undefined : { scale: 0.9, x: 26, y: -18 }}
              animate={prefersReducedMotion ? undefined : { scale: 1, x: 0, y: 0 }}
              exit={prefersReducedMotion ? undefined : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.54, ease: modalEase }}
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
              transition={{ duration: 0.36, delay: 0.1, ease: modalEase }}
            />
            <motion.button
              type="button"
              onClick={onClose}
              aria-label="Close strategy call modal"
              className="absolute right-4 top-4 z-20 flex size-10 touch-manipulation items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[0_12px_30px_-18px_rgba(0,0,0,0.8)] sm:right-[18px] sm:top-[18px] sm:size-[38px] sm:rounded-[10px]"
              whileHover={prefersReducedMotion ? undefined : { rotate: 90, scale: 1.04 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
              transition={{ duration: 0.22, ease: modalEase }}
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
                transition={{ duration: 0.28, ease: modalEase }}
              >
                {copy.eyebrow}
              </motion.div>
              <motion.h3
                className="relative mb-2 pr-10 iter-display text-[clamp(30px,9vw,42px)] font-bold leading-[1.1] tracking-[-0.025em] max-sm:pr-0 max-sm:text-center sm:text-[42px]"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                }}
                transition={{ duration: 0.32, ease: modalEase }}
              >
                {copy.title}
              </motion.h3>
              <motion.p
                className="relative mb-6 text-[15px] leading-[1.55] text-[var(--text-dim)] max-sm:text-center sm:mb-[26px]"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                }}
                transition={{ duration: 0.32, ease: modalEase }}
              >
                {copy.sub}
              </motion.p>

              <motion.div
                className="relative flex flex-col gap-3.5"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                }}
                transition={{ duration: 0.34, ease: modalEase }}
              >
                <label className="flex flex-col gap-1.5">
                  <span className="iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {copy.name} *
                  </span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    disabled={submitting}
                    className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-[14px] py-3 text-[15px] text-[var(--text)]"
                    placeholder="Jane Doe"
                  />
                </label>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {copy.email} *
                    </span>
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      disabled={submitting}
                      className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-[14px] py-3 text-[15px] text-[var(--text)]"
                      placeholder="jane@company.com"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {copy.company}
                    </span>
                    <input
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      disabled={submitting}
                      className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-[14px] py-3 text-[15px] text-[var(--text)]"
                      placeholder="Acme Inc."
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="iter-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {copy.message} *
                  </span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    disabled={submitting}
                    rows={4}
                    className="resize-y rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-[14px] py-3 text-[15px] leading-[1.5] text-[var(--text)]"
                    placeholder={copy.messagePlaceholder}
                  />
                </label>

                <motion.div
                  whileHover={prefersReducedMotion ? undefined : canSubmit && !submitting ? { y: -1.5 } : undefined}
                  whileTap={prefersReducedMotion ? undefined : canSubmit && !submitting ? { scale: 0.99 } : undefined}
                >
                  <button
                    type="button"
                    disabled={!canSubmit || submitting}
                    onClick={submitStrategyCall}
                    aria-busy={submitting}
                    className={`mt-1 inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-[22px] py-[14px] text-[15px] font-semibold tracking-[-0.01em] ${
                      canSubmit && !submitting
                        ? "bg-[var(--accent)] shadow-[0_0_0_1px_var(--accent),0_12px_28px_-10px_var(--accent-glow)]"
                        : "bg-[var(--surface-strong)] text-[var(--text-dim)]"
                    }`}
                    style={canSubmit && !submitting ? { color: "var(--accent-ink)" } : undefined}
                  >
                    <span>{submitting ? submitCopy.loadingTitle : copy.send}</span>
                    {submitting ? (
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
                  {submitting ? (
                    <StrategyCallSubmitStatus
                      key="loading"
                      detail={submitCopy.loadingDetail}
                      prefersReducedMotion={prefersReducedMotion}
                      state="loading"
                      title={submitCopy.loadingTitle}
                    />
                  ) : status === "success" ? (
                    <StrategyCallSubmitStatus
                      key="success"
                      detail={submitCopy.successDetail}
                      prefersReducedMotion={prefersReducedMotion}
                      state="success"
                      title={submitCopy.successTitle}
                    />
                  ) : null}
                </AnimatePresence>

                {status === "error" ? (
                  <div className="rounded-[10px] border border-red-400/40 bg-red-500/10 px-3 py-2 text-center text-sm text-red-100">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="text-center iter-mono text-[11px] tracking-[0.04em] text-[var(--text-muted)]">
                  {copy.helper}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
