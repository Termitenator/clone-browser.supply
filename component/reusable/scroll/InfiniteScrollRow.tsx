"use client";

import { motion } from "framer-motion";
import TestimonialCard, {
  TestimonialType,
} from "@/component/ui/TestimonialCard";

interface InfiniteScrollRowProps {
  items: TestimonialType[];
  direction?: "left" | "right";
  speed?: number;
}

export default function InfiniteScrollRow({
  items,
  direction = "left",
  speed = 40,
}: InfiniteScrollRowProps) {
  const duplicatedItems = [...items, ...items];

  const animateX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="w-full overflow-hidden flex border-b border-[#212121]">
      <motion.div
        className="flex w-max"
        animate={{ x: animateX }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}>
        {duplicatedItems.map((item, index) => (
          <TestimonialCard
            key={`${item.id}-${index}`}
            id={item.id}
            quote={item.quote}
            name={item.name}
            avatar={item.avatar}
          />
        ))}
      </motion.div>
    </div>
  );
}
