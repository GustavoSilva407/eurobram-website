import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "./NewsletterForm";
import { company, industries } from "@/lib/content";

function LinkedInGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Story", href: "/about#story" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "FAQ", href: "/faq" },
      { label: "Request a Brochure", href: "/contact?topic=brochure" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Imprint", href: "/legal/imprint" },
      { label: "Cookie Policy", href: "/legal/cookies" },
    ],
  },
];

export function Footer() {
  const whatsapp = company.brazilPartner.phone.replace(/[^\d]/g, "");

  return (
    <footer className="border-t border-navy-100 bg-navy-950 text-white">
      <Container className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-display text-sm font-bold text-navy-900">
              EB
            </span>
            <span className="font-display text-lg font-semibold">EUROBRAM</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Laboratory materials supplier connecting pharmaceutical and agrochemical
            companies across Europe and Brazil.
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-white/70">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-400" />
              <span>
                {company.address.street}, {company.address.postal} {company.address.city}, {company.address.country}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-emerald-400" />
              <a href={`tel:${company.phone}`} className="hover:text-white">
                {company.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-emerald-400" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition-colors hover:border-emerald-400 hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/search/results/companies/?keywords=EUROBRAM%20GmbH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="EUROBRAM on LinkedIn"
              className="rounded-full border border-white/15 p-2.5 text-white/80 transition-colors hover:border-emerald-400 hover:text-white"
            >
              <LinkedInGlyph />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">{col.title}</div>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Newsletter</div>
          <p className="mt-5 text-sm text-white/60">
            Laboratory materials insights for the Brazilian pharmaceutical market, occasionally in your inbox.
          </p>
          <NewsletterForm />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/40 sm:flex-row">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>Laboratory Materials Specialists</span>
            <span>·</span>
            <span>{industries.length} industries served</span>
            <span>·</span>
            <span>Germany + Brazil</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
