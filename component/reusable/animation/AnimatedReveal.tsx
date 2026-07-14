"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedReveal({
  children,
  className,
}: AnimatedRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}>
      {children}
    </motion.div>
  );
}
