"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useRef } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (dotRef.current) {
        gsap.to(dotRef.current, {
          x: e.clientX - 8,
          y: e.clientY - 8,
          duration: 0.15,
          ease: "power2.out",
        });
      }
      if (ringRef.current) {
        gsap.to(ringRef.current, {
          x: e.clientX - 16,
          y: e.clientY - 16,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (dotRef.current) {
      gsap.to(dotRef.current, {
        scale: isHovering ? 1.5 : 1,
        duration: 0.2,
      });
    }
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        scale: isHovering ? 1.5 : 1,
        duration: 0.2,
      });
    }
  }, [isHovering]);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-50 mix-blend-difference"
      />
    </>
  );
}
