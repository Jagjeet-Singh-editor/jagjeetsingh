"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    company: "Truffle Nation",
    period: "NOV 2025 — PRESENT",
    role: "AI Video Creator & Social Media Video Editor",
    highlights: [
      "Conducted on-location and studio shoots — handled camera setup, framing, and direction",
      "Managed and produced multiple short-form videos for online platforms",
      "Set up and handled live online streaming using camera systems and OBS",
      "Used AI tools to generate B-roll ideas and visual concepts for videos",
      "Created detailed prompts to produce AI-assisted video outputs",
    ],
  },
  {
    company: "Get Your Reach",
    period: "2024 — 8 MONTHS",
    role: "Social Media Designer & Video Editor",
    highlights: [
      "Created visually appealing graphics and promotional content for social platforms",
      "Shot and edited videos for reels, stories, and promotional campaigns",
      "Managed end-to-end video production — planning, shooting, editing, post-production",
      "Ensured consistency in visual branding across all social media platforms",
    ],
  },
  {
    company: "Self-Employed",
    period: "2024 — PRESENT",
    role: "Freelance Video Editor",
    highlights: [
      "Edited promotional videos, reels, and YouTube content for various clients",
      "Delivered customised edits based on individual client needs and brand aesthetics",
      "Handled complete post-production — color correction, sound design, motion graphics",
      "Notable credit: TRY BALL by Vishesh Malik ft. Ghaint Jxtt — Music Video Editor",
    ],
  },
];

const cardItem = {
  hidden: { opacity: 0, x: -30 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-32 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          03 — Experience
        </motion.p>

        <div className="relative mt-12">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="absolute left-[7px] top-0 bottom-0 w-px bg-border-subtle origin-top"
          />

          <div className="space-y-16">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                custom={i}
                variants={cardItem}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="relative pl-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.1 }}
                  className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full border-2 border-accent-amber bg-bg-primary"
                />

                <span className="font-mono text-[10px] tracking-[0.15em] text-accent-amber uppercase">
                  {job.period}
                </span>
                <h3 className="text-xl font-display font-bold text-text-primary mt-1">
                  {job.company}
                </h3>
                <p className="text-sm text-text-secondary font-mono mt-1 mb-4">{job.role}</p>
                <ul className="space-y-2">
                  {job.highlights.map((h, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.2 + j * 0.08 + 0.3 }}
                      className="text-sm text-text-secondary leading-relaxed flex gap-2"
                    >
                      <span className="text-accent-amber mt-1.5 flex-shrink-0">—</span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
