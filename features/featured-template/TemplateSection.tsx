import SectionWrapper from "@/component/reusable/SectionWrapper";
import TemplateHeader from "@/component/ui/FeatureHeader";
import TemplateCard from "@/component/ui/FeatureCard";
import { getTemplates } from "@/lib/queries/template";

export default async function FeatureTemplates() {
  const templates = await getTemplates({ limit: 3 });

  return (
    <section className="relative w-full flex flex-col">
      <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121]">
        <TemplateHeader />
        <div className="w-full border-t border-[#212121]" />

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#212121]">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.name}
              category={template.category}
              price={`$${template.price} ${template.currency}`}
              image={template.thumbnailUrl}
              badge={template.badge}
            />
          ))}
        </div>
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
