"use client";


import { Briefcase, GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    date: "2021 - Present",
    description: "Leading the development of scalable enterprise applications. Architecting solutions using Next.js, Node.js, and complex database structures. Managing a team of 5 developers and ensuring high-quality code delivery.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    type: "work",
    title: "Full-Stack PHP Developer",
    company: "Creative Digital Agency",
    date: "2019 - 2021",
    description: "Developed and maintained multiple high-traffic client websites. Created custom Laravel applications and complex WordPress plugins. Optimized database queries and improved overall application performance by 40%.",
    tech: ["PHP", "Laravel", "WordPress", "MySQL"]
  },
  {
    type: "work",
    title: "Junior Web Developer",
    company: "StartUp Studio",
    date: "2018 - 2019",
    description: "Started professional journey building dynamic frontends and integrating backend APIs. Focused heavily on JavaScript and foundational PHP development.",
    tech: ["JavaScript", "React", "PHP", "CSS"]
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    date: "2014 - 2018",
    description: "Graduated with honors. Specialized in software engineering, database management systems, and advanced algorithms. Led the university coding club.",
    tech: ["C++", "Java", "Data Structures", "Algorithms"]
  }
];

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const header = containerRef.current.querySelector(".header-section");
      gsap.fromTo(
        header,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      const items = containerRef.current.querySelectorAll(".timeline-item");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-6 py-20" ref={containerRef}>
      <div>
        <div className="header-section opacity-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text">Timeline.</h1>
          <p className="text-xl text-gray-400 mb-20 max-w-2xl">
            My professional journey and academic background shaping my expertise since 2018.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row mb-16 opacity-0 ${
                  isEven ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 bg-[#050505] border-2 border-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 neon-border">
                  {exp.type === "work" ? (
                    <Briefcase size={20} className="text-primary" />
                  ) : (
                    <GraduationCap size={20} className="text-accent" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-[45%] ${isEven ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-colors">
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-primary mb-4">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-gray-400 mb-4">{exp.company}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? "" : "md:justify-end"}`}>
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
