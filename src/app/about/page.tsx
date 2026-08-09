import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "How EUROBRAM was founded in Weimar, Germany, and how our teams in Germany and Brazil work together to source laboratory materials for the Brazilian pharmaceutical market.",
};

const values = [
  { title: "Product Expertise", text: "Deep familiarity with the laboratory equipment and consumables our customers rely on." },
  { title: "Customer Focus", text: "The problem we were founded to solve — a lack of customer focus in procurement — stays central to how we operate." },
  { title: "Results", text: "Reliability is the method; measurable, on-time delivery is the outcome we're accountable for." },
];

const storyPhases = [
  {
    label: "The Problem",
    title: "Procurement kept stalling — and it wasn't about distance",
    text: "Conversations with pharmaceutical and agrochemical companies kept surfacing the same issue: sourcing laboratory items from Brazil was slow, not because of geography, but because of unreliable suppliers and providers who weren't focused on the customer's actual timeline.",
  },
  {
    label: "The Founding",
    title: "EUROBRAM GmbH is established in Weimar",
    text: "EUROBRAM was founded in Weimar, Germany to close that gap — combining deep product knowledge with a genuine focus on the customer, rather than treating sourcing as an afterthought.",
  },
  {
    label: "Today",
    title: "A bilateral team built around one corridor",
    text: "We operate with dedicated teams in Germany and Brazil, focused specifically on the Germany–Brazil pharmaceutical and agrochemical corridor rather than spreading thin across unrelated markets.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EUROBRAM"
        title="A laboratory materials partner built around one corridor, done properly."
        description="We don't try to be everything to everyone. EUROBRAM exists to source laboratory materials for pharmaceutical and agrochemical companies between Europe and Brazil — reliably, predictably, and with a named person accountable at every step."
      />

      <section id="company" className="scroll-mt-24 py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Company"
            title="A service provider for the pharmaceutical and agrochemical industry."
            description="Our typical customer develops or manufactures products for the Brazilian market and needs urgently required laboratory items sourced quickly. Our core competence is the supply of laboratory materials — HPLC columns, consumables and specialty equipment — for and from Brazil."
          />
          <Reveal delay={0.1}>
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-mist-300 bg-mist-50 p-6 dark:border-ink-700 dark:bg-ink-800">
                  <div className="font-display text-base font-semibold text-navy-900 dark:text-white">{v.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{v.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="mission" className="scroll-mt-24 bg-navy-950 py-24 text-white lg:py-32">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Mission</div>
            <blockquote className="font-display mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
              “Quality and Results.”
            </blockquote>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              We believe that sourcing the right laboratory material — verified, reliable, and exactly to
              specification — is what creates real value for our customers. Materials that don't meet spec
              aren't a shortcut; they're a problem waiting to surface in your laboratory.
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="story" className="scroll-mt-24 py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Our Story" title="How EUROBRAM began." className="mx-auto" align="center" />
          <div className="mx-auto mt-16 max-w-3xl">
            {storyPhases.map((phase, i) => (
              <Reveal key={phase.label} delay={i * 0.1} className="relative flex gap-6 pb-14 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-3 w-3 shrink-0 rounded-full bg-emerald-500" />
                  {i < storyPhases.length - 1 && <span className="mt-2 w-px flex-1 bg-mist-300 dark:bg-ink-700" />}
                </div>
                <div className="-mt-1.5 pb-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">{phase.label}</div>
                  <div className="font-display mt-2 text-xl font-semibold text-navy-900 dark:text-white">{phase.title}</div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{phase.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="team" className="scroll-mt-24 bg-mist-50 py-24 lg:py-32 dark:bg-ink-800">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="Well-trained, experienced teams in Germany and Brazil."
            description="A named specialist on each side of the shipment — not a support queue."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <RevealItem>
              <div className="rounded-2xl border border-mist-300 bg-white p-8 dark:border-ink-700 dark:bg-ink-900">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">Germany · Weimar</div>
                <div className="font-display mt-3 text-xl font-semibold text-navy-900 dark:text-white">{company.contactPerson}</div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">
                  Primary contact for procurement and general inquiries from our Weimar headquarters.
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-navy-800 hover:text-emerald-600 dark:text-white/80 dark:hover:text-emerald-400">
                    <Mail size={15} /> {company.email}
                  </a>
                  <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-navy-800 hover:text-emerald-600 dark:text-white/80 dark:hover:text-emerald-400">
                    <Phone size={15} /> {company.phone}
                  </a>
                </div>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="rounded-2xl border border-mist-300 bg-white p-8 dark:border-ink-700 dark:bg-ink-900">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">Brazil · Partner Network</div>
                <div className="font-display mt-3 text-xl font-semibold text-navy-900 dark:text-white">{company.brazilPartner.name}</div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">
                  Coordinates local delivery and support on the Brazilian side of every order.
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <a href={`mailto:${company.brazilPartner.email}`} className="flex items-center gap-2 text-navy-800 hover:text-emerald-600 dark:text-white/80 dark:hover:text-emerald-400">
                    <Mail size={15} /> {company.brazilPartner.email}
                  </a>
                  <a href={`tel:${company.brazilPartner.phone}`} className="flex items-center gap-2 text-navy-800 hover:text-emerald-600 dark:text-white/80 dark:hover:text-emerald-400">
                    <Phone size={15} /> {company.brazilPartner.phone}
                  </a>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
