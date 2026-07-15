import TemplatesPage from "@/features/template-page/TemplatePage";
import StatsSection from "@/features/stats/StatsSection";
import PricingSection from "@/features/pricing/PricingSection";
import QuizSection from "@/features/quiz/QuizSection";
import CustomerSuccessSection from "@/features/customer-success/CustomerSection";
import FAQSection from "@/features/faq/FAQSection";
export default function Template() {
  return (
    <main>
      <TemplatesPage />
      <StatsSection />
      <PricingSection />
      <QuizSection />
      <CustomerSuccessSection />
      <FAQSection />
    </main>
  );
}
