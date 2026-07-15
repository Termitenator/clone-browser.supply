"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(true);
  useEffect(() => {
    const check =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(check);
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
    if (!contentRef.current || isTouch) return;

    const resizeObserver = new ResizeObserver((entries) => {
      setContentHeight(entries[0].contentRect.height);
    });

    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, [isTouch]);

  const { scrollY } = useScroll();

  const smoothProgress = useSpring(scrollY, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => -value);

  if (isTouch) {
    return <div className="w-full flex flex-col">{children}</div>;
  }

  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div
        ref={contentRef}
        style={{ y, willChange: "transform" }}
        className="fixed top-0 left-0 w-full flex flex-col">
        {children}
      </motion.div>
    </>
  );
}
