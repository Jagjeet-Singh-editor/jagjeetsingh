"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [typed, setTyped] = useState("");
  const text = "LET'S CREATE TOGETHER";

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const id = setInterval(() => {
      setTyped(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, [isInView]);

  return (
    <section id="contact" className="relative py-32 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          06 — Contact
        </motion.p>

        <div className="mt-12">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 min-h-[1.2em]">
            {typed}
            <span className="animate-pulse text-accent-amber">|</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-text-secondary text-base sm:text-lg max-w-lg mb-12 leading-relaxed"
          >
            Available for freelance projects, full-time roles, and collaborations. Based in New
            Delhi — open to remote work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <ContactCard
              label="Email"
              value="Jagjeetsingh875072@gmail.com"
              href="mailto:Jagjeetsingh875072@gmail.com"
            />
            <ContactCard
              label="Phone & WhatsApp"
              value="+91 93195 03314"
              href="https://wa.me/919319503314"
            />
            <ContactCard
              label="LinkedIn"
              value="linkedin.com/in/jagjeet-singh"
              href="https://www.linkedin.com/in/jagjeet-singh-4224b9390"
            />
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-32 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
            © 2026 Jagjeet Singh. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
            Built with intention — New Delhi
          </p>
        </motion.footer>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative p-6 bg-bg-secondary border border-border-subtle transition-all duration-500 hover:border-accent-amber/50 hover:shadow-[0_0_30px_-10px_rgba(212,168,83,0.15)]"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent-amber">
        {label}
      </span>
      <p className="text-sm text-text-primary mt-2 group-hover:text-accent-amber transition-colors duration-300 break-all">
        {value}
      </p>
      <div className="absolute inset-0 border border-accent-amber/0 group-hover:border-accent-amber/10 transition-all duration-500 pointer-events-none" />
    </a>
  );
}
