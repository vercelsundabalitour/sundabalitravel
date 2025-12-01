"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useUIStore } from "@/store/uiStore";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const cursorVariant = useUIStore((state) => state.cursorVariant);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile
  if (isMobile) return null;

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: "rgba(10, 77, 60, 0.3)",
      border: "2px solid rgba(10, 77, 60, 0.5)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      height: 80,
      width: 80,
      backgroundColor: "rgba(229, 192, 123, 0.2)",
      border: "2px solid rgba(229, 192, 123, 0.8)",
      mixBlendMode: "difference" as const,
    },
    click: {
      height: 24,
      width: 24,
      backgroundColor: "rgba(10, 77, 60, 0.8)",
      border: "2px solid rgba(10, 77, 60, 1)",
      mixBlendMode: "difference" as const,
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        animate={{
          scale: cursorVariant === "click" ? 0 : 1,
        }}
      />
    </>
  );
}
