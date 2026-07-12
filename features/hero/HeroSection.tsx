import SectionWrapper from "@/component/reusable/SectionWrapper";
import AnimatedButton from "@/component/reusable/AnimatedButton";
import Image from "next/image";
import AmbientBackground from "@/component/reusable/AmbientBackground";

export default function HeroSection() {
  return (
    <>
      <AmbientBackground />

      {/* KONTEN HERO SECTION (relative z-10 agar berada di ATAS background) */}
      <SectionWrapper className="relative z-10 pt-40 pb-20 px-10 flex flex-col items-center border-x border-[#212121] max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/20 text-[11px] font-semibold tracking-wider text-gray-200 uppercase">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 0L24 12H12V24L0 12H12V0Z" />
            </svg>
            Framer Templates
          </div>

          {/* Typography */}
          <h1 className="text-5xl md:text-[5.5rem] leading-[1.1] font-serif font-medium text-white mb-2 tracking-tight">
            Webs<span className="italic font-normal">i</span>te te
            <span className="italic font-normal">m</span>pla
            <span className="italic font-normal">t</span>es
          </h1>

          <h1 className="text-5xl md:text-[5.5rem] leading-[1.1] font-serif font-medium text-white mb-8 tracking-tight">
            d<span className="italic font-normal">e</span>si
            <span className="italic font-normal">g</span>n
            <span className="italic font-normal">e</span>d to co
            <span className="italic font-normal">n</span>ve
            <span className="italic font-normal">r</span>t
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-white mb-10 leading-relaxed">
            Launch your online business today using an easy-to-customize Framer
            website template without writing a single line of code.
          </p>

          <AnimatedButton
            title="Browse templates"
            className="bg-white hover:bg-gray-200 text-black px-7 py-4 rounded-xl text-base"
          />
        </div>
      </SectionWrapper>
    </>
  );
}
