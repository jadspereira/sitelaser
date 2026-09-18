import Image from "next/image";
import { FadeUp } from "../shared/FadeUp";
import { techFeatures } from "./data";

export function TechnologySection() {
  return (
    <section id="tecnologia" className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="container">
        <FadeUp className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-rule" />
              <span className="section-label">Tecnologia</span>
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,2.6vw+1rem,3.25rem)] text-[#1C1C1A] leading-[1.15]">
              Tecnologia escolhida com propósito
            </h2>
            <p className="text-[1rem] text-[#5A5652] leading-[1.85] mt-6">
              A Clínica Alva trabalha com equipamentos e protocolos
              selecionados de acordo com segurança, indicação e conforto
              durante o atendimento. A tecnologia é uma ferramenta do cuidado
              e não substitui avaliação e acompanhamento profissional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-9">
              {techFeatures.map((f) => (
                <div
                  key={f.title}
                  className="border border-[#D8CFC4] bg-white p-5 rounded-[2px] flex items-start gap-[0.85rem]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-px">
                    <circle cx="10" cy="10" r="9" stroke="#C9A96E" strokeWidth="1.5" />
                    <path
                      d="M6 10l3 3 5-5"
                      stroke="#C9A96E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <div className="text-[0.92rem] font-bold text-[#1C1C1A] mb-[3px]">
                      {f.title}
                    </div>
                    <div className="text-[0.82rem] text-[#5A5652] leading-[1.5]">
                      {f.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative img-zoom overflow-hidden">
            <Image
              src="/images/clinica-sala-atendimento.png"
              alt="Sala de atendimento da Clínica Alva com equipamento a laser — imagem ilustrativa criada para este projeto fictício"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="block h-[420px] md:h-[560px] w-full object-cover object-center"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
