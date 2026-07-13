import SectionWrapper from "@/component/reusable/SectionWrapper";
import AnimatedButton from "@/component/reusable/animation/AnimatedButton";
import AmbientBackground from "@/component/reusable/AmbientBackground";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";

export default function HeroSection() {
  return (
    <>
      <AmbientBackground />
      <SectionWrapper className="relative z-10 pt-40 pb-20 px-10 flex flex-col items-center border-x border-[#212121]">
        <div className="w-full flex flex-col items-center text-center">
          <Badge
            text="Framer Templates"
            className="mb-8"
            icon={
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 0L24 12H12V24L0 12H12V0Z" />
              </svg>
            }
          />

          {/* Typography */}
          <SectionHeader
            as="h1"
            align="center"
            title={"Webs*i*te te*m*pla*t*es\nd*e*si*g*n*e*d to co*n*ve*r*t"}
            description={
              "Launch your online business today using an easy-to-customize Framer\nwebsite template without writing a single line of code."
            }
          />

          <AnimatedButton
            title="Browse templates"
            className="bg-white hover:bg-gray-200 text-black px-7 py-4 rounded-xl text-base"
          />
        </div>
      </SectionWrapper>
      <div className="w-full border-b border-[#212121] relative z-10" />
    </>
  );
}
