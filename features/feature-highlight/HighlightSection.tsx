import React from "react";
import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import AnimatedButton from "@/component/reusable/animation/AnimatedButton";
// Sesuaikan path import ini dengan letak komponen AutoplayVideo Anda
import AutoplayVideo from "@/component/reusable/AutoPlayVideo";

export default function HighlightSection() {
  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <SectionWrapper className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#212121] border-x border-[#212121]">
        <div className="relative w-full md:min-h-[774px] bg-[#050505] overflow-hidden">
          <AutoplayVideo
            src="https://framerusercontent.com/assets/JJOJjt6a4FXkQggD1CfcIrMTQBs.mp4"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center h-full pl-[40px] pr-[40px] py-[40px] md:py-0 gap-[32px]">
          <Badge
            text="FRAMER"
            className="bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] border-white/5 text-gray-400"
          />

          <SectionHeader
            as="h2"
            align="left"
            titleClassName="text-4xl md:text-[3.5rem]"
            title={
              "Po*w*ered b*y* a si*m*p*l*e &\nf*l*e*x*ibl*e* *w*e*b*si*t*e b*u*ilder"
            }
            description={
              "Packed with speed and powerful tools to help your site stand out. Design, personalize, and launch. All in one place with Framer."
            }
            className="mb-0"
          />

          <div className="flex flex-wrap items-center gap-4">
            <AnimatedButton
              title="Browse templates"
              className="bg-white hover:bg-gray-200 text-black px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors"
            />
            <AnimatedButton
              title="Explore Framer"
              className="bg-[#1a1a1a] hover:bg-[#252525] text-white border border-white/5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors"
            />
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
