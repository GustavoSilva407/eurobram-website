import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DotGrid } from "@/components/graphics/GridBackdrop";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-40 pb-20 lg:pt-48 lg:pb-24">
      <DotGrid className="absolute inset-0 text-white/[0.04]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />
      <Container className="relative max-w-3xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            {eyebrow}
          </div>
          <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{description}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
