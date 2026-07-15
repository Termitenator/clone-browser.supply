import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import AnimatedButton from "@/component/reusable/animation/AnimatedButton";
import AutoplayVideo from "@/component/reusable/AutoPlayVideo";

export default function CustomerSuccessSection() {
  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <SectionWrapper className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#212121] border-x border-[#212121]">
        <div className="flex flex-col justify-center h-full pl-[40px] pr-[40px] py-[60px] md:py-[80px] gap-[32px]">
          <Badge
            text="CUSTOMER SUCCESS"
            className="bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] border-white/5 text-gray-400 self-start"
          />

          <div className="flex flex-col gap-3">
            <SectionHeader
              as="h2"
              align="left"
              titleClassName="text-4xl md:text-[3.5rem] leading-tight"
              title={
                "M*a*tt lau*n*ched h*i*s ne*w*\nw*e*bs*i*te i*n* j*u*st 1 ho*u*r"
              }
              description=""
              className="mb-0"
            />

            <div className="flex flex-col gap-5 text-gray-400 text-sm leading-relaxed pr-4 md:pr-10">
              <p>
                From burning out on 12-hour gym shifts to running <br /> his own
                online coaching business, on his own terms.
              </p>
              <p>
                Matt had tried the agency route before. Thousands of <br />{" "}
                dollars later, he had a terrible site and zero control over it.
              </p>
              <p>
                I showed him the right template. We sat in a café, <br /> he
                made the edits himself, and launched in 1 hour.
              </p>
            </div>

            <div className="border-l-2 border-white pl-5 my-2">
              <p className="text-gray-300 text-sm leading-relaxed pr-4">
                No design skills. No coding. Barely any laptop experience.
                Didn't need any.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-2 w-full">
            <AnimatedButton
              title="View template Matt used"
              href="/template"
              className="w-full md:w-auto flex justify-center bg-white hover:bg-gray-200 text-black px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors"
            />
            <AnimatedButton
              title="View other customers' sites"
              href="/live-example"
              className="w-full md:w-auto flex justify-center bg-[#1a1a1a] hover:bg-[#252525] text-white border border-white/5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors"
            />
          </div>
        </div>

        <div className="relative w-full min-h-[400px] md:min-h-[774px] bg-[#050505] overflow-hidden">
          <AutoplayVideo
            src="https://framerusercontent.com/assets/AaTTiVz5ijj8cnTBnwbSPydb0.mp4"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
