"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/graphics/HeroVisual";
import { DotGrid } from "@/components/graphics/GridBackdrop";
import { href, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.home.hero;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-32 pb-20 lg:pt-44 lg:pb-28">
      <DotGrid className="absolute inset-0 text-white/[0.04]" />
      <div className="pointer-events-none absolute -top-24 left-1/3 h-[36rem] w-[36rem] rounded-full bg-emerald-500/10 blur-[120px]" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300"
          >
            {h.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white [hyphens:auto] [overflow-wrap:break-word] sm:text-5xl lg:text-[3.4rem]"
          >
            {h.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {h.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href={href(locale, "/contact")}>{h.ctaPrimary}</Button>
            <Link
              href={href(locale, "/services")}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {h.ctaSecondary}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-sm text-white/50"
          >
            <span>{h.trust1}</span>
            <span>{h.trust2}</span>
            <span>{h.trust3}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto"
        >
          <HeroVisual
            certTitle={h.visualCertTitle}
            certSubtitle={h.visualCertSubtitle}
            columnLabel={h.visualColumnLabel}
            germanyLabel={h.visualGermanyLabel}
            brazilLabel={h.visualBrazilLabel}
          />
        </motion.div>
      </Container>
    </section>
  );
}
