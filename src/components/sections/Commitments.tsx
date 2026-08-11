import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Commitments({ dict }: { dict: Dictionary }) {
  const t = dict.home.commitments;
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.items.map((item) => (
            <RevealItem key={item}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-mist-300 bg-mist-50 p-8 dark:border-ink-700 dark:bg-ink-800">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400" />
                <p className="text-sm leading-relaxed text-charcoal-700 dark:text-white/70">{item}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
