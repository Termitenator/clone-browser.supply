import SectionWrapper from "@/component/reusable/SectionWrapper";

export default function StatsSection() {
  const stats = [
    { number: "6+", label: "Years building sites" },
    { number: "2,000+", label: "Templates sold" },
    { number: "5/5", label: "Template rating" },
  ];

  return (
    <>
      <SectionWrapper className="relative z-10 border-x border-[#212121]">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-12 text-center ${
                index === 0
                  ? "col-span-1 order-1 border-b border-r border-[#212121] md:border-b-0"
                  : index === 1
                    ? "col-span-2 order-3 md:col-span-1 md:order-2 md:border-r border-[#212121]"
                    : "col-span-1 order-2 border-b border-[#212121] md:border-b-0"
              }`}>
              <h3 className="text-5xl md:text-[2.8rem] font-serif text-white mb-4">
                {stat.number}
              </h3>
              <p className="text-[#a3a3a3] text-[15px] md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </>
  );
}
