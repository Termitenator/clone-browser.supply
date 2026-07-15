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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      setContentHeight(entries[0].contentRect.height);
    });

    resizeObserver.observe(contentRef.current);

    return () => {
      window.removeEventListener("resize", checkMobile);
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollY } = useScroll();

  const smoothProgress = useSpring(scrollY, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => -value);

  if (isMobile) {
    return <div className="w-full flex flex-col">{children}</div>;
  }

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
