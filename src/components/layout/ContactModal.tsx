"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MessageCircle } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
