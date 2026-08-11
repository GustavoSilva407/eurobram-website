import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function WhyChoose({ dict }: { dict: Dictionary }) {
  const t = dict.home.whyChoose;
  const typical = [false, false, true, false, false, false, true];

  return (
    <section className="bg-navy-950 py-24 text-white lg:py-32">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} light />

        <Reveal delay={0.15} className="mt-14 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 bg-white/5 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/50 sm:gap-x-8 sm:px-8">
            <span>{t.capabilityCol}</span>
            <span className="text-center text-emerald-400">{t.eurobramCol}</span>
            <span className="text-center">{t.brokerCol}</span>
          </div>
          {t.rows.map((row, i) => (
            <div
              key={row}
              className={`grid grid-cols-[1fr_auto_auto] items-center gap-x-4 px-6 py-4 text-sm sm:gap-x-8 sm:px-8 ${
                i % 2 === 0 ? "bg-white/[0.02]" : ""
              }`}
            >
              <span className="text-white/85">{row}</span>
              <span className="flex justify-center">
                <Check size={18} className="text-emerald-400" />
              </span>
              <span className="flex justify-center">
                {typical[i] ? <Check size={18} className="text-white/40" /> : <X size={18} className="text-white/25" />}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
