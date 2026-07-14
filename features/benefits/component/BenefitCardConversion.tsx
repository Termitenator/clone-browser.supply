import { TrendingUp } from "lucide-react";
import { AnimatedLogoGroup } from "@/component/reusable/animation/AnimatedLogo";

interface BenefitCardConversionProps {
  logos: string[];
}

export default function BenefitCardConversion({
  logos,
}: BenefitCardConversionProps) {
  return (
    <div className="flex flex-col h-full divide-y divide-[#212121]">
      <div className="flex flex-col flex-1 justify-center p-[20px] gap-[36px]">
        <AnimatedLogoGroup logos={logos} />

        <div className="flex flex-col gap-[12px]">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <TrendingUp className="h-5 w-5" strokeWidth={2.5} />
            Convert More
          </p>
          <h3 className="text-xl font-medium text-white leading-snug">
            Designed to turn web visitors into customers.
          </h3>
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-center p-[20px] gap-[20px]">
        <h3 className="text-[16px] font-medium text-white leading-relaxed">
          Building a high-quality website <br /> shouldn't cost you a fortune.
        </h3>

        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-2">
            <div className="w-full bg-[#111] rounded-md p-3 border border-white/5">
              <p className="text-white text-sm font-medium">$5,000 - $20,000</p>
            </div>
            <p className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
              Web Designer / Agency
            </p>
          </div>

          {/* Framer */}
          <div className="flex flex-col gap-3">
            <div className="flex relative overflow-hidden w-[142px] bg-[#ffffff4d] rounded-[4px] py-[8px] px-[12px]">
              <p className="text-white text-[12px] font-bold font-sans uppercase">
                Starting at $99
              </p>
            </div>

            <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
              Framer Template
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
