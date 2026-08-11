import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProcurementCategories } from "@/components/sections/ProcurementCategories";
import { Commitments } from "@/components/sections/Commitments";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { CtaSection } from "@/components/sections/CtaSection";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <TrustBar dict={dict} />
      <ProcessTimeline dict={dict} />
      <AboutPreview locale={locale} dict={dict} />
      <ServicesGrid locale={locale} dict={dict} />
      <IndustriesGrid dict={dict} />
      <WhyChoose dict={dict} />
      <ProcurementCategories dict={dict} />
      <Commitments dict={dict} />
      <FaqPreview locale={locale} dict={dict} />
      <InsightsPreview locale={locale} dict={dict} />
      <CtaSection locale={locale} dict={dict} />
    </>
  );
}
