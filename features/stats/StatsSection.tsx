import SectionWrapper from "@/component/reusable/SectionWrapper";

export default function StatsSection() {
  // Data statis untuk mempermudah mapping
  const stats = [
    { number: "6+", label: "Years building sites" },
    { number: "2,000+", label: "Templates sold" },
    { number: "5/5", label: "Template rating" },
  ];

  return (
    <>
      <SectionWrapper className="relative z-10 border-x border-[#212121]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#212121]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-10 text-center">
              {/* Angka Stats (menggunakan font-serif Gambetta) */}
              <h3 className="text-5xl md:text-[2.8rem] font-serif text-white mb-4">
                {stat.number}
              </h3>

              {/* Label Stats */}
              <p className="text-[#a3a3a3] text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Garis horizontal bawah yang menembus layar absolut */}
      <div className="w-full border-b border-[#212121] relative z-10" />
    </>
  );
}
