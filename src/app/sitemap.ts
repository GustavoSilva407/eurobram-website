import type { MetadataRoute } from "next";
import { services, posts } from "@/lib/content";

export const dynamic = "force-static";

const base = "https://www.eurobram.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/industries",
    "/insights",
    "/faq",
    "/contact",
    "/legal/privacy",
    "/legal/imprint",
    "/legal/cookies",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
