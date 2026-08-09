import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { posts } from "@/lib/content";

export function InsightsPreview() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Latest Insights"
            title="Notes on laboratory materials and equipment."
            description="Practical perspective from a team that sources this corridor every day."
          />
          <Reveal delay={0.1}>
            <Link href="/insights" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy-800 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400">
              All insights <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <RevealItem key={post.slug}>
              <Link
                href={`/insights/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-mist-300 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-ink-600"
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                  <span>{post.category}</span>
                  <span className="text-charcoal-200 dark:text-white/20">·</span>
                  <span className="text-charcoal-400 dark:text-white/45">{post.readTime}</span>
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold leading-snug text-navy-900 dark:text-white">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600 dark:text-white/60">{post.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 group-hover:text-emerald-600 dark:text-white/70 dark:group-hover:text-emerald-400">
                  Read article <ArrowUpRight size={13} />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
