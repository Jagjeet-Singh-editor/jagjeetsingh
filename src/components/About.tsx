"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./CountUp";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          01 — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-bg-elevated to-bg-secondary border border-border-subtle flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <span className="font-mono text-6xl text-accent-amber/20">[JS]</span>
                <p className="mt-4 text-xs font-mono text-text-secondary">
                  Still from edit suite
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-6">
              THE STORY
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              I&apos;m <span className="text-text-primary font-medium">Jagjeet Singh</span>, a Video
              Editor based in <span className="text-text-primary">Rohini, New Delhi</span>. I edit
              across the full spectrum — short-form reels & stories, long-form YouTube content,
              AI-generated videos, and music video post-production.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Currently at <span className="text-text-primary">Truffle Nation</span> as an AI Video
              Creator & Social Media Video Editor, I handle everything from a 15-second reel to a
              full music video — color grading, motion graphics, sound design, and AI-assisted
              workflows included.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border-subtle"
        >
          <StatItem value={2} suffix="×" label="Bronze Winner" isInView={isInView} />
          <StatItem value={3} suffix="+" label="Years of Experience" isInView={isInView} />
          <StatItem value={10} suffix="+" label="Tools Mastered" isInView={isInView} />
          <InfinityItem label="Frames with Intention" isInView={isInView} />
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  suffix,
  label,
  isInView,
}: {
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
}) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-accent-amber">
        <CountUp from={0} to={value} duration={2} start={isInView} />
        {suffix}
      </div>
      <p className="text-xs font-mono uppercase tracking-wider text-text-secondary mt-2">
        {label}
      </p>
    </div>
  );
}

function InfinityItem({
  label,
  isInView,
}: {
  label: string;
  isInView: boolean;
}) {
  return (
    <div className="text-center">
      <motion.div
        className="font-display text-4xl sm:text-5xl font-bold text-accent-amber"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          ∞
        </motion.span>
      </motion.div>
      <p className="text-xs font-mono uppercase tracking-wider text-text-secondary mt-2">
        {label}
      </p>
    </div>
  );
}
