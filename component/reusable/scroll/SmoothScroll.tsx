"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // State untuk konfigurasi physics, default ke desktop
  const [springConfig, setSpringConfig] = useState({
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setSpringConfig(
        isMobileView
          ? { mass: 0.05, stiffness: 300, damping: 30 }
          : { mass: 0.1, stiffness: 100, damping: 20 },
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      setContentHeight(entries[0].contentRect.height);
    });

    resizeObserver.observe(contentRef.current);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollY } = useScroll();

  const smoothProgress = useSpring(scrollY, {
    ...springConfig,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => -value);

  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full flex flex-col will-change-transform">
        {children}
      </motion.div>
    </>
  );
}
