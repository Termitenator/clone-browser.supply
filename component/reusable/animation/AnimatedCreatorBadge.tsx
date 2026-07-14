"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CreatorBadge() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] text-gray-500">Created by</span>

      <motion.div
        animate={{
          rotate: [-12, 12, -12],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-8 h-8 rounded-lg overflow-hidden bg-neutral-800">
        <Image
          src="https://i.pravatar.cc/150?u=ramish"
          alt="Ramish Aziz"
          fill
          className="object-cover"
        />
      </motion.div>

      <span className="text-[13px] text-gray-400">Ramish Aziz</span>
    </div>
  );
}
