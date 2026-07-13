"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
  logo: string;
  index: number;
}

export default function AnimatedLogo({ logo, index }: AnimatedLogoProps) {
  const isOdd = index % 2 === 0;

  return (
    <div className="relative flex h-8 w-8 items-center justify-center">
      <motion.div
        animate={{
          scale: isOdd
            ? [1, 1, 0.6875, 0.6875, 1]
            : [0.6875, 0.6875, 1, 1, 0.6875],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          ease: [0.33, 1, 0.68, 1],
          times: [0, 0.2, 0.5, 0.7, 1],
        }}
        className="relative h-full w-full">
        <Image src={logo} alt="" fill className="object-contain rounded-sm" />
      </motion.div>
    </div>
  );
}

/* Wrapper kalau mau langsung render sekumpulan logo */
export function AnimatedLogoGroup({ logos }: { logos: string[] }) {
  return (
    <div className="flex items-center gap-3">
      {logos.map((logo, index) => (
        <AnimatedLogo key={index} logo={logo} index={index} />
      ))}
    </div>
  );
}
