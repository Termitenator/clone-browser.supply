"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TemplateCardProps {
  title: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
}

export default function TemplateCard({
  title,
  category,
  price,
  image,
  isNew = false,
}: TemplateCardProps) {
  return (
    <div className="flex flex-col p-10 cursor-pointer group hover:bg-white/[0.02] transition-colors">
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-full aspect-[4/3] relative mb-8 rounded-lg overflow-hidden border border-white/5 bg-[#111]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
        />
      </motion.div>

      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-2xl font-serif text-white">{title}</h3>
        {isNew && (
          <span className="text-[10px] font-bold tracking-wider uppercase bg-green-900/30 text-green-400 px-2 py-1 rounded border border-green-500/20">
            NEW
          </span>
        )}
      </div>

      {/* Meta (Kategori & Harga) */}
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-3">
        {category}
        <span className="text-gray-600">•</span>
        {price}
      </p>
    </div>
  );
}
