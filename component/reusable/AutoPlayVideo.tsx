"use client";

import { useEffect, useRef, useState } from "react";

interface AutoPlayVideoProps {
  src: string;
  className?: string;
  videoClassName?: string;
  threshold?: number;
}

export default function AutoPlayVideo({
  src,
  className,
  videoClassName = "w-full h-full object-cover",
  threshold = 0.25,
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasLoaded(true);
      },
      { threshold },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasLoaded) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, hasLoaded]);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        src={hasLoaded ? src : undefined}
        className={videoClassName}
      />
    </div>
  );
}
