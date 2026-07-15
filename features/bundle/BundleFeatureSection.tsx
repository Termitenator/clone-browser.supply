import SectionWrapper from "@/component/reusable/SectionWrapper";

export default function BundleFeaturesSection() {
  const features = [
    {
      title: "All current templates",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white/90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: "All future templates",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white/90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Use on unlimited sites",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white/90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" />
        </svg>
      ),
    },
    {
      title: "Priority support",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white/90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            let borderClasses = "";
            if (index === 0)
              borderClasses = "border-b md:border-r lg:border-b-0";
            if (index === 1)
              borderClasses = "border-b lg:border-b-0 lg:border-r";
            if (index === 2)
              borderClasses = "border-b md:border-b-0 md:border-r lg:border-r";

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-10 lg:py-16 gap-6 hover:bg-white/[0.02] transition-colors cursor-pointer border-[#212121] ${borderClasses}`}>
                <div className="flex items-center justify-center">
                  {feature.icon}
                </div>

                <p className="text-[14px] text-gray-400 text-center font-medium">
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
