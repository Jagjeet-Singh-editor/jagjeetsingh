"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  {
    icon: "🏆",
    title: "Bronze — Delhi CG Animation Awards 2024",
    desc: "Two-time Bronze Winner at the Delhi CG Animation Awards and International Animation Awards (2024).",
  },
  {
    icon: "⏱",
    title: "100 Hours Competition — MAAC Institute",
    desc: "Honored for creativity, speed, and storytelling under time-bound pressure.",
  },
  {
    icon: "🎬",
    title: 'Music Video Credit — "TRY BALL"',
    desc: 'Official Music Video Editor for Vishesh Malik ft. Ghaint Jxtt — full post-production including color grading and motion graphics.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Awards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="relative py-32 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          05 — Awards
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        >
          {awards.map((a) => (
            <motion.div
              key={a.title}
              variants={cardItem}
              className="group relative p-8 bg-bg-secondary border border-border-subtle transition-all duration-500 hover:border-accent-amber/30 hover:bg-bg-elevated"
              style={{ perspective: "800px" }}
            >
              <span className="text-3xl block mb-4">{a.icon}</span>
              <h3 className="text-base font-display font-bold text-text-primary mb-3 leading-snug">
                {a.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{a.desc}</p>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-accent-amber/10 border-r-transparent group-hover:border-t-accent-amber/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
