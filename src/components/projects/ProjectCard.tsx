"use client";

import { ExternalLink, Code } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectType {
  title: string;
  description: string;
  url?: string;
  github?: string;
  tech: string[];
  gradient: string;
}

export default function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="glass-card rounded-2xl overflow-hidden group relative flex flex-col h-full opacity-0"
    >
      {/* Abstract visual placeholder for project screenshot */}
      <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-white text-gray-400 transition-colors"
            >
              <Code size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
