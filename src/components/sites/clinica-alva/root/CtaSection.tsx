import { WHATSAPP_URL } from "./data";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-28 bg-[#1C1C1A] overflow-hidden">
      <div className="container relative z-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="gold-rule" />
          <span className="section-label text-[#C9A96E]">Comece agora</span>
          <div className="gold-rule" />
        </div>
        <h2 className="font-heading font-semibold text-[clamp(2.2rem,3vw+1rem,3.5rem)] text-white leading-[1.15]">
          Seu cuidado começa com uma boa avaliação
        </h2>
        <p className="text-[1rem] text-white/65 leading-[1.8] max-w-[560px] mx-auto mt-6">
          Converse com a equipe da Clínica Alva e receba orientações sobre
          tratamentos, indicações e horários disponíveis.
        </p>
        <div className="mt-9">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <span className="btn-gold inline-flex items-center gap-2 cursor-pointer">
              Agendar avaliação pelo WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
