"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Scroll3DTiltProps {
  children: ReactNode;
  className?: string;
}

export default function Scroll3DTilt({
  children,
  className = "",
}: Scroll3DTiltProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <div
      ref={containerRef}
      className={`w-full relative ${className}`}
      style={{ perspective: "1200px" }}>
      <motion.div
        style={{
          rotateX,
          opacity: 1,
          scale,
          transformStyle: "preserve-3d",
          transformOrigin: "top center",
        }}
        className="w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
