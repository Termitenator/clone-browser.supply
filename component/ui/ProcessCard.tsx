import React from "react";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  bgNode: React.ReactNode; // Menerima elemen UI utuh, bukan cuma URL teks
}

export default function ProcessCard({
  step,
  title,
  description,
  bgNode,
}: ProcessCardProps) {
  return (
    <div className="relative flex flex-col p-[40px] h-full min-h-[450px] md:min-h-[550px] overflow-hidden group">
      {/* Background Layer (Flexible) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {bgNode}
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
      <div className="relative z-20 flex flex-col gap-3">
        <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase mb-2">
          {step}
        </p>
        <h3 className="text-3xl font-serif text-white leading-snug">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed pr-4">
          {description}
        </p>
      </div>
    </div>
  );
}
