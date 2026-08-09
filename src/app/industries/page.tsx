import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ProcurementCategories } from "@/components/sections/ProcurementCategories";
import { CtaSection } from "@/components/sections/CtaSection";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description: "EUROBRAM serves pharmaceutical, biotechnology, agrochemical, research laboratory, quality control, R&D, university and CRO organizations across the Germany–Brazil corridor.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries Served"
        title="Built for organizations that can't afford a procurement delay."
        description="Every industry below shares the same constraint: specialized materials, tight timelines, and zero tolerance for the wrong part showing up."
      />

      <section className="py-24 lg:py-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <RevealItem key={industry.name}>
                <div
                  id={industry.name.toLowerCase().replace(/\s+/g, "-")}
                  className="scroll-mt-28 h-full rounded-2xl border border-mist-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-ink-700 dark:bg-ink-800 dark:hover:border-emerald-500/40"
                >
                  <div className="font-display text-lg font-semibold text-navy-900 dark:text-white">{industry.name}</div>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{industry.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <ProcurementCategories />
      <CtaSection />
    </>
  );
}
