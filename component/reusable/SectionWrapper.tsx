import { ReactNode } from "react";
import GlassBlur from "../reusable/GlassBlur";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <>
      <GlassBlur />
      <section className="w-full px-10">
        <div className={`w-full  ${className}`}>{children}</div>
      </section>
    </>
  );
}
