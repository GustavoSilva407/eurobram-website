import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Linkify } from "@/components/ui/Linkify";

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };

export function LegalLayout({
  eyebrow,
  title,
  updatedLabel,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updatedLabel: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="py-20 lg:py-24">
        <Container className="max-w-3xl">
          <p className="mb-10 text-sm text-charcoal-400 dark:text-white/45">
            {updatedLabel}: {updated}
          </p>
          <div className="space-y-10 text-sm leading-relaxed text-charcoal-700 dark:text-white/70">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display mb-3 text-lg font-semibold text-navy-900 dark:text-white">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mb-3 whitespace-pre-line [&_a]:text-navy-800 dark:[&_a]:text-emerald-400">
                    <Linkify text={p} />
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc space-y-1.5 pl-5">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
