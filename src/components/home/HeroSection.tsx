"use client";

import { ArrowRight } from "lucide-react";
import { useModals } from "@/components/layout/LayoutClient";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const { openHireMe, openContact } = useModals();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 text-center">
        <div ref={containerRef}>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm tracking-wider">
            HELLO, WORLD
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight">
            I&apos;M <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent neon-text">M. HAMZA DANIYAL</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-3xl mx-auto">
            Senior Full-Stack Developer shaping the future of web architecture. Expert in PHP, React, Next.js, and scaling high-performance applications since 2018.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={openHireMe}
              className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 neon-border"
            >
              Hire Me <ArrowRight size={20} />
            </button>

            <Link
              href="/projects"
              className="px-8 py-4 glass border border-white/20 hover:bg-white/10 text-white font-medium rounded-full transition-all flex items-center gap-2"
            >
              View Projects
            </Link>

            <button
              onClick={openContact}
              className="px-8 py-4 text-gray-300 hover:text-white transition-colors flex items-center gap-2 font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
