import React from "react";
import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import AnimatedButton from "@/component/reusable/animation/AnimatedButton";
// Sesuaikan path import ini dengan letak komponen AutoplayVideo Anda
import AutoplayVideo from "@/component/reusable/AutoPlayVideo";

export default function FounderSection() {
  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <SectionWrapper className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#212121] border-x border-[#212121]">
        <div className="relative w-full md:min-h-[774px] bg-[#050505] overflow-hidden">
          <AutoplayVideo
            src="https://framerusercontent.com/assets/UhHrKhcrhV3BqnKIX98HSwfDds.mp4"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-grow justify-center pt-20 pb-10 pl-8 gap-[32px]">
            <Badge
              text="FOUNDER"
              className="bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] border-white/5 text-gray-400 self-start"
            />

            <SectionHeader
              as="h3"
              align="left"
              titleClassName="text-4xl md:text-[3.5rem] font-serif"
              title={"Hey, I'm *Ramish*\n*Designer* & *Creator*"}
              className="mb-0 !gap-6"
            />

            <div className="flex flex-col gap-3 text-[15px] md:text-base text-gray-400 leading-relaxed">
              <p>
                When I started my business, I realised speed was everything.
                Getting a website live meant getting customers through the door.
              </p>
              <p>
                Luckily, I knew how to design and build sites, so what could
                have taken weeks only took me hours.
              </p>
              <p>
                That first week, I had my website live, and sales rolling in.
              </p>
              <p>
                Now, I'm sharing my unfair advantage with other creative
                entrepreneurs so they can do the same.
              </p>
              <p>Launch faster without the cost or complexity.</p>
            </div>
          </div>

          {/* Area Statistik (Grid 2x2) */}
          <div className="grid grid-cols-2 border-t border-[#212121]">
            <div className="border-r border-b border-[#212121] py-10 gap-3 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-serif text-white">6+</h3>
              <p className="text-sm text-gray-400">Years building sites</p>
            </div>
            <div className="border-b border-[#212121] py-10 gap-3 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-serif text-white">
                100+
              </h3>
              <p className="text-sm text-gray-400">Websites made</p>
            </div>
            <div className="border-r border-[#212121] py-10 gap-3 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-serif text-white">
                $100k
              </h3>
              <p className="text-sm text-gray-400">Revenue made in Framer</p>
            </div>
            <div className="py-10 gap-3 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-serif text-white">
                2k+
              </h3>
              <p className="text-sm text-gray-400">Customers worldwide</p>
            </div>
          </div>

          {/* Tombol CTA di paling bawah */}
          <div className="w-full border-t border-[#212121]">
            <AnimatedButton
              title="Book a call with me &rarr;"
              className="w-full bg-white hover:bg-gray-200 text-black py-6 !rounded-none text-base md:text-lg font-semibold transition-colors flex justify-center items-center"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Border Penutup Section (Sesuai Template) */}
      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
