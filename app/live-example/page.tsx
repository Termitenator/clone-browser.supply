import LiveExamplesPage from "@/features/live-example/LiveExampleSection";
import ProcessSection from "@/features/process/ProcessSection";
import CustomerSuccessSection from "@/features/customer-success/CustomerSection";
import TestimonialSection from "@/features/testimonials/TestimonialSection";

export default function LiveExample() {
  return (
    <main>
      <LiveExamplesPage />
      <ProcessSection />
      <CustomerSuccessSection />
      <TestimonialSection />
    </main>
  );
}
