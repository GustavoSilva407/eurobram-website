import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { procurementCategories } from "@/lib/content";

export function ProcurementCategories() {
  return (
    <section className="bg-mist-50 py-24 lg:py-32 dark:bg-ink-800">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Procurement Categories"
            title="Not a catalog — a sourcing network."
            description="We don't hold inventory for sale. We identify, qualify and move the specific materials your laboratory or production line needs."
          />
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {procurementCategories.map((category, i) => (
            <RevealItem key={category}>
              <div className="flex h-full items-center gap-4 rounded-xl border border-mist-300 bg-white px-5 py-5 transition-colors hover:border-navy-300 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-ink-600">
                <span className="font-display text-2xl font-semibold text-navy-100 dark:text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-navy-900 dark:text-white">{category}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
