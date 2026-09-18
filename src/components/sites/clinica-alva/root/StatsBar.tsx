"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const STATS: Stat[] = [
  { target: 2500, suffix: "+", label: "Clientes atendidos" },
  { target: 96, suffix: "%", label: "Satisfação" },
  { target: 8000, suffix: "+", label: "Procedimentos realizados" },
  { target: 6, suffix: "", label: "Anos de experiência" },
];

function formatNumber(n: number) {
  return n.toLocaleString("pt-BR");
}

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }

    const duration = 1100;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [start, target]);

  return value;
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.target, start);
  return (
    <div className="text-center">
      <div
        className="text-[clamp(1.75rem,3vw,2.6rem)] font-bold text-[#C9A96E] leading-none [font-variant-numeric:tabular-nums]"
        aria-live="off"
      >
        <span aria-hidden="true">
          {stat.prefix}
          {formatNumber(value)}
          {stat.suffix}
        </span>
        <span className="sr-only">
          {stat.prefix}
          {formatNumber(stat.target)}
          {stat.suffix} — {stat.label}
        </span>
      </div>
      <div className="text-[0.7rem] tracking-[0.18em] text-[#8A8480] mt-2.5 uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#1C1C1A] py-14 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} start={visible} />
          ))}
        </div>
      </div>
    </div>
  );
}
