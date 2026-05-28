"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const software = [
  { name: "Premiere Pro", icon: "Pr" },
  { name: "After Effects", icon: "Ae" },
  { name: "Photoshop", icon: "Ps" },
  { name: "DaVinci Resolve", icon: "Dr" },
  { name: "Illustrator", icon: "Ai" },
  { name: "Blender", icon: "Bl" },
  { name: "OBS Studio", icon: "OBS" },
];

const aiTools = [
  { name: "Sora", icon: "So" },
  { name: "ChatGPT", icon: "GPT" },
  { name: "Claude", icon: "Cl" },
  { name: "Kling AI", icon: "KL" },
  { name: "Freepik Spaces", icon: "Fr" },
  { name: "Higgsfield", icon: "Hi" },
  { name: "LumaLabs", icon: "Lu" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const badgeItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const skillsMarquee = [
  "Short-Form Editing", "Long-Form Editing", "Music Video Editing", "Wedding Films",
  "AI Video Creation", "Color Grading", "Motion Graphics", "Premiere Pro",
  "After Effects", "DaVinci Resolve", "Live Streaming",
  "Short-Form Editing", "Long-Form Editing", "Music Video Editing", "Wedding Films",
  "AI Video Creation", "Color Grading", "Motion Graphics", "Premiere Pro",
  "After Effects", "DaVinci Resolve", "Live Streaming",
];

export default function Toolkit() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="toolkit" className="relative py-32 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          02 — Toolkit
        </motion.p>

        <div className="mt-12 overflow-hidden border-y border-border-subtle py-4 mb-16">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {skillsMarquee.map((s, i) => (
              <span
                key={i}
                className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary"
              >
                {s}
                {i < skillsMarquee.length - 1 && (
                  <span className="text-accent-amber mx-4">✦</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-amber mb-8">
              Software
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="flex flex-wrap gap-3"
            >
              {software.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={badgeItem}
                  className="group relative px-4 py-3 bg-bg-secondary border border-border-subtle hover:border-accent-amber/40 transition-colors duration-300"
                >
                  <span className="font-display font-bold text-sm text-text-primary">
                    {tool.icon}
                  </span>
                  <span className="block text-[10px] font-mono text-text-secondary mt-1">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-amber mb-8">
              AI Tools
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="flex flex-wrap gap-3"
            >
              {aiTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={badgeItem}
                  className="group relative px-4 py-3 bg-bg-secondary border border-border-subtle hover:border-accent-amber/40 transition-colors duration-300"
                >
                  <span className="font-display font-bold text-sm text-accent-amber">
                    {tool.icon}
                  </span>
                  <span className="block text-[10px] font-mono text-text-secondary mt-1">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
