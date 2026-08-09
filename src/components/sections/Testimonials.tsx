import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "Every shipment has matched the specification sheet exactly — no substitutions, no surprises when it reaches our bench.",
    role: "Quality Control Director",
    org: "Pharmaceutical Manufacturer",
  },
  {
    quote:
      "We had an HPLC column that two other suppliers couldn't locate. EUROBRAM found it and got it to us without the usual back-and-forth.",
    role: "Laboratory Manager",
    org: "Contract Research Organization",
  },
  {
    quote:
      "Having a single point of contact for sourcing simplified a process that used to involve three separate vendors.",
    role: "Procurement Lead",
    org: "Agrochemical Company",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What partners say about working with us." />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.role}>
              <div className="flex h-full flex-col rounded-2xl border border-mist-300 bg-mist-50 p-8 dark:border-ink-700 dark:bg-ink-800">
                <Quote className="text-emerald-500 dark:text-emerald-400" size={22} />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-charcoal-700 dark:text-white/70">“{t.quote}”</p>
                <div className="mt-6 border-t border-mist-300 pt-5 dark:border-ink-700">
                  <div className="text-sm font-semibold text-navy-900 dark:text-white">{t.role}</div>
                  <div className="text-xs text-charcoal-400 dark:text-white/45">{t.org}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
