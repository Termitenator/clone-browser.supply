"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CreatorBadge() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] text-gray-500">Created by</span>

      {/* Animasi rotasi (swing) berulang pada Avatar */}
      <motion.div
        animate={{
          // Kemiringan diperbesar ke -12 derajat (kiri) dan 12 derajat (kanan)
          rotate: [-12, 12, -12],
        }}
        transition={{
          duration: 3, // Sedikit dipercepat menjadi 3 detik agar ayunan lebih pas
          repeat: Infinity, // Mengulang terus-menerus
          ease: "easeInOut", // Pergerakan halus saat berbalik arah
        }}
        className="relative w-8 h-8 rounded-lg overflow-hidden bg-neutral-800">
        <Image
          src="https://i.pravatar.cc/150?u=ramish" // Ganti dengan URL gambar asli
          alt="Ramish Aziz"
          fill
          className="object-cover"
        />
      </motion.div>

      <span className="text-[13px] text-gray-400">Ramish Aziz</span>
    </div>
  );
}
