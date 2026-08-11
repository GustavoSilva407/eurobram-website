import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.home.testimonials;
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.items.map((item) => (
            <RevealItem key={item.role}>
              <div className="flex h-full flex-col rounded-2xl border border-mist-300 bg-mist-50 p-8 dark:border-ink-700 dark:bg-ink-800">
                <Quote className="text-emerald-500 dark:text-emerald-400" size={22} />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-charcoal-700 dark:text-white/70">“{item.quote}”</p>
                <div className="mt-6 border-t border-mist-300 pt-5 dark:border-ink-700">
                  <div className="text-sm font-semibold text-navy-900 dark:text-white">{item.role}</div>
                  <div className="text-xs text-charcoal-400 dark:text-white/45">{item.org}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
