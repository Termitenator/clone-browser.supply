import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import AmbientBackground from "@/component/reusable/AmbientBackground";
import FAQItem from "@/component/ui/FAQItem";

export default function SupportPage() {
  const faqs = [
    {
      question: "What do I need to get started?",
      answer:
        "All you need is a laptop, an idea, and a few hours. Many founders have launched their site within a single weekend — others take their time perfecting it. Framer is free to start using, and you'll only need a paid plan when you're ready to connect your custom domain and go live.",
    },
    {
      question: "What's included with my purchase?",
      answer:
        "Each purchase gives you instant access to your customizable Framer template, lifetime updates, email support, and a detailed setup guide with step-by-step videos. You'll just need a Framer account and your own custom domain when you're ready to publish.",
    },
    {
      question: "Is this beginner-friendly?",
      answer:
        "Absolutely. Your website is already 90% done — all you have to do is plug in your content, change the images, and publish. Even if you've never used Framer before, the editor is visual and intuitive, and I've included resources to help you get comfortable fast.",
    },
    {
      question: "How do I start using the template?",
      answer:
        "Once you buy a template, you'll get a private link to duplicate it directly into your Framer account. From there, you can edit everything — text, colors, images, and sections — right inside the Framer editor.",
    },
    {
      question: "Do I get updates or support after purchase?",
      answer:
        "Yes! You'll receive lifetime updates for your template plus direct email support for any setup-related questions. I also send out occasional improvements and new features to keep your site performing at its best.",
    },
    {
      question: "Can I use the same template for multiple websites?",
      answer:
        "Each license is valid for one website or client project. If you'd like to reuse the template for multiple brands or clients, then select Extended License at checkout.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Because these are digital products, all sales are final. However, if you run into any technical issue or something doesn't work as expected, reach out and I'll make sure it's resolved quickly.",
    },
  ];

  return (
    <main className="min-h-screen  flex flex-col items-center w-full">
      <section className="relative w-full flex flex-col ">
        <AmbientBackground
          fadeDirection="bottom"
          heightClass="h-[200vh]"
          positionClassName="top-30 left-0"
          scaleClass="scale-[1.5]"
          rotationClass="rotate-[45deg]"
        />
        <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121]">
          <div className="flex flex-col items-center pt-[180px] pb-[80px] px-[40px] text-center gap-[32px]">
            <Badge
              text="SUPPORT"
              className="bg-[#1a1a1a] border border-white/5 text-gray-300"
            />

            <SectionHeader
              as="h1"
              align="center"
              titleClassName="text-5xl md:text-[5.5rem] font-serif leading-[1.1] text-white tracking-tight"
              title={"Here to help\nwhen you need"}
              description={
                "Do you have any trouble or questions? Check out the\nFAQs below or scroll a little further to contact me directly"
              }
              className="max-w-2xl mx-auto mb-0"
            />
          </div>
          <div className="w-full border-t border-[#212121]">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </SectionWrapper>
        <div className="w-full border-b border-[#212121] relative z-10" />
      </section>
    </main>
  );
}
