import HeroSection from "@/features/hero/HeroSection";
import ProductShowcase from "@/features/product-showcase/ProductShowcase";
import StatsSection from "@/features/stats/StatsSection";
import FeatureTemplates from "@/features/featured-template/TemplateSection";
import BenefitsSection from "@/features/benefits/BenefitSection";
import HighlightSection from "@/features/feature-highlight/HighlightSection";
import ProcessSection from "@/features/process/ProcessSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductShowcase />
      <StatsSection />
      <FeatureTemplates />
      <BenefitsSection />
      <HighlightSection />
      <ProcessSection />
    </main>
  );
}
