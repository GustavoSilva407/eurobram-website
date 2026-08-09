import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="py-20 lg:py-24">
        <Container className="max-w-3xl">
          <p className="mb-10 text-sm text-charcoal-400 dark:text-white/45">Last updated: {updated}</p>
          <div className="space-y-10 text-sm leading-relaxed text-charcoal-700 dark:text-white/70 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-navy-900 dark:[&_h2]:text-white [&_h2]:mb-3 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-navy-800 dark:[&_a]:text-emerald-400 [&_a]:underline [&_a]:underline-offset-2">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
