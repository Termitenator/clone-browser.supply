import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import AnimatedStepOneBg from "@/component/reusable/animation/AnimatedStepOneBg";
import AnimatedButton from "@/component/reusable/animation/AnimatedButton";

export default function QuizSection() {
  return (
    <section className="relative w-full h-[90vh] flex flex-col bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedStepOneBg spread overscanX="-5%" overscanWidth="110%" />
      </div>

      <div className="relative z-100 w-full flex px-[40px] border-x border-[#212121] h-min">
        <div className="relative flex flex-col justify-start w-full pt-[400px] pb-[80px]">
          <div className="flex flex-col gap-6 w-full px-10">
            <Badge
              text="60-SECOND QUIZ"
              className="bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] border-white/5 text-gray-400"
            />

            <SectionHeader
              as="h2"
              align="left"
              titleClassName="text-4xl md:text-[4rem] leading-tight text-white"
              title={"Not sure which\ntemplate is for you?"}
              className="mb-0"
            />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
              <p className="text-gray-300 max-w-md">
                Answer a few short questions and get matched with a website
                template perfect for your business, with{" "}
                <span className="text-white font-medium">30% off</span>.
              </p>

              <AnimatedButton
                title="Take the quiz ->"
                className="bg-white hover:bg-gray-200 text-black px-8 py-4 shadow-lg hover:shadow-xl shrink-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
