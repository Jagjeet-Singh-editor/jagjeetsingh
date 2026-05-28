"use client";

import { motion } from "framer-motion";

const staggerDelay = 0.08;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: staggerDelay, delayChildren: 0.3 },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-accent-amber mb-6"
        >
          Video Editor
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-6xl sm:text-8xl lg:text-9xl font-display font-bold tracking-[-0.03em] leading-[0.9] mb-6"
        >
          <span className="sr-only">Jagjeet Singh</span>
          {["JAGJEET", "SINGH"].map((word, i) => (
            <motion.span key={word} variants={wordItem} className="block">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-10"
        >
          <span className="font-mono text-sm sm:text-base text-accent-amber blink-cursor">
            VIDEO_EDITOR
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed mb-10"
        >
          Short-Form · Long-Form · AI Video · Music Videos · Wedding Films
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("showreel")}
            className="group relative px-8 py-3 border border-accent-amber text-accent-amber font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-accent-amber hover:text-bg-primary"
          >
            <span className="relative z-10">Watch Showreel</span>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="group relative px-8 py-3 border border-border-subtle text-text-primary font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:border-accent-amber hover:text-accent-amber"
          >
            <span className="relative z-10">Get in Touch</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-border-subtle rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-accent-amber rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
