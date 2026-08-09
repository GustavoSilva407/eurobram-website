import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about procurement timelines, sourcing hard-to-find materials and urgent requests for the Germany–Brazil pharmaceutical corridor.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="If your question isn't answered here, it goes straight to a specialist — not a support form."
      />
      <section className="py-24 lg:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
