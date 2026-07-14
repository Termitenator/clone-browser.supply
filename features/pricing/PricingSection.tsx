import React from "react";
import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import PricingCard, { PricingFeature } from "@/component/ui/PricingCard";

import {
  AppWindow,
  RefreshCw,
  Globe,
  Infinity,
  TvMinimalPlay,
  Headphones,
} from "lucide-react";

const FramerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}>
    <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" />
  </svg>
);

const singleFeatures: PricingFeature[] = [
  { Icon: AppWindow, text: "Instant access to chosen template" },
  { Icon: RefreshCw, text: "Lifetime template updates" },
  { Icon: FramerIcon, text: "3 months Framer Pro" },
  { Icon: TvMinimalPlay, text: "Step-by-step video tutorials" },
];

const bundleFeatures: PricingFeature[] = [
  { Icon: AppWindow, text: "All current templates" },
  { Icon: Globe, text: "Early access to all future templates" },
  { Icon: RefreshCw, text: "Lifetime template updates" },
  { Icon: Infinity, text: "Use on unlimited sites" },
  { Icon: FramerIcon, text: "3 months Framer Pro" },
  { Icon: TvMinimalPlay, text: "Step-by-step video tutorials" },
  { Icon: Headphones, text: "Priority support" },
];

export default function PricingSection() {
  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <SectionWrapper className="relative z-10 w-full flex flex-col gap-[40px] border-x border-[#212121]">
        <div className="flex flex-col items-center pt-[80px] px-[40px] text-center gap-[32px]">
          <Badge
            text="PRICING"
            className="bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] border-white/5 text-gray-400"
          />
          <SectionHeader
            as="h2"
            align="center"
            titleClassName="text-4xl md:text-[4.5rem]"
            title={"Need one template\nor all of them?"}
            description={
              "Perfect for agencies and freelancers looking to deliver high-quality results at lightning speed."
            }
            className="mb-0"
          />
        </div>
        <div className="w-full border-t border-[#212121] grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#212121]">
          <PricingCard
            title="Single template"
            price="$99"
            description="Choose a template best suited for you."
            features={singleFeatures}
            buttonText="Browse templates"
            containerClassName="bg-gradient-to-br from-[#0e0e0e] to-[#0a0a0a]"
            buttonClassName="bg-[#1a1a1a] hover:bg-[#252525] text-white border border-white/5"
          />

          <PricingCard
            title="Bundle"
            price="$399"
            originalPrice="$1,881"
            description="Every template, unlimited sites. Build however you want."
            features={bundleFeatures}
            buttonText="Get the bundle"
            containerClassName="bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a]/60 to-[#121212]"
            buttonClassName="bg-white hover:bg-gray-200 text-black"
            showAmbientBackground
          />
        </div>
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
