import AnimatedButton from "@/component/reusable/animation/AnimatedButton";
import SectionHeader from "../reusable/SectionHeader";

export default function TemplateHeader() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 px-10 pt-20 mb-10">
      <SectionHeader
        as="h2"
        align="left"
        titleClassName="text-4xl md:text-[3.5rem]"
        title={"Pre*m*ium tem*p*lat*e*s\nb*u*ilt to dri*v*e *r*esul*t*s"}
        description={
          "Pick a template, swap in your content, and go live. Your\nbusiness website can be up and running this afternoon."
        }
        className="max-w-xl mb-0"
      />

      <AnimatedButton
        title="View all ->"
        className="bg-white hover:bg-gray-200 text-black px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors"
      />
    </div>
  );
}
