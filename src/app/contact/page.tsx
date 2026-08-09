import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request an inquiry or reach EUROBRAM's teams in Weimar, Germany and Brazil directly.",
};

export default function ContactPage() {
  const whatsapp = company.brazilPartner.phone.replace(/[^\d]/g, "");
  const mapQuery = encodeURIComponent(
    `${company.address.street}, ${company.address.postal} ${company.address.city}, ${company.address.country}`
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Quote"
        description="Tell us what you're trying to source or ship. A specialist — not a ticket queue — will get back to you."
      />

      <section className="py-24 lg:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <div className="rounded-3xl border border-mist-300 bg-white p-8 sm:p-10 dark:border-ink-700 dark:bg-ink-800">
              <h2 className="font-display text-xl font-semibold text-navy-900 dark:text-white">Quick Inquiry</h2>
              <p className="mt-2 text-sm text-charcoal-600 dark:text-white/60">Fields marked required are needed to route your inquiry correctly.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-2xl border border-mist-300 bg-mist-50 p-7 dark:border-ink-700 dark:bg-ink-800">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">Germany · Headquarters</div>
              <div className="mt-4 space-y-3 text-sm text-charcoal-700 dark:text-white/70">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-navy-700 dark:text-emerald-400" />
                  <span>
                    {company.address.street}
                    <br />
                    {company.address.postal} {company.address.city}, {company.address.country}
                  </span>
                </div>
                <a href={`tel:${company.phone}`} className="flex items-center gap-3 hover:text-navy-900 dark:hover:text-white">
                  <Phone size={16} className="text-navy-700 dark:text-emerald-400" /> {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-navy-900 dark:hover:text-white">
                  <Mail size={16} className="text-navy-700 dark:text-emerald-400" /> {company.email}
                </a>
                <div className="text-xs text-charcoal-400 dark:text-white/45">Contact: {company.contactPerson}</div>
              </div>
            </div>

            <div className="rounded-2xl border border-mist-300 bg-mist-50 p-7 dark:border-ink-700 dark:bg-ink-800">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">Brazil · Partner</div>
              <div className="mt-4 space-y-3 text-sm text-charcoal-700 dark:text-white/70">
                <div className="font-medium text-navy-900 dark:text-white">{company.brazilPartner.name}</div>
                <a href={`mailto:${company.brazilPartner.email}`} className="flex items-center gap-3 hover:text-navy-900 dark:hover:text-white">
                  <Mail size={16} className="text-navy-700 dark:text-emerald-400" /> {company.brazilPartner.email}
                </a>
                <a href={`tel:${company.brazilPartner.phone}`} className="flex items-center gap-3 hover:text-navy-900 dark:hover:text-white">
                  <Phone size={16} className="text-navy-700 dark:text-emerald-400" /> {company.brazilPartner.phone}
                </a>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  <MessageCircle size={16} /> Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-mist-300 dark:border-ink-700">
              <iframe
                title="EUROBRAM GmbH location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
