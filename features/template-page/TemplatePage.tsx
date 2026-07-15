import Link from "next/link";
import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import AmbientBackground from "@/component/reusable/AmbientBackground";
import TemplateCard from "@/component/ui/FeatureCard";
import { getTemplates } from "@/lib/queries/template";

export default async function TemplatesPage() {
  const templates = await getTemplates();

  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <section className="relative w-full flex flex-col">
        <AmbientBackground
          flip={false}
          fadeDirection="bottom"
          heightClass="h-[120vh]"
          positionClassName="top-0 left-0"
          scaleClass="scale-[1.5]"
        />
        <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121]">
          <div className="flex flex-col items-center pt-[180px] pb-[80px] px-[40px] text-center gap-[32px]">
            <Badge
              text="FRAMER TEMPLATES"
              className="bg-[#1a1a1a] border border-white/5 text-gray-300"
            />
            <SectionHeader
              as="h1"
              align="center"
              titleClassName="text-5xl md:text-[5.5rem] font-serif leading-[1.1] text-white tracking-tight"
              title={"Browse premium\nwebsite templates"}
              description={
                "View our collection of premium Framer templates\nand launch your website in hours, not months."
              }
              className="max-w-3xl mx-auto mb-0"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#212121] border-t border-[#212121]">
            {templates.map((template) => (
              <Link
                key={template.id}
                href={`/templates/${template.id}`}
                className="block">
                <TemplateCard
                  title={template.name}
                  category={template.category}
                  price={`$${template.price} ${template.currency}`}
                  image={template.thumbnailUrl}
                  badge={template.badge}
                />
              </Link>
            ))}
          </div>
        </SectionWrapper>
        <div className="w-full border-b border-[#212121] relative z-10" />
      </section>
    </main>
  );
}
