"use client";

import { useEffect, useState } from "react";

export default function Timecode() {
  const [time, setTime] = useState("00:00:00:00");

  useEffect(() => {
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const h = Math.floor(elapsed / 3600000)
        .toString()
        .padStart(2, "0");
      const m = Math.floor((elapsed % 3600000) / 60000)
        .toString()
        .padStart(2, "0");
      const s = Math.floor((elapsed % 60000) / 1000)
        .toString()
        .padStart(2, "0");
      const f = Math.floor((elapsed % 1000) / 41)
        .toString()
        .padStart(2, "0");
      setTime(`${h}:${m}:${s}:${f}`);
    };
    frame();
    const id = setInterval(frame, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed bottom-4 right-6 z-50 font-mono text-xs text-text-secondary/40 select-none pointer-events-none">
      TC: {time}
    </div>
  );
}
