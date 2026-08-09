import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DotGrid } from "@/components/graphics/GridBackdrop";
import { CtaSection } from "@/components/sections/CtaSection";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-40 pb-20 lg:pt-48 lg:pb-24">
        <DotGrid className="absolute inset-0 text-white/[0.04]" />
        <Container className="relative max-w-3xl">
          <Reveal>
            <Link href="/insights" className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300 hover:text-emerald-200">
              ← All Insights
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/50">
              <span className="text-emerald-300">{post.category}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <h1 className="font-display mt-5 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="max-w-2xl">
          <Reveal className="space-y-6">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-charcoal-700 dark:text-white/75">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist-50 py-20 lg:py-24 dark:bg-ink-800">
        <Container>
          <h2 className="font-display text-xl font-semibold text-navy-900 dark:text-white">More insights</h2>
          <RevealGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <RevealItem key={r.slug}>
                <Link
                  href={`/insights/${r.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-mist-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg dark:border-ink-700 dark:bg-ink-900 dark:hover:border-ink-600"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">{r.category}</div>
                  <div className="font-display mt-3 text-base font-semibold text-navy-900 dark:text-white">{r.title}</div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 group-hover:text-emerald-600 dark:text-white/70 dark:group-hover:text-emerald-400">
                    Read article <ArrowUpRight size={13} />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
