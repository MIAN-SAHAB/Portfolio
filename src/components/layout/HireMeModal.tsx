"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen && !shouldRender) {
      timeout = setTimeout(() => setShouldRender(true), 0);
    }
    return () => clearTimeout(timeout);
  }, [isOpen, shouldRender]);

  useEffect(() => {
    if (isOpen && shouldRender) {
      if (overlayRef.current) {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      }
      if (modalRef.current) {
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" }
        );
      }
    } else if (!isOpen && shouldRender) {
      const tl = gsap.timeline({ onComplete: () => setShouldRender(false) });
      if (overlayRef.current) {
        tl.to(overlayRef.current, { opacity: 0, duration: 0.3 }, 0);
      }
      if (modalRef.current) {
        tl.to(modalRef.current, { opacity: 0, scale: 0.9, y: 20, duration: 0.3 }, 0);
      }
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <>
      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
      />
      <div
        ref={modalRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[101] p-6"
      >
            <div className="glass-card rounded-2xl p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold mb-2 neon-text text-primary">Hire Me</h2>
              <p className="text-gray-400 mb-6">Let&apos;s build something extraordinary together.</p>

              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm text-gray-400 block mb-1">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-1">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-1">Project Details</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary/50 transition-colors h-32 resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors mt-2 neon-border">
                  Send Proposal
                </button>
              </form>
            </div>
      </div>
    </>
  );
}
