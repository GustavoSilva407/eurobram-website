import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const cards = [
  {
    title: "Company",
    text: "A dedicated laboratory materials partner for pharmaceutical and agrochemical companies operating between Europe and Brazil.",
  },
  {
    title: "Mission",
    text: "“Quality and Results.” Sourcing the right material the first time is what makes performance measurable.",
  },
  {
    title: "Germany + Brazil",
    text: "Teams based in Weimar, Germany and in Brazil, supporting customers on both ends of every order.",
  },
];

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="About EUROBRAM"
            title="Built by people who understood why procurement kept stalling."
            description="EUROBRAM was founded in Weimar after conversations with pharmaceutical and agrochemical companies revealed a recurring problem: procurement from Brazil was slowed not by distance, but by unreliable sourcing and a lack of customer focus. We built our operation to solve exactly that."
          />
          <Reveal delay={0.1}>
            <Link href="/about" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy-800 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400">
              Read our full story <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <RevealItem key={card.title}>
              <div className="h-full rounded-2xl border border-mist-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5 dark:border-ink-700 dark:bg-ink-800 dark:hover:border-ink-600">
                <div className="font-display text-lg font-semibold text-navy-900 dark:text-white">{card.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 dark:text-white/65">{card.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
