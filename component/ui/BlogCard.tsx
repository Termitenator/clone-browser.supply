"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  link: string;
}

export default function BlogCard({
  image,
  category,
  date,
  title,
  link,
}: BlogCardProps) {
  return (
    <Link
      href={link}
      className="flex flex-col group hover:bg-white/[0.02] transition-colors border-b border-[#212121] md:border-r md:[&:nth-child(2n)]:border-r-0">
      <div className="w-full aspect-[16/10] relative overflow-hidden bg-[#111]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="flex flex-col p-8 md:p-10 border-t border-[#212121]">
        <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
          <span>{category}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>{date}</span>
        </div>

        <h3 className="text-2xl md:text-[1.75rem] font-serif text-white leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
}
