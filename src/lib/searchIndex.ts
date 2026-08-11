import { href, type Locale } from "./i18n/config";
import type { Dictionary } from "./i18n/dictionaries";
import { slugifyLabel } from "./utils";

export type SearchEntry = {
  title: string;
  description: string;
  keywords?: string;
  href: string;
  group: "page" | "service" | "industry" | "insight" | "faq";
};

export function buildSearchIndex(locale: Locale, dict: Dictionary): SearchEntry[] {
  const pages: SearchEntry[] = [
    { title: dict.nav.home, description: dict.meta.description, href: href(locale, "/"), group: "page" },
    { title: dict.nav.about, description: dict.nav.aboutCompanyDesc, href: href(locale, "/about"), group: "page" },
    { title: dict.nav.industries, description: dict.industries.hero.title, href: href(locale, "/industries"), group: "page" },
    { title: dict.nav.resourcesInsights, description: dict.nav.resourcesInsightsDesc, href: href(locale, "/insights"), group: "page" },
    { title: dict.nav.resourcesFaq, description: dict.faq.hero.description, href: href(locale, "/faq"), group: "page" },
    { title: dict.nav.contact, description: dict.contact.hero.description, href: href(locale, "/contact"), group: "page" },
  ];

  const services: SearchEntry[] = dict.services.data.map((s) => ({
    title: s.name,
    description: s.short,
    keywords: `${s.description} ${s.points.join(" ")}`,
    href: href(locale, `/services/${s.slug}`),
    group: "service",
  }));

  const industries: SearchEntry[] = dict.industries.data.map((i) => ({
    title: i.name,
    description: i.description,
    href: `${href(locale, "/industries")}#${slugifyLabel(i.name)}`,
    group: "industry",
  }));

  const insights: SearchEntry[] = dict.insights.posts.map((p) => ({
    title: p.title,
    description: p.excerpt,
    href: href(locale, `/insights/${p.slug}`),
    group: "insight",
  }));

  const faqs: SearchEntry[] = dict.faq.items.map((f) => ({
    title: f.q,
    description: f.a,
    href: href(locale, "/faq"),
    group: "faq",
  }));

  return [...pages, ...services, ...industries, ...insights, ...faqs];
}
