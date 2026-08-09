import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/content";

export function FaqPreview() {
  return (
    <section className="bg-mist-50 py-24 lg:py-32 dark:bg-ink-800">
      <Container className="max-w-4xl">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="FAQ" title="Answers before you have to ask." />
          <Reveal delay={0.1}>
            <Link href="/faq" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy-800 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400">
              View all questions <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-12">
          <Accordion items={faqs.slice(0, 4)} />
        </Reveal>
      </Container>
    </section>
  );
}
