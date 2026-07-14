import HeroSection from "@/features/hero/HeroSection";
import ProductShowcase from "@/features/product-showcase/ProductShowcase";
import StatsSection from "@/features/stats/StatsSection";
import FeatureTemplates from "@/features/featured-template/TemplateSection";
import BenefitsSection from "@/features/benefits/BenefitSection";
import HighlightSection from "@/features/feature-highlight/HighlightSection";
import ProcessSection from "@/features/process/ProcessSection";
import CustomerSuccessSection from "@/features/customer-success/CustomerSection";
import PricingSection from "@/features/pricing/PricingSection";
import QuizSection from "@/features/quiz/QuizSection";
import FounderSection from "@/features/founder/FounderSection";
import TestimonialSection from "@/features/testimonials/TestimonialSection";
import AnimatedReveal from "@/component/reusable/animation/AnimatedReveal";

export default function Home() {
  return (
    <main>
      <AnimatedReveal>
        <HeroSection />
      </AnimatedReveal>

      <AnimatedReveal>
        <ProductShowcase />
      </AnimatedReveal>

      <AnimatedReveal>
        <StatsSection />
      </AnimatedReveal>

      <AnimatedReveal>
        <FeatureTemplates />
      </AnimatedReveal>

      <AnimatedReveal>
        <BenefitsSection />
      </AnimatedReveal>

      <AnimatedReveal>
        <HighlightSection />
      </AnimatedReveal>

      <AnimatedReveal>
        <ProcessSection />
      </AnimatedReveal>

      <AnimatedReveal>
        <CustomerSuccessSection />
      </AnimatedReveal>

      <AnimatedReveal>
        <PricingSection />
      </AnimatedReveal>

      <AnimatedReveal>
        <QuizSection />
      </AnimatedReveal>

      <AnimatedReveal>
        <FounderSection />
      </AnimatedReveal>

      <AnimatedReveal>
        <TestimonialSection />
      </AnimatedReveal>
    </main>
  );
}
