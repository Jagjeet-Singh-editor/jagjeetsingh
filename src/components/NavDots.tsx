"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["hero", "work", "about", "toolkit", "experience", "showreel", "awards", "contact"];

export default function NavDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((s) => (
        <button
          key={s}
          onClick={() => scrollTo(s)}
          className="group relative flex items-center justify-center w-3 h-3"
          aria-label={`Scroll to ${s}`}
        >
          <motion.span
            className={`block rounded-full border transition-colors duration-300 ${
              active === s
                ? "w-2.5 h-2.5 bg-accent-amber border-accent-amber"
                : "w-2 h-2 border-border-subtle bg-transparent group-hover:border-accent-amber"
            }`}
            layoutId="navDot"
          />
          <span className="absolute right-full mr-3 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {s}
          </span>
        </button>
      ))}
    </nav>
  );
}
