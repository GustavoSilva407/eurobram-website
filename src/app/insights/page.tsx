import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspective on laboratory materials, equipment and consumables for pharmaceutical procurement between Europe and Brazil.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the Germany–Brazil corridor."
        description="Practical perspective on laboratory materials and equipment — written by the team that sources this route."
      />
      <section className="py-24 lg:py-28">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-mist-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5 dark:border-ink-700 dark:bg-ink-800 dark:hover:border-ink-600"
                >
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    <span>{post.category}</span>
                    <span className="text-charcoal-200 dark:text-white/20">·</span>
                    <span className="text-charcoal-400 dark:text-white/45">{post.readTime}</span>
                  </div>
                  <h2 className="font-display mt-4 text-xl font-semibold leading-snug text-navy-900 dark:text-white">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-mist-200 pt-5 dark:border-ink-700">
                    <span className="text-xs text-charcoal-400 dark:text-white/45">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 group-hover:text-emerald-600 dark:text-white/70 dark:group-hover:text-emerald-400">
                      Read article <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
