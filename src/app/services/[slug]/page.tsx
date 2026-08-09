import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DotGrid } from "@/components/graphics/GridBackdrop";
import { CtaSection } from "@/components/sections/CtaSection";
import { services } from "@/lib/content";
import { serviceIcons } from "@/components/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.name, description: service.short };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-40 pb-24 lg:pt-48 lg:pb-28">
        <DotGrid className="absolute inset-0 text-white/[0.04]" />
        <Container className="relative max-w-3xl">
          <Reveal>
            <Link href="/" className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300 hover:text-emerald-200">
              ← Home
            </Link>
            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
              <Icon size={26} />
            </div>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{service.description}</p>
            <div className="mt-9">
              <Button href="/contact">Request an Inquiry</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 lg:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy-900 dark:text-white">What this covers</h2>
            <ul className="mt-8 space-y-5">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                    <Check size={14} />
                  </span>
                  <span className="text-base leading-relaxed text-charcoal-700 dark:text-white/75">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-mist-300 bg-mist-50 p-8 dark:border-ink-700 dark:bg-ink-800">
              <div className="font-display text-lg font-semibold text-navy-900 dark:text-white">Have a specific requirement?</div>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">
                Tell us what you need sourced or shipped and we'll respond with a realistic assessment —
                including anything we think won't work.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="secondary">
                  Contact EUROBRAM
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
