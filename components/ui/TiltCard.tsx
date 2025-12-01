"use client";

import { useRef, useEffect, ReactNode } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  options?: {
    max?: number;
    speed?: number;
    glare?: boolean;
    "max-glare"?: number;
    scale?: number;
  };
}

export default function TiltCard({
  children,
  className = "",
  options = {},
}: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.02,
        ...options,
      });
    }

    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}
