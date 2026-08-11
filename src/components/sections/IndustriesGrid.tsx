import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { slugifyLabel } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function IndustriesGrid({ dict }: { dict: Dictionary }) {
  const t = dict.home.industriesGrid;
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="center" className="mx-auto" />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {dict.industries.data.map((industry) => (
            <RevealItem key={industry.name}>
              <div
                id={slugifyLabel(industry.name)}
                className="group flex h-full flex-col justify-between rounded-2xl border border-mist-300 bg-white p-6 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 dark:border-ink-700 dark:bg-ink-800 dark:hover:border-emerald-500/40 scroll-mt-28"
              >
                <div className="font-display text-sm font-semibold text-navy-900 dark:text-white">{industry.name}</div>
                <p className="mt-2 text-xs leading-relaxed text-charcoal-400 dark:text-white/50">{industry.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
