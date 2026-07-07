import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";

function Counter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-white">
        {count}{suffix}
      </p>
      <p className="text-gray-400 text-xs tracking-wider uppercase mt-1">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { value: 3, suffix: "+", label: "Years Learning" },
    { value: 10, suffix: "+", label: "Projects Built" },
    { value: 5, suffix: "+", label: "Research Projects" },
    { value: 1, suffix: "", label: "Goal: Real Impact" },
  ];

  return (
    <Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8 mt-16">
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </Reveal>
  );
}