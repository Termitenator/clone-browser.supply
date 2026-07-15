import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import ContactForm from "@/component/ui/ContactForm";

export default function ContactSection() {
  return (
    <section className="relative w-full flex flex-col">
      <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121]">
        <div className="flex flex-col items-center pt-[120px] pb-[80px] px-[20px] text-center gap-[32px]">
          <Badge
            text="CONTACT"
            className="bg-white/5 border border-white/10 text-gray-400"
          />

          <SectionHeader
            as="h2"
            align="center"
            titleClassName="text-5xl md:text-[5rem] font-serif leading-[1.1] text-white tracking-tight"
            title={"Still unsure?\nMessage me below"}
            description={
              "Send me a message and I'll get back to you within\n48 hours. Please provide as much detail as below."
            }
            className="mb-0 max-w-2xl"
          />
        </div>

        <ContactForm />
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
