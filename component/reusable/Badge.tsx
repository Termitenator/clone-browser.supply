import { ReactNode } from "react";

interface BadgeProps {
  text: string;
  icon?: ReactNode;
  className?: string;
}

export default function Badge({ text, icon, className = "" }: BadgeProps) {
  return (
    <div
      className={`inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-sm border border-white/10 text-[11px] font-semibold tracking-wider text-gray-200 uppercase backdrop-blur-sm ${className}`}>
      {icon && (
        <span className="flex items-center justify-center w-3 h-3">{icon}</span>
      )}
      <span>{text}</span>
    </div>
  );
}
