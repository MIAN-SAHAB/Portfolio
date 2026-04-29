"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
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
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 });
    }
    linksRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5, delay: i * 0.1 }
        );
      }
    });
  }, []);

  useEffect(() => {
    if (mobileNavRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileNavRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3 }
        );
      } else {
        gsap.to(mobileNavRef.current, { height: 0, opacity: 0, duration: 0.3 });
      }
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-40 glass border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div ref={logoRef} className="text-2xl font-bold tracking-tighter neon-text">
            MD<span className="text-white">.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <div
              key={link.path}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
            >
              <Link
                href={link.path}
                className={`text-sm tracking-wide transition-colors hover:text-primary ${
                  pathname === link.path ? "text-primary neon-text font-medium" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        ref={mobileNavRef}
        className="md:hidden glass border-b border-white/10 overflow-hidden"
        style={{ height: 0, opacity: 0 }}
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
      </div>
    </header>
  );
}
