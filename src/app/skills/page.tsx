"use client";



import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend Engineering",
    color: "from-primary to-blue-500",
    skills: [
      { name: "React.js / Next.js", level: 95 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Tailwind CSS / SCSS", level: 95 },
      { name: "GSAP", level: 85 },
      { name: "Three.js / WebGL", level: 70 },
    ],
  },
  {
    title: "Backend & Database",
    color: "from-secondary to-red-500",
    skills: [
      { name: "PHP", level: 95 },
      { name: "Laravel", level: 90 },
      { name: "Node.js / Express", level: 80 },
      { name: "MySQL / PostgreSQL", level: 85 },
      { name: "RESTful APIs / GraphQL", level: 85 },
    ],
  },
  {
    title: "CMS & Solutions",
    color: "from-accent to-purple-500",
    skills: [
      { name: "WordPress Core", level: 98 },
      { name: "Custom Theme/Plugin Dev", level: 95 },
      { name: "Elementor / Builders", level: 98 },
      { name: "WooCommerce", level: 90 },
      { name: "Headless CMS", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Git / GitHub / GitLab", level: 90 },
      { name: "Docker / Containerization", level: 75 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "AWS / DigitalOcean", level: 75 },
      { name: "Agile / Scrum", level: 90 },
    ],
  },
];

export default function SkillsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const header = containerRef.current.querySelector(".header-section");
      gsap.fromTo(
        header,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      const categoryCards = containerRef.current.querySelectorAll(".category-card");
      categoryCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );

        const progressBars = card.querySelectorAll(".progress-bar");
        progressBars.forEach((bar, barIndex) => {
          const targetWidth = bar.getAttribute("data-level");
          gsap.fromTo(
            bar,
            { width: 0 },
            {
              width: `${targetWidth}%`,
              duration: 1,
              delay: 0.3 + barIndex * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-6 py-20" ref={containerRef}>
      <div>
        <div className="header-section opacity-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text">Technical Arsenal.</h1>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl">
            A comprehensive breakdown of my expertise across the modern development stack, refined over 5+ years of professional engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="category-card glass-card p-8 rounded-3xl opacity-0"
            >
              <h2 className={`text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h2>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        data-level={skill.level}
                        className={`progress-bar h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
