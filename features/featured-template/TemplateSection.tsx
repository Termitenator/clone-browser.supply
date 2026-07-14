import SectionWrapper from "@/component/reusable/SectionWrapper";
import TemplateHeader from "@/component/ui/FeatureHeader";
import TemplateCard from "@/component/ui/FeatureCard";

export default function FeatureTemplates() {
  const templates = [
    {
      title: "Selene",
      category: "AI SAAS",
      price: "$129 USD",
      image:
        "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
      isNew: true,
    },
    {
      title: "Zenna",
      category: "YOGA STUDIO",
      price: "$129 USD",
      image:
        "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
      isNew: false,
    },
    {
      title: "Traction",
      category: "SMMA",
      price: "$129 USD",
      image:
        "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
      isNew: false,
    },
  ];

  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121]">
        <TemplateHeader />
        <div className="w-full border-t border-[#212121]" />

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#212121]">
          {templates.map((template, index) => (
            <TemplateCard
              key={index}
              title={template.title}
              category={template.category}
              price={template.price}
              image={template.image}
              isNew={template.isNew}
            />
          ))}
        </div>
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
