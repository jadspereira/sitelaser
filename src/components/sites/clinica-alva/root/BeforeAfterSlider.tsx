"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  label,
}: {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  label: string;
}) {
  const [value, setValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label={label}
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setValue((v) => Math.max(0, v - 5));
        if (e.key === "ArrowRight") setValue((v) => Math.min(100, v + 5));
      }}
      style={{ touchAction: "pan-y" }}
      className="relative w-full aspect-4/3 overflow-hidden cursor-col-resize select-none bg-[#F2EDE4]"
    >
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        sizes="(min-width: 1024px) 720px, 100vw"
        className="object-cover object-center pointer-events-none"
        priority
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover object-center"
          priority
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-[1.5px] bg-white/90 pointer-events-none"
        style={{ left: `${value}%`, transform: "translateX(-50%)" }}
      />
      <div
        className="absolute top-1/2 w-10 h-10 rounded-full bg-white border-[1.5px] border-[#C9A96E]/60 shadow-[0_2px_12px_rgba(0,0,0,0.18)] flex items-center justify-center cursor-grab pointer-events-none"
        style={{ left: `${value}%`, transform: "translate(-50%, -50%)" }}
      >
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
          <path
            d="M5 5H13M1 5L4 2M1 5L4 8M17 5L14 2M17 5L14 8"
            stroke="#C9A96E"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute bottom-3 left-3 text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-white bg-[#1C1C1A]/55 px-2.5 py-1.5 backdrop-blur-sm pointer-events-none">
        Antes
      </div>
      <div className="absolute bottom-3 right-3 text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-white bg-[#1C1C1A]/55 px-2.5 py-1.5 backdrop-blur-sm pointer-events-none">
        Depois
      </div>
    </div>
  );
}
