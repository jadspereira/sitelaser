"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeUp } from "../shared/FadeUp";
import { faqItems } from "./data";

function FaqRow({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-[#E8E0D5]">
      <h3>
        <button
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full min-h-12 flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
        >
          <span className="text-[1rem] font-semibold text-[#1C1C1A]">
            {question}
          </span>
          <ChevronDown
            size={18}
            className={cn(
              "text-[#C9A96E] shrink-0 transition-transform duration-300",
              open && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-[0.92rem] text-[#5A5652] leading-[1.8] pb-5 pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="container">
        <FadeUp className="max-w-[760px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="gold-rule" />
              <span className="section-label">Dúvidas frequentes</span>
              <div className="gold-rule" />
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,2.6vw+1rem,3.25rem)] text-[#1C1C1A] leading-[1.15]">
              Perguntas frequentes
            </h2>
          </div>

          <div>
            {faqItems.map((item, i) => (
              <FaqRow
                key={item.question}
                question={item.question}
                answer={item.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
