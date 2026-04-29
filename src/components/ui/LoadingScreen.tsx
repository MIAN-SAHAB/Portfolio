"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (spinnerRef.current) {
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "linear",
      });
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
      );
    }

    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => setLoading(false),
        });
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      tl.kill();
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
    >
      <div className="relative flex flex-col items-center">
        <div
          ref={spinnerRef}
          className="w-24 h-24 border-t-2 border-primary border-r-2 border-transparent rounded-full"
        />
        <div
          ref={textRef}
          className="mt-6 text-xl tracking-widest text-primary font-mono neon-text"
        >
          INITIALIZING...
        </div>
      </div>
    </div>
  );
}
