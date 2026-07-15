import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/component/reusable/SectionWrapper";
import AmbientBackground from "@/component/reusable/AmbientBackground";
import { Template } from "@/types/template";

interface TemplateDetailHeroProps {
  template: Template;
}

export default function TemplateDetailHero({
  template,
}: TemplateDetailHeroProps) {
  const {
    name,
    price,
    currency,
    badge,
    headline,
    description,
    quote,
    thumbnailUrl,
    demoUrl,
    purchaseUrl,
  } = template;

  return (
    <section className="relative w-full flex flex-col bg-[#0a0a0a]">
      <AmbientBackground
        flip={false}
        fadeDirection="bottom"
        heightClass="h-[120vh]"
        positionClassName="top-0 left-0"
        scaleClass="scale-[1.2]"
      />

      <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121]">
        <div className="w-full flex items-center px-6 md:px-10 pt-[120px] pb-6 md:pt-[140px] border-b border-[#212121]">
          <nav className="flex items-center gap-3 text-[13px] font-medium text-white">
            <Link href="/" className="transition-colors">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/templates" className="transition-colors">
              Templates
            </Link>
            <span>&gt;</span>
            <span className="text-gray-300">{name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#212121] border-b border-[#212121]">
          <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 relative">
            <div className="w-full aspect-video md:aspect-[4/3] lg:aspect-auto lg:h-[450px] relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#111]">
              <Image
                src={thumbnailUrl}
                alt={`${name} Template Mockup`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400">
                {name}
              </span>
              {badge && (
                <span
                  className={
                    badge === "NEW"
                      ? "text-[10px] font-bold tracking-wider uppercase bg-green-900/30 text-green-400 px-2 py-1 rounded border border-green-500/20"
                      : "text-[10px] font-bold tracking-wider uppercase bg-blue-900/30 text-blue-400 px-2 py-1 rounded border border-blue-500/20"
                  }>
                  {badge}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.1] text-white tracking-tight mb-4">
              {headline}
            </h1>

            <p className="text-2xl md:text-3xl font-serif text-white mb-6">
              ${price} {currency}
            </p>

            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
              {description}
            </p>

            <div className="border-l-2 border-white pl-4 py-1 mb-10">
              <p className="text-gray-300 text-[15px]">{quote}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {purchaseUrl && (
                <Link
                  href={purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-semibold transition-colors flex justify-center items-center">
                  Buy template
                </Link>
              )}
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#1a1a1a] hover:bg-[#222] text-white border border-white/10 px-8 py-4 rounded-lg font-semibold transition-colors flex justify-center items-center">
                View demo
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#212121]">
          <div className="flex flex-col items-center justify-center p-10 text-center">
            <span className="text-4xl md:text-5xl font-serif text-white mb-3">
              12
            </span>
            <span className="text-[14px] text-gray-400">
              Professionally designed pages
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-10 text-center">
            <span className="text-4xl md:text-5xl font-serif text-white mb-3">
              4
            </span>
            <span className="text-[14px] text-gray-400">CMS collections</span>
          </div>
          <div className="flex flex-col items-center justify-center p-10 text-center">
            <span className="text-4xl md:text-5xl font-serif text-white mb-3">
              10
            </span>
            <span className="text-[14px] text-gray-400">
              Guided video tutorials
            </span>
          </div>
        </div>
      </SectionWrapper>

      <div className="w-full border-b border-[#212121] relative z-10" />
    </section>
  );
}
