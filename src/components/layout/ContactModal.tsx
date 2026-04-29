"use client";

import { X, Mail, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ModalProps) {
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
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] p-6"
      >
            <div className="glass-card rounded-2xl p-8 relative flex flex-col items-center text-center">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold mb-2 neon-text text-primary">Get in Touch</h2>
              <p className="text-gray-400 mb-8">Choose your preferred method of communication.</p>

              <div className="w-full flex flex-col gap-4">
                <a
                  href="mailto:contact@example.com"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
                >
                  <Mail className="text-primary" />
                  <span className="font-medium text-white">Send an Email</span>
                </a>

                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl transition-all"
                >
                  <MessageCircle className="text-[#25D366]" />
                  <span className="font-medium text-white">WhatsApp</span>
                </a>
              </div>
            </div>
      </div>
    </>
  );
}
