"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedStepOneBg() {
  const images = [
    "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
    "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
    "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
  ];
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden group-hover:scale-105 transition-transform duration-700 [transform:perspective(1200px)] pointer-events-none"
      style={{
        WebkitMaskImage: "linear-gradient(#0000 4%, #000 100%)",
        maskImage: "linear-gradient(#0000 4%, #000 100%)",
      }}>
      <div className="absolute top-[-10%] left-[-15%] w-[150%] h-[150%] flex gap-4 rotate-[16deg]">
        <motion.div
          animate={{ y: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex flex-col gap-4 w-[240px] will-change-transform">
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
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex flex-col gap-4 w-[240px] -translate-y-16 will-change-transform">
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
