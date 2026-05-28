"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Showreel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showreel" className="relative py-32 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          04 — Showreel
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative aspect-video bg-bg-secondary border border-border-subtle group overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-full border-2 border-accent-amber flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-amber/10 transition-colors duration-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-accent-amber fill-current ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">
                  2024 — 2025 REEL
                </p>
                <p className="font-display text-2xl font-bold text-text-primary mt-2">
                  JAGJEET SINGH
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  Short Form · Long Form · AI Videos · Music Videos · Wedding Films
                </p>
              </div>
            </div>

            <div className="absolute inset-0 border border-accent-amber/0 group-hover:border-accent-amber/20 transition-all duration-500 pointer-events-none" />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.behance.net/jagjeetsingh66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent-amber hover:text-text-primary transition-colors duration-300"
            >
              View on Behance
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
