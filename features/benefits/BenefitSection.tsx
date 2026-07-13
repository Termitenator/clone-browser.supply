import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import { logos } from "./data/logo";
import BenefitCard from "./component/BenefitCard";
import AmbientBackground from "@/component/reusable/AmbientBackground";

export default function BenefitsSection() {
  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <AmbientBackground
        flip={false}
        fadeDirection="top"
        heightClass="h-[160vh]" // dari h-[100vh] → lebih panjang total
        positionClassName="-top-[100vh] left-0" // dari -top-[35vh] → naik lebih tinggi, nembus ke card row atas
        objectPosition="object-[80%_70%]"
      />

      <SectionWrapper className="relative z-10 w-full flex flex-col gap-[40px] border-x border-[#212121]">
        <div className="flex flex-col items-center pt-[80px] px-[40px] text-center gap-[32px]">
          <Badge text="BENEFITS" />

          <SectionHeader
            as="h2"
            align="center"
            titleClassName="text-4xl md:text-[4rem]"
            title={
              "P*r*ofess*i*o*n*al we*b*si*t*e,\nli*v*e be*f*o*r*e t*h*e w*ee*ke*n*d"
            }
            description={
              "Go live with a website that's premium just like your\nbusiness. No code, no budget, just a few hours."
            }
          />
        </div>

        <BenefitCard logos={logos} />
      </SectionWrapper>

      {/* Garis batas penutup bawah section yang menembus layar */}
      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
