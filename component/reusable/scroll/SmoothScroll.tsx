"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(
      window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window,
    );
  }, []);
  return isTouch;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      setContentHeight(entries[0].contentRect.height);
    });

    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollY } = useScroll();

  const smoothY = useMotionValue(0);
  const displayY = useTransform(smoothY, (v) => -v);

  useAnimationFrame(() => {
    const current = smoothY.get();
    const target = scrollY.get();
    const ease = isTouch ? 1 : 0.12;
    smoothY.set(current + (target - current) * ease);
  });

  if (isTouch) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div
        ref={contentRef}
        style={{
          y: displayY,
          willChange: "transform",
        }}
        className="fixed top-0 left-0 right-0 w-full flex flex-col">
        {children}
      </motion.div>
    </>
  );
}
