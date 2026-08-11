import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const dynamic = "force-static";

const base = "https://www.eurobram.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const dict = getDictionary(locale);

    const staticPaths = ["", "/about", "/industries", "/insights", "/faq", "/contact", "/legal/privacy", "/legal/imprint", "/legal/cookies"];
    for (const path of staticPaths) {
      entries.push({ url: `${base}/${locale}${path}`, lastModified: new Date() });
    }

    for (const service of dict.services.data) {
      entries.push({ url: `${base}/${locale}/services/${service.slug}`, lastModified: new Date() });
    }

    for (const post of dict.insights.posts) {
      entries.push({ url: `${base}/${locale}/insights/${post.slug}`, lastModified: new Date(post.date) });
    }
  }

  return entries;
}
