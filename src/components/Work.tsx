"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "01",
    title: "Short-Form Editing",
    desc: "Reels, Shorts, Stories — punchy, scroll-stopping edits optimised for Instagram, YouTube & TikTok. Fast cuts, trending transitions, snappy pacing.",
  },
  {
    id: "02",
    title: "Long-Form Editing",
    desc: "YouTube videos, brand documentaries, promotional films — structured storytelling with pacing that keeps viewers watching till the end.",
  },
  {
    id: "03",
    title: "AI Video Creation",
    desc: "AI-generated B-roll, visuals & full video outputs using tools like Freepik Spaces & AI prompt engineering — blended seamlessly with real footage.",
  },
  {
    id: "04",
    title: "Music Video Editing",
    desc: "Full post-production for music videos — sync to beat, color grading, motion graphics, and visual storytelling that matches the artist's vision.",
  },
  {
    id: "05",
    title: "Wedding Video Editing",
    desc: "Cinematic wedding films — highlight reels, full ceremony edits, drone footage integration, color grading, and emotional storytelling.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 40, rotateX: 5 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          00 — What I Do
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              variants={cardItem}
              className={`group relative p-8 bg-bg-secondary border border-border-subtle transition-all duration-500 hover:border-accent-amber/30 hover:bg-bg-elevated ${
                i === services.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <span className="font-mono text-3xl text-accent-amber/20 group-hover:text-accent-amber/40 transition-colors duration-500">
                {s.id}
              </span>
              <h3 className="text-xl font-display font-bold text-text-primary mt-4 mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 bg-accent-amber w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
