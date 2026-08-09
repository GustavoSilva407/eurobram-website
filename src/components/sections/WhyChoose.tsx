import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const rows = [
  { label: "Certified equipment and consumables", eurobram: true, typical: false },
  { label: "Dedicated teams in Germany and Brazil", eurobram: true, typical: false },
  { label: "Direct access to European supplier network", eurobram: true, typical: true },
  { label: "Materials verified against specification", eurobram: true, typical: false },
  { label: "Named specialist for every inquiry", eurobram: true, typical: false },
  { label: "Support for hard-to-source, difficult items", eurobram: true, typical: false },
  { label: "Transparent, proactive shipment communication", eurobram: true, typical: true },
];

export function WhyChoose() {
  return (
    <section className="bg-navy-950 py-24 text-white lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose EUROBRAM"
          title="German precision. Brazilian market knowledge. One accountable partner."
          light
        />

        <Reveal delay={0.15} className="mt-14 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 bg-white/5 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/50 sm:gap-x-8 sm:px-8">
            <span>Capability</span>
            <span className="text-center text-emerald-400">EUROBRAM</span>
            <span className="text-center">General Broker</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1fr_auto_auto] items-center gap-x-4 px-6 py-4 text-sm sm:gap-x-8 sm:px-8 ${
                i % 2 === 0 ? "bg-white/[0.02]" : ""
              }`}
            >
              <span className="text-white/85">{row.label}</span>
              <span className="flex justify-center">
                {row.eurobram ? <Check size={18} className="text-emerald-400" /> : <X size={18} className="text-white/25" />}
              </span>
              <span className="flex justify-center">
                {row.typical ? <Check size={18} className="text-white/40" /> : <X size={18} className="text-white/25" />}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
