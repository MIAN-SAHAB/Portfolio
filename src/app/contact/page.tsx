"use client";


import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const header = containerRef.current.querySelector(".header-section");
      const leftCol = containerRef.current.querySelector(".left-col");
      const rightCol = containerRef.current.querySelector(".right-col");

      gsap.fromTo(
        header,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      if (leftCol) {
        gsap.fromTo(
          leftCol,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }
        );
      }

      if (rightCol) {
        gsap.fromTo(
          rightCol,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.6, delay: 0.4, ease: "power2.out" }
        );
      }
    }
  }, []);

  return (
    <div className="container mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center" ref={containerRef}>
      <div className="max-w-6xl mx-auto w-full">
        <div className="header-section text-center mb-16 opacity-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text">Let&apos;s Connect.</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Available for freelance opportunities, full-time roles, and interesting projects. Reach out and let&apos;s build something extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="left-col glass-card p-8 rounded-3xl opacity-0">
              <h3 className="text-2xl font-bold mb-8 text-white">Direct Contacts</h3>

              <div className="space-y-6">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">hello@mhamzadaniyal.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-lg font-medium text-white group-hover:text-[#25D366] transition-colors">+123 456 7890</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg font-medium text-white">Available Worldwide / Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="right-col lg:col-span-3 glass-card p-8 md:p-12 rounded-3xl opacity-0">
            <h3 className="text-3xl font-bold mb-8 text-white">Send a Message</h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400 block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary/50 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2 font-medium">Message</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-primary/50 transition-colors h-40 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 neon-border mt-4 text-lg">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
