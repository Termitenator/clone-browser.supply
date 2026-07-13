import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  title,
  description,
  as: Tag = "h2",
  align = "center",
  className = "",
  titleClassName = "text-5xl md:text-[5.5rem]",
}: SectionHeaderProps) {
  const renderTitle = (text: string): React.ReactNode => {
    return text.split("\n").map((line, lineIndex) => {
      return (
        <span key={lineIndex} className="block mb-2 last:mb-0">
          {line.split("*").map((part, partIndex) => {
            if (partIndex % 2 === 1) {
              return (
                <span key={partIndex} className="italic font-normal">
                  {part}
                </span>
              );
            } else {
              return part;
            }
          })}
        </span>
      );
    });
  };

  return (
    <div
      className={`flex flex-col w-full ${
        align === "center"
          ? "items-center text-center"
          : "items-start text-left"
      } ${className}`}>
      <Tag
        className={`${titleClassName} leading-[1.1] font-sans font-medium text-white mb-6 tracking-tight`}>
        {renderTitle(title)}
      </Tag>

      {description && (
        <p
          className={`max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed whitespace-pre-line ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
