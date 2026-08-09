"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/graphics/HeroVisual";
import { DotGrid } from "@/components/graphics/GridBackdrop";

export function Hero() {
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
            Germany ⇄ Brazil · Pharmaceutical &amp; Agrochemical Procurement
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Laboratory Materials Sourcing for the Brazilian Pharmaceutical Market
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            EUROBRAM helps pharmaceutical and agrochemical companies source laboratory materials —
            HPLC columns, consumables and specialty equipment — connecting you directly with
            qualified European suppliers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact">Request an Inquiry</Button>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-sm text-white/50"
          >
            <span>Weimar, Germany HQ</span>
            <span>Brazil Partner Network</span>
            <span>Direct Manufacturer Access</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto"
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
