"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function ProcessTimeline({ dict }: { dict: Dictionary }) {
  const [active, setActive] = useState(0);
  const t = dict.home.process;
  const processSteps = dict.processSteps;

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <Reveal delay={0.15} className="mt-16">
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-5 h-px bg-mist-300 dark:bg-ink-700" />
              <motion.div
                className="absolute left-0 top-5 h-px bg-emerald-500"
                initial={{ width: "0%" }}
                animate={{ width: `${(active / (processSteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <div className="relative grid grid-cols-4 gap-2">
                {processSteps.map((step, i) => (
                  <button
                    key={step.title}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-start text-left"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors ${
                        i <= active
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-mist-300 bg-white text-charcoal-400 dark:border-ink-700 dark:bg-ink-800 dark:text-white/40"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`mt-4 text-sm font-semibold ${
                        i === active ? "text-navy-900 dark:text-white" : "text-charcoal-600 dark:text-white/50"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-8 max-w-xl rounded-2xl border border-mist-300 bg-mist-50 p-7 dark:border-ink-700 dark:bg-ink-800"
            >
              <div className="font-display text-lg font-semibold text-navy-900 dark:text-white">{processSteps[active].title}</div>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{processSteps[active].description}</p>
            </motion.div>
          </div>

          <div className="space-y-0 lg:hidden">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative flex gap-5 pb-10 last:pb-0">
                {i < processSteps.length - 1 && (
                  <span className="absolute left-5 top-10 h-full w-px -translate-x-1/2 bg-mist-300 dark:bg-ink-700" />
                )}
                <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-500 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <div className="font-display text-base font-semibold text-navy-900 dark:text-white">{step.title}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
