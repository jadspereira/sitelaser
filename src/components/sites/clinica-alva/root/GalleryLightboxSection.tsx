"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { FadeUp } from "../shared/FadeUp";
import { galleryPhotos } from "./data";

export function GalleryLightboxSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const open = (index: number, el: HTMLElement) => {
    triggerRef.current = el;
    setOpenIndex(index);
  };

  useEffect(() => {
    if (openIndex === null) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % galleryPhotos.length));
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + galleryPhotos.length) % galleryPhotos.length
        );
      }
      if (e.key === "Tab") {
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, close]);

  return (
    <section id="resultados" className="py-24 md:py-32 bg-[#EDE8DF]">
      <div className="container">
        <FadeUp>
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="gold-rule" />
              <span className="section-label">Estrutura</span>
              <div className="gold-rule" />
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,2.6vw+1rem,3.25rem)] text-[#1C1C1A] leading-[1.15]">
              Conheça a Clínica Alva
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryPhotos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={(e) => open(i, e.currentTarget)}
                className={
                  "relative overflow-hidden border border-[#D8CFC4] aspect-4/3 group cursor-zoom-in " +
                  (i === 0 ? "sm:col-span-2 sm:aspect-[16/9] lg:col-span-2 lg:aspect-[16/9]" : "")
                }
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 left-3 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-white bg-[#1C1C1A]/55 px-2.5 py-1.5 backdrop-blur-sm">
                  {photo.caption}
                </span>
              </button>
            ))}
          </div>
        </FadeUp>
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${galleryPhotos[openIndex].caption}`}
          className="fixed inset-0 z-[100] bg-[#1C1C1A]/92 flex items-center justify-center p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            ref={closeButtonRef}
            onClick={close}
            aria-label="Fechar imagem ampliada"
            className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center border border-white/25 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
          >
            <X size={22} />
          </button>
          <div className="relative w-full max-w-[900px] aspect-4/3">
            <Image
              src={galleryPhotos[openIndex].src}
              alt={galleryPhotos[openIndex].alt}
              fill
              sizes="900px"
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-[0.8rem]">
            {galleryPhotos[openIndex].caption}
          </p>
        </div>
      )}
    </section>
  );
}
