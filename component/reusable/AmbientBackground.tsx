import Image from "next/image";
import GlassOverlay from "../ui/GlassOverlay";

interface AmbientBackgroundProps {
  src?: string;
  alt?: string;
  heightClass?: string;
  objectPosition?: string;
  priority?: boolean;
  flip?: boolean;
  fadeDirection?: "top" | "bottom";
  positionClassName?: string;
  scaleClass?: string;
  rotationClass?: string;
}

export default function AmbientBackground({
  src = "https://framerusercontent.com/images/w2WvXCCgVxTOq3pvXBwZjgntU.jpg",
  alt = "Ambient Glow Background",
  heightClass = "h-[130vh]",
  objectPosition = "object-[20%_80%]",
  priority = false,
  flip = true,
  fadeDirection = "bottom",
  positionClassName = "top-0 left-0",
  scaleClass = "scale-[1.3]",
  rotationClass = "",
}: AmbientBackgroundProps) {
  const isBottomFade = fadeDirection === "bottom";

  const maskGradient = isBottomFade
    ? "linear-gradient(to bottom, black 60%, transparent 100%)"
    : "linear-gradient(to top, transparent 0%, black 25%, black 75%, transparent 100%)";

  return (
    <div
      className={`absolute ${positionClassName} w-full ${heightClass} z-0 pointer-events-none`}
      style={{
        maskImage: maskGradient,
        WebkitMaskImage: maskGradient,
      }}>
      <div
        className={`absolute inset-0 opacity-90 mix-blend-screen ${scaleClass} ${rotationClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover saturate-150 contrast-150 brightness-100 ${
            flip ? "scale-x-[-1]" : ""
          } ${objectPosition}`}
        />
      </div>

      <GlassOverlay />

      {isBottomFade ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/40 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-white/20 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </>
      )}
    </div>
  );
}
