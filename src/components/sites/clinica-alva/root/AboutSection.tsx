import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { FadeUp } from "../shared/FadeUp";

const HIGHLIGHTS = [
  "Avaliação individual",
  "Equipe multidisciplinar",
  "Tecnologias selecionadas",
  "Protocolos personalizados",
  "Acompanhamento após o atendimento",
  "Ambiente reservado",
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="container">
        <FadeUp className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="relative img-zoom">
            <Image
              src="/images/clinica-recepcao.png"
              alt="Recepção acolhedora da Clínica Alva, com sofá e balcão de atendimento — imagem ilustrativa criada para este projeto fictício"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="w-full object-cover object-center h-[420px] md:h-[560px]"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-rule" />
              <span className="section-label">Sobre a clínica</span>
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,2.6vw+1rem,3.25rem)] text-[#1C1C1A] leading-[1.15]">
              Cuidado estético com técnica, tecnologia e atenção individual
            </h2>
            <p className="text-[1rem] text-[#5A5652] leading-[1.85] mt-6">
              A Clínica Alva reúne tratamentos faciais, corporais e
              tecnologias a laser em um ambiente criado para oferecer
              conforto, segurança e acompanhamento próximo.
            </p>
            <p className="text-[1rem] text-[#5A5652] leading-[1.85] mt-4">
              Cada atendimento começa com uma avaliação. Nossa equipe
              considera objetivos, histórico, rotina, sensibilidades e
              contraindicações antes de recomendar qualquer procedimento.
            </p>
            <p className="text-[1rem] text-[#5A5652] leading-[1.85] mt-4">
              Nosso propósito não é oferecer protocolos automáticos, mas
              construir planos de cuidado coerentes com as necessidades de
              cada pessoa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 p-4 border border-[#E8E0D5] bg-white/60 min-h-16"
                >
                  <CircleCheckBig size={18} className="text-[#C9A96E] shrink-0" />
                  <span className="text-[0.95rem] font-semibold text-[#1C1C1A]">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
