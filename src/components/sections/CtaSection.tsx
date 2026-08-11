import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DotGrid } from "@/components/graphics/GridBackdrop";
import { href, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function CtaSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.cta;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-emerald-900 py-24 text-white lg:py-28">
      <DotGrid className="absolute inset-0 text-white/[0.05]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">{t.description}</p>
          <div className="mt-9 flex justify-center">
            <Button href={href(locale, "/contact")} variant="primary">
              {t.button}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
