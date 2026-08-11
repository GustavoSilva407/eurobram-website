import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function TrustBar({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-mist-300 bg-mist-50 py-16 dark:border-ink-700 dark:bg-ink-800">
      <Container>
        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {dict.trustPoints.map((point) => (
            <RevealItem key={point.value} className="border-l-2 border-navy-700 pl-5 dark:border-emerald-400">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">{point.label}</div>
              <div className="font-display mt-2 text-xl font-semibold text-navy-900 dark:text-white">{point.value}</div>
              <div className="mt-1.5 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{point.description}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
