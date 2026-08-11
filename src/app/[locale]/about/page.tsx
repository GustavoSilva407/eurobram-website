import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { company } from "@/lib/constants";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const dict = getDictionary(rawLocale);
  return { title: dict.nav.about, description: dict.about.metaDescription };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const dict = getDictionary(rawLocale);
  const t = dict.about;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} />

      <section id="company" className="scroll-mt-24 py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
          <SectionHeading eyebrow={t.company.eyebrow} title={t.company.title} description={t.company.description} />
          <Reveal delay={0.1}>
            <div className="space-y-6">
              {t.values.map((v) => (
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
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{t.mission.eyebrow}</div>
            <blockquote className="font-display mt-6 text-3xl font-semibold leading-tight sm:text-4xl">{t.mission.quote}</blockquote>
            <p className="mt-6 text-lg leading-relaxed text-white/70">{t.mission.text}</p>
          </Reveal>
        </Container>
      </section>

      <section id="story" className="scroll-mt-24 py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow={t.story.eyebrow} title={t.story.title} className="mx-auto" align="center" />
          <div className="mx-auto mt-16 max-w-3xl">
            {t.story.phases.map((phase, i) => (
              <Reveal key={phase.label} delay={i * 0.1} className="relative flex gap-6 pb-14 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-3 w-3 shrink-0 rounded-full bg-emerald-500" />
                  {i < t.story.phases.length - 1 && <span className="mt-2 w-px flex-1 bg-mist-300 dark:bg-ink-700" />}
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
          <SectionHeading eyebrow={t.team.eyebrow} title={t.team.title} description={t.team.description} />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <RevealItem>
              <div className="rounded-2xl border border-mist-300 bg-white p-8 dark:border-ink-700 dark:bg-ink-900">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">{t.team.germanyLabel}</div>
                <div className="font-display mt-3 text-xl font-semibold text-navy-900 dark:text-white">{company.contactPerson}</div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{t.team.germanyDesc}</p>
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
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">{t.team.brazilLabel}</div>
                <div className="font-display mt-3 text-xl font-semibold text-navy-900 dark:text-white">{company.brazilPartner.name}</div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{t.team.brazilDesc}</p>
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

      <CtaSection locale={rawLocale} dict={dict} />
    </>
  );
}
