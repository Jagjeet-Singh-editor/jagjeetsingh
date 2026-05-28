"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
