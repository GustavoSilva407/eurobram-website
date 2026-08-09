import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DotGrid } from "@/components/graphics/GridBackdrop";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-emerald-900 py-24 text-white lg:py-28">
      <DotGrid className="absolute inset-0 text-white/[0.05]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Need laboratory materials delivered to Brazil?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Let's discuss your requirements — sourcing, specifications, or availability.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/contact" variant="primary">
              Contact EUROBRAM
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
