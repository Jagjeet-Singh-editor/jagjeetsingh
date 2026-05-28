"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  from: number;
  to: number;
  duration?: number;
  start?: boolean;
}

export default function CountUp({ from, to, duration = 2, start = false }: Props) {
  const [count, setCount] = useState(from);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(from + (to - from) * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [from, to, duration, start]);

  return <>{count}</>;
}
