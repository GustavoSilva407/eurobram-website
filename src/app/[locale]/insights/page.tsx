import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { href, isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const dict = getDictionary(rawLocale);
  return { title: dict.nav.resourcesInsights, description: dict.insights.metaDescription };
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const dict = getDictionary(rawLocale);
  const t = dict.insights;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} />
      <section className="py-24 lg:py-28">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.posts.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  href={href(rawLocale, `/insights/${post.slug}`)}
                  className="group flex h-full flex-col rounded-2xl border border-mist-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5 dark:border-ink-700 dark:bg-ink-800 dark:hover:border-ink-600"
                >
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    <span>{post.category}</span>
                    <span className="text-charcoal-200 dark:text-white/20">·</span>
                    <span className="text-charcoal-400 dark:text-white/45">{post.readTime}</span>
                  </div>
                  <h2 className="font-display mt-4 text-xl font-semibold leading-snug text-navy-900 dark:text-white">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-mist-200 pt-5 dark:border-ink-700">
                    <span className="text-xs text-charcoal-400 dark:text-white/45">
                      {new Date(post.date).toLocaleDateString(dict.dateLocale, { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 group-hover:text-emerald-600 dark:text-white/70 dark:group-hover:text-emerald-400">
                      {t.readArticle} <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
