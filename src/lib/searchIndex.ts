import { services, industries, posts, faqs } from "./content";

export type SearchEntry = {
  title: string;
  description: string;
  keywords?: string;
  href: string;
  group: "Page" | "Service" | "Industry" | "Insight" | "FAQ";
};

const pages: SearchEntry[] = [
  { title: "Home", description: "EUROBRAM — pharmaceutical & agrochemical procurement, Germany to Brazil", href: "/", group: "Page" },
  { title: "About", description: "Company, mission, team and story", href: "/about", group: "Page" },
  { title: "Industries", description: "Industries EUROBRAM serves", href: "/industries", group: "Page" },
  { title: "Insights", description: "Articles on laboratory materials and equipment", href: "/insights", group: "Page" },
  { title: "FAQ", description: "Frequently asked questions", href: "/faq", group: "Page" },
  { title: "Contact", description: "Request a quote or reach our teams", href: "/contact", group: "Page" },
];

export const searchIndex: SearchEntry[] = [
  ...pages,
  ...services.map((s) => ({
    title: s.name,
    description: s.short,
    keywords: `${s.description} ${s.points.join(" ")}`,
    href: `/services/${s.slug}`,
    group: "Service" as const,
  })),
  ...industries.map((i) => ({
    title: i.name,
    description: i.description,
    href: `/industries#${i.name.toLowerCase().replace(/\s+/g, "-")}`,
    group: "Industry" as const,
  })),
  ...posts.map((p) => ({ title: p.title, description: p.excerpt, href: `/insights/${p.slug}`, group: "Insight" as const })),
  ...faqs.map((f) => ({ title: f.q, description: f.a, href: "/faq", group: "FAQ" as const })),
];
