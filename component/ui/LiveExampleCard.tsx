"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AutoPlayVideo from "@/component/reusable/AutoPlayVideo";

interface LiveExampleCardProps {
  videoSrc: string;
  link: string;
  avatar: string;
  name: string;
  templateName: string;
  templateThumb: string;
}

export default function LiveExampleCard({
  videoSrc,
  link,
  avatar,
  name,
  templateName,
  templateThumb,
}: LiveExampleCardProps) {
  return (
    <Link
      href={link}
      className="flex flex-col p-10 cursor-pointer group hover:bg-white/[0.02] transition-colors h-full border-b border-[#212121] md:border-r md:[&:nth-child(2n)]:border-r-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-full aspect-[4/3] relative rounded-lg overflow-hidden border border-white/5 bg-[#111] mb-8">
        <AutoPlayVideo
          src={videoSrc}
          className="absolute inset-0 w-full h-full"
          videoClassName="w-full h-full object-cover"
        />
      </motion.div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-[#111]">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <h3 className="text-2xl font-serif text-white">{name}</h3>
      </div>

      <div className="flex items-center gap-3 mt-auto pt-6">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
          TEMPLATE USED:
        </span>
        <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded border border-white/5">
          <div className="relative w-6 h-6 rounded overflow-hidden bg-[#111]">
            <Image
              src={templateThumb}
              alt={templateName}
              fill
              className="object-cover"
              sizes="24px"
            />
          </div>
          <span className="text-[12px] font-medium text-white">
            {templateName}
          </span>
        </div>
      </div>
    </Link>
  );
}
