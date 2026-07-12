import Image from "next/image";
import React from "react";
import GlassOverlay from "@/component/ui/GlassOverlay";

interface AmbientBackgroundProps {
  /** URL gambar background */
  src?: string;
  /** Alt text untuk gambar */
  alt?: string;
  /** Kelas tinggi untuk container (default: h-[130vh] untuk efek bleed/lewat section) */
  heightClass?: string;
  /** Posisi objek gambar (default: object-[20%_80%]) */
  objectPosition?: string;
  /** Opsional: Apakah gambar ini perlu di-load duluan? (true untuk Hero, false untuk section bawah) */
  priority?: boolean;
}

export default function AmbientBackground({
  src = "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
  alt = "Ambient Glow Background",
  heightClass = "h-[130vh]",
  objectPosition = "object-[20%_80%]",
  priority = false,
}: AmbientBackgroundProps) {
  return (
    <div
      className={`absolute top-0 left-0 w-full ${heightClass} z-0 pointer-events-none`}>
      <div className="absolute inset-0 opacity-100 mix-blend-screen scale-[1.3]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover scale-x-[-1] ${objectPosition}`}
        />
      </div>
      <GlassOverlay />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-white/50 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />
    </div>
  );
}
