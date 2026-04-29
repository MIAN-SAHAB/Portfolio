"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40 glass border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter neon-text"
          >
            MD<span className="text-white">.</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={link.path}
                className={`text-sm tracking-wide transition-colors hover:text-primary ${
                  pathname === link.path ? "text-primary neon-text font-medium" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass border-b border-white/10"
        >
          <div className="flex flex-col py-4 px-6 gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg ${
                  pathname === link.path ? "text-primary neon-text" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
