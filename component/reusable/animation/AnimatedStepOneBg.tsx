"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedStepOneBgProps {
  overscanX?: string;
  overscanWidth?: string;
  spread?: boolean;
}

export default function AnimatedStepOneBg({
  overscanX = "-15%",
  overscanWidth = "150%",
  spread = false,
}: AnimatedStepOneBgProps) {
  const images = [
    "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
    "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
    "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
  ];
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{
        WebkitMaskImage: "linear-gradient(#0000 4%, #000 100%)",
        maskImage: "linear-gradient(#0000 4%, #000 100%)",
        perspective: "1200px",
        perspectiveOrigin: "50% 50%",
      }}>
      <div
        className={`absolute top-[-10%] flex rotate-[8deg] md:rotate-[16deg] ${
          spread ? "gap-6" : "gap-4"
        }`}
        style={{
          left: overscanX,
          width: overscanWidth,
          height: "150%",
          transformStyle: "preserve-3d",
          transform:
            "rotate(16deg) rotateX(4deg) md:rotate(16deg) md:rotateX(8deg)",
        }}>
        {/* Konten tetap sama */}
        <motion.div
          animate={{ y: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className={`flex flex-col gap-4 will-change-transform ${
            spread ? "flex-1" : "w-[240px] shrink-0"
          }`}>
          {duplicatedImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full h-[350px] shrink-0 bg-[#111] rounded-xl border border-white/5 overflow-hidden">
              <Image
                src={src}
                alt={`Mockup Left ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className={`flex flex-col gap-4 -translate-y-16 will-change-transform ${
            spread ? "flex-1" : "w-[240px] shrink-0"
          }`}>
          {duplicatedImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full h-[350px] shrink-0 bg-[#111] rounded-xl border border-white/5 overflow-hidden">
              <Image
                src={src}
                alt={`Mockup Right ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
