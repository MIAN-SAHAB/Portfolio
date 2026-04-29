"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Engineering",
    color: "from-primary to-blue-500",
    skills: [
      { name: "React.js / Next.js", level: 95 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Tailwind CSS / SCSS", level: 95 },
      { name: "Framer Motion / GSAP", level: 85 },
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
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text">Technical Arsenal.</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          A comprehensive breakdown of my expertise across the modern development stack, refined over 5+ years of professional engineering.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2, duration: 0.6 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h2 className={`text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h2>

              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
