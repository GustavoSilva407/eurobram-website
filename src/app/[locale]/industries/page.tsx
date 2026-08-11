import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ProcurementCategories } from "@/components/sections/ProcurementCategories";
import { CtaSection } from "@/components/sections/CtaSection";
import { slugifyLabel } from "@/lib/utils";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const dict = getDictionary(rawLocale);
  return { title: dict.nav.industries, description: dict.industries.metaDescription };
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const dict = getDictionary(rawLocale);
  const t = dict.industries;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} />

      <section className="py-24 lg:py-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.data.map((industry) => (
              <RevealItem key={industry.name}>
                <div
                  id={slugifyLabel(industry.name)}
                  className="scroll-mt-28 h-full rounded-2xl border border-mist-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-ink-700 dark:bg-ink-800 dark:hover:border-emerald-500/40"
                >
                  <div className="font-display text-lg font-semibold text-navy-900 dark:text-white">{industry.name}</div>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{industry.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <ProcurementCategories dict={dict} />
      <CtaSection locale={rawLocale} dict={dict} />
    </>
  );
}
