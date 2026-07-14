import React from "react";
import AnimatedButton from "@/component/reusable/animation/AnimatedButton";
import AmbientBackground from "@/component/reusable/AmbientBackground"; // sesuaikan path

export interface PricingFeature {
  Icon:
    | React.ElementType
    | ((props: React.SVGProps<SVGSVGElement>) => React.ReactNode);
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonClassName: string;
  containerClassName: string;
  showAmbientBackground?: boolean;
}

export default function PricingCard({
  title,
  price,
  originalPrice,
  description,
  features,
  buttonText,
  buttonClassName,
  containerClassName,
  showAmbientBackground = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between h-full min-h-[450px] p-[20px] overflow-hidden ${containerClassName}`}>
      {showAmbientBackground && (
        <AmbientBackground
          heightClass="h-full"
          positionClassName="top-0 left-0"
          fadeDirection="bottom"
        />
      )}
      <div className="relative z-10 flex flex-col gap-[36px]">
        <div className="flex flex-col gap-8">
          <p className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
            ONE-TIME PAYMENT
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-5xl font-serif font-medium text-white leading-snug">
                {title}
              </h3>

              <div className="flex items-center gap-3">
                <p className="text-5xl font-serif text-white">{price}</p>
                {originalPrice && (
                  <p className="text-2xl font-medium font-serif text-gray-500 line-through">
                    {originalPrice}
                  </p>
                )}
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-gray-400 text-sm leading-relaxed mt-4">
          <p className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
            INCLUDED:
          </p>
          <ul className="flex flex-col gap-5">
            {features.map((feature, idx) => {
              const IconComponent = feature.Icon;
              return (
                <li key={idx} className="flex items-center gap-4 text-[15px]">
                  <IconComponent
                    className="w-5 h-5 text-gray-300 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-gray-300">{feature.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative z-10">
        <AnimatedButton
          title={buttonText}
          className={`mt-[48px] py-4 rounded-xl text-[15px] font-semibold transition-colors w-full text-center flex justify-center ${buttonClassName}`}
        />
      </div>
    </div>
  );
}
