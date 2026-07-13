import BenefitCardEditor from "./BenefitCardEditor";
("./BenefitCardEditor");
import BenefitCardConversion from "./BenefitCardConversion";
import BenefitCardTutorial from "./BenefitCardTutorial";

interface BenefitCardProps {
  logos: string[];
}

export default function BenefitCard({ logos }: BenefitCardProps) {
  return (
    <div className="w-full h-[432px] border-t border-[#212121] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#212121]">
      <BenefitCardEditor />
      <BenefitCardConversion logos={logos} />
      <BenefitCardTutorial />
    </div>
  );
}
