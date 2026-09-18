import { MapPin } from "lucide-react";
import { FadeUp } from "../shared/FadeUp";
import { MAPS_URL, WHATSAPP_URL } from "./data";

export function LocationSection() {
  return (
    <section id="contato" className="bg-[#F2EDE4]" style={{ padding: "6rem 0" }}>
      <div className="container">
        <FadeUp className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-rule" />
              <span className="section-label">Localização</span>
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,2.6vw+1rem,3.25rem)] text-[#1C1C1A] leading-[1.15] mb-8">
              Cuidado e tecnologia na Savassi
            </h2>

            <div className="flex items-start gap-3 mb-6">
              <MapPin size={20} className="text-[#C9A96E] shrink-0 mt-1" />
              <div>
                <div className="font-bold text-[1rem] text-[#1C1C1A]">
                  Clínica Alva — Estética &amp; Laser
                </div>
                <p className="text-[0.92rem] text-[#5A5652] leading-[1.7] mt-1">
                  Rua Sergipe, 1440 — Savassi
                  <br />
                  Belo Horizonte — MG
                </p>
              </div>
            </div>

            <div className="border-t border-[#D8CFC4] pt-6 mt-6">
              <div className="text-[0.85rem] text-[#1C1C1A] font-semibold mb-1">
                Horários de atendimento
              </div>
              <p className="text-[0.9rem] text-[#5A5652] leading-[1.8]">
                Segunda a sexta, das 9h às 19h
                <br />
                Sábado, das 9h às 14h
              </p>
              <p className="text-[0.8rem] text-[#5A5652]/80 mt-2">
                Atendimento com horário marcado.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-9">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <span className="btn-outline-dark inline-flex items-center gap-2">
                  Traçar rota
                </span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <span className="btn-gold inline-flex items-center gap-2 cursor-pointer">
                  Agendar pelo WhatsApp
                </span>
              </a>
            </div>
          </div>

          <div className="w-full h-[360px] md:h-[460px] border border-[#D8CFC4] overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Rua%20Sergipe%2C%201440%2C%20Savassi%2C%20Belo%20Horizonte%20MG&output=embed"
              title="Mapa da localização ilustrativa da Clínica Alva na Savassi"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
