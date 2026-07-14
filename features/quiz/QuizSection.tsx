import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import AnimatedStepOneBg from "@/component/reusable/animation/AnimatedStepOneBg";
import AnimatedButton from "@/component/reusable/animation/AnimatedButton";

export default function QuizSection() {
  return (
    <section className="relative w-full min-h-[100svh] md:min-h-0 md:h-[90vh] flex flex-col bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="block md:hidden absolute inset-0">
          <AnimatedStepOneBg spread overscanX="-35%" overscanWidth="170%" />
        </div>

        <div className="hidden md:block absolute inset-0">
          <AnimatedStepOneBg spread overscanX="-15%" overscanWidth="150%" />
        </div>
      </div>
      <div className="relative z-10 w-full flex-1 flex flex-col justify-end md:justify-start md:flex-row md:px-[40px] border-x border-[#212121]">
        <div className="relative flex flex-col w-full max-w-[400px] md:max-w-none mx-auto md:mx-0 pt-[240px] pr-[20px] pb-[40px] pl-[12px] md:pt-[400px] md:pb-[80px] md:px-10">
          <div className="flex flex-col gap-6 w-full">
            <Badge
              text="60-SECOND QUIZ"
              className="bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] border-white/5 text-gray-400 self-start"
            />

            <SectionHeader
              as="h2"
              align="left"
              titleClassName="text-4xl md:text-[4rem] leading-tight text-white"
              title={"Not sure which\ntemplate is for you?"}
              className="mb-0"
            />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
              <p className="text-gray-300 max-w-md text-[15px] md:text-base leading-relaxed">
                Answer a few short questions and get matched with a website
                template perfect for your business, with{" "}
                <span className="text-white font-medium">30% off</span>.
              </p>

              <AnimatedButton
                title="Take the quiz ->"
                className="w-full md:w-auto flex justify-center bg-white hover:bg-gray-200 text-black px-8 py-4 shadow-lg hover:shadow-xl shrink-0 rounded-xl font-semibold transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
