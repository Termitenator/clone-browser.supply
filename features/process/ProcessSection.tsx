import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import ProcessCard from "@/component/ui/ProcessCard";
import AutoplayVideo from "@/component/reusable/AutoPlayVideo";
import AnimatedStepOneBgServer from "@/component/reusable/animation/AnimatedStepOneBgServer";

export default function ProcessSection() {
  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <SectionWrapper className="relative z-10 w-full flex flex-col gap-[40px] border-x border-[#212121]">
        <div className="flex flex-col items-center pt-[80px] px-[40px] text-center gap-[32px]">
          <Badge
            text="PROCESS"
            className="bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] border-white/5 text-gray-400"
          />
          <SectionHeader
            as="h2"
            align="center"
            titleClassName="text-4xl md:text-[4.5rem]"
            title={"Go li*v*e i*n* ho*u*rs,\nnot *m*ont*h*s"}
            description={
              "Three steps. That's all it takes to get your website online.\nPick a template, add your content, and hit publish."
            }
            className="mb-0"
          />
        </div>

        <div className="w-full border-t border-[#212121] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#212121]">
          <ProcessCard
            step="STEP 1"
            title="Select a template"
            description="Choose from the range of expert-crafted templates."
            bgNode={<AnimatedStepOneBgServer />}
          />
          <ProcessCard
            step="STEP 2"
            title="Make it yours"
            description="Change text, customize colors, and swap images with ease."
            bgNode={
              <AutoplayVideo
                src="https://framerusercontent.com/assets/YSbF8OESHSbh608eBQqp8msHA.mp4"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            }
          />
          <ProcessCard
            step="STEP 3"
            title="Go live instantly"
            description="Launch your site in seconds with just one click. Fast, simple, and code-free."
            bgNode={
              <AutoplayVideo
                src="https://framerusercontent.com/assets/jiZ1xo9EVg3oZV9MN9NY8TLl3E.mp4"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            }
          />
        </div>
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
