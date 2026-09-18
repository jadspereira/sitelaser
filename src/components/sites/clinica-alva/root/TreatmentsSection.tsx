import { ChevronRight } from "lucide-react";
import { FadeUp } from "../shared/FadeUp";
import { treatments, WHATSAPP_URL } from "./data";

export function TreatmentsSection() {
  return (
    <section id="tratamentos" className="py-24 md:py-32 bg-[#1C1C1A]">
      <div className="container">
        <FadeUp>
          <div className="max-w-[720px] mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-rule" />
              <span className="section-label text-[#C9A96E]">O que tratamos</span>
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,2.6vw+1rem,3.25rem)] text-white leading-[1.15]">
              Nossos principais tratamentos
            </h2>
            <p className="text-[1rem] text-white/55 leading-[1.8] mt-5">
              Conheça as principais possibilidades de cuidado disponíveis na
              Clínica Alva. A indicação de cada procedimento depende de uma
              avaliação individual.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08]">
            {treatments.map((t) => (
              <a
                key={t.slug}
                href={`${WHATSAPP_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline bg-[#1C1C1A] group"
              >
                <div className="relative overflow-hidden p-8 flex flex-col h-full min-h-[280px] transition-colors duration-300 cursor-pointer hover:bg-white/[0.03]">
                  <div className="absolute right-4 bottom-2 select-none pointer-events-none font-heading font-bold text-[6.5rem] leading-none text-white/[0.04]">
                    {t.number}
                  </div>
                  <div className="text-[0.65rem] tracking-[0.15em] text-[#C9A96E] uppercase mb-4">
                    {t.number}
                  </div>
                  <h3 className="font-heading font-semibold text-[1.4rem] text-white leading-[1.2] mb-3">
                    {t.title}
                  </h3>
                  <div className="w-8 h-px bg-[#C9A96E] mb-4" />
                  <p className="text-[0.92rem] text-white/50 leading-[1.75] grow">
                    {t.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#C9A96E] text-[0.72rem] tracking-[0.08em] uppercase mt-6 group-hover:gap-2.5 transition-all">
                    Agendar avaliação <ChevronRight size={13} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
