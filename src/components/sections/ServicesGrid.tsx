import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { href, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { serviceIcons } from "@/components/icons";

export function ServicesGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.servicesFeature;
  const service = dict.services.data[0];
  const Icon = serviceIcons[service.icon];

  return (
    <section className="bg-mist-50 py-24 lg:py-32 dark:bg-ink-800">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <Reveal delay={0.15} className="mt-14">
          <div className="grid grid-cols-1 gap-10 rounded-3xl border border-mist-300 bg-white p-8 dark:border-ink-700 dark:bg-ink-900 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 dark:bg-ink-700 dark:text-emerald-400">
              <Icon size={26} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-navy-900 dark:text-white">{service.name}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal-600 dark:text-white/65">
                {service.description}
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-charcoal-700 dark:text-white/75">
                    <Check size={15} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={href(locale, `/services/${service.slug}`)}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
              >
                {t.exploreLink} <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
