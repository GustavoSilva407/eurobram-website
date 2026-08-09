import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProcurementCategories } from "@/components/sections/ProcurementCategories";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServicesGrid />
      <IndustriesGrid />
      <WhyChoose />
      <ProcessTimeline />
      <ProcurementCategories />
      <Testimonials />
      <FaqPreview />
      <InsightsPreview />
      <CtaSection />
    </>
  );
}
