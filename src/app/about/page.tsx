"use client";


import { Code2, Database, Layout, Server } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(".animate-item");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );
    }
  }, []);

  const strengths = [
    {
      title: "Full-Stack Architecture",
      desc: "Building scalable and robust web applications combining powerful backends with dynamic frontends.",
      icon: <Server size={32} className="text-primary mb-4" />
    },
    {
      title: "CMS Expertise",
      desc: "Deep knowledge of WordPress and custom plugin development to create tailored content management solutions.",
      icon: <Layout size={32} className="text-secondary mb-4" />
    },
    {
      title: "Modern Frontends",
      desc: "Crafting pixel-perfect, highly animated UIs using React, Next.js, and modern CSS frameworks.",
      icon: <Code2 size={32} className="text-accent mb-4" />
    },
    {
      title: "Database Design",
      desc: "Architecting efficient SQL structures to handle complex data relationships and optimize performance.",
      icon: <Database size={32} className="text-primary mb-4" />
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto"
      >
        <h1 className="animate-item text-5xl md:text-7xl font-bold mb-8 neon-text opacity-0">
          About Me.
        </h1>

        <div className="animate-item glass-card p-8 md:p-12 rounded-3xl mb-16 opacity-0">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-primary">The Journey Since 2018</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              My professional journey began in 2018 with a deep curiosity for how the web works. What started as simple PHP scripts quickly evolved into architecting complex, scalable enterprise applications.
            </p>
            <p>
              Over the past 5+ years, I have honed my expertise across the full stack. I specialize in backend development with <strong className="text-white">PHP and Laravel</strong>, building robust APIs and complex logic. In the CMS ecosystem, I&apos;ve developed custom <strong className="text-white">WordPress</strong> solutions and intricate plugins from scratch.
            </p>
            <p>
              On the frontend, I breathe life into designs using <strong className="text-white">React.js, Next.js, and JavaScript</strong>, focusing on performance, accessibility, and delivering premium user experiences like the one you&apos;re experiencing now.
            </p>
            <p>
              My philosophy is simple: Code should not only work flawlessly but should be elegant, maintainable, and built with future scalability in mind.
            </p>
          </div>
        </div>

        <h2 className="animate-item text-3xl font-bold mb-8 opacity-0">Technical Strengths</h2>

        <div className="animate-item grid md:grid-cols-2 gap-6 opacity-0">
          {strengths.map((strength, i) => (
            <div
              key={i}
              className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              {strength.icon}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{strength.title}</h3>
              <p className="text-gray-400">{strength.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
