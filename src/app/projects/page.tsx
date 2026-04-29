"use client";

import { motion } from "framer-motion";
import ProjectCard, { ProjectType } from "@/components/projects/ProjectCard";

const projects: ProjectType[] = [
  {
    title: "TouchPoint",
    description: "Enterprise level business solutions platform featuring complex data integrations and a high-performance frontend architecture.",
    url: "https://touchpoint.pk",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    gradient: "from-blue-600 to-cyan-400"
  },
  {
    title: "Pixelbee",
    description: "Creative agency portfolio with custom heavy animations, advanced scroll effects, and WebGL integration for immersive experiences.",
    url: "https://pixelbee.me",
    tech: ["React", "Three.js", "GSAP", "Framer Motion"],
    gradient: "from-purple-600 to-pink-500"
  },
  {
    title: "PCB Pathways",
    description: "Specialized engineering platform for printed circuit board design routing and complex schematic visualization tools.",
    url: "https://pcbpathways.com",
    tech: ["Laravel", "Vue.js", "MySQL", "Docker"],
    gradient: "from-emerald-600 to-teal-400"
  },
  {
    title: "Globe Visualization Tools",
    description: "Interactive 3D globe visualization projects for plotting global data points, flight paths, and geographical statistics.",
    tech: ["Three.js", "WebGL", "React", "D3.js"],
    gradient: "from-indigo-600 to-blue-500"
  },
  {
    title: "Custom Laravel ERP System",
    description: "End-to-end Enterprise Resource Planning software built from scratch to manage inventory, HR, and financials for a multinational client.",
    tech: ["Laravel", "PHP", "PostgreSQL", "Redis"],
    gradient: "from-red-600 to-orange-500"
  },
  {
    title: "WordPress E-Commerce & Plugins",
    description: "High-conversion custom WooCommerce themes and proprietary plugins to extend core functionality for specialized retail operations.",
    tech: ["WordPress", "PHP", "JavaScript", "SQL"],
    gradient: "from-slate-700 to-slate-500"
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text">Selected Works.</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          A showcase of enterprise applications, creative portfolios, and complex systemic solutions engineered since 2018.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
