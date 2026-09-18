"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { heroTreatments, WHATSAPP_URL } from "./data";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = heroTreatments[activeIndex];

  return (
    <section
      id="inicio"
      className="bg-[#FAF7F2] pt-28 md:pt-32 pb-14 md:min-h-screen flex items-center relative"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,560px)_minmax(0,720px)] gap-10 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="gold-rule" />
              <span className="section-label">
                Clínica de estética e laser em Belo Horizonte
              </span>
            </div>
            <h1 className="font-heading font-semibold text-[clamp(2.625rem,3.2vw+2rem,5.5rem)] leading-[1.05] text-[#1C1C1A] tracking-[-0.01em]">
              Tecnologia para cuidar da sua pele com{" "}
              <span className="text-[#A08046]">confiança</span>
            </h1>
            <p className="text-[clamp(1.125rem,1vw+0.9rem,1.25rem)] text-[#5A5652] leading-[1.7] mt-6 max-w-[480px]">
              Tratamentos faciais, corporais e a laser definidos após uma
              avaliação individual, com tecnologia, acompanhamento e atenção
              em todas as etapas.
            </p>
            <div className="flex flex-wrap gap-4 mt-9">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <span className="btn-gold inline-flex items-center gap-2 cursor-pointer">
                  Agendar avaliação <ChevronRight size={16} />
                </span>
              </a>
              <a href="#tratamentos">
                <span className="btn-outline-dark inline-flex items-center gap-2">
                  Conhecer tratamentos <ChevronRight size={16} />
                </span>
              </a>
            </div>
            <p className="text-[0.85rem] text-[#5A5652] mt-7 leading-[1.6]">
              Atendimento na Savassi, em Belo Horizonte.
            </p>
          </div>

          <div>
            <div className="rounded-[2px] overflow-hidden border border-[#E8E0D5]">
              <BeforeAfterSlider
                beforeImage={active.beforeImage}
                afterImage={active.afterImage}
                beforeAlt={active.beforeAlt}
                afterAlt={active.afterAlt}
                label={`${active.label}, antes e depois`}
              />
            </div>
            <p className="text-[0.8rem] text-[#5A5652] mt-3 leading-[1.6]">
              {active.description}
            </p>
            <p className="text-[0.7rem] text-[#5A5652]/70 mt-1.5 leading-[1.5]">
              Imagens ilustrativas, criadas para demonstração deste projeto
              fictício. Indicações, sessões e respostas variam conforme
              características individuais.
            </p>
            <div className="mt-4 flex sm:grid sm:grid-cols-4 gap-2.5 sm:max-w-[560px] overflow-x-auto sm:overflow-visible -mx-1 px-1 sm:mx-0 sm:px-0">
              {heroTreatments.map((t, i) => (
                <button
                  key={t.slug}
                  title={t.label}
                  aria-pressed={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "relative aspect-square overflow-hidden p-0 cursor-pointer bg-[#F2EDE4] rounded-[1px] transition-[border-color,transform] duration-300 border-2 min-h-[44px] w-20 shrink-0 sm:w-auto",
                    i === activeIndex
                      ? "border-[#C9A96E] scale-[1.03]"
                      : "border-[#E8E0D5] hover:border-[#C9A96E]/50"
                  )}
                >
                  <Image
                    src={t.beforeImage}
                    alt={`Selecionar comparador de ${t.label}`}
                    fill
                    sizes="145px"
                    className={cn(
                      "object-cover object-center block transition-opacity duration-300",
                      i === activeIndex ? "opacity-100" : "opacity-75"
                    )}
                  />
                  <span className="sr-only">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#C9A96E]" />
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#5A5652]">
          Role a página
        </span>
      </div>
    </section>
  );
}
