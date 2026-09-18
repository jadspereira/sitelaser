import { WHATSAPP_URL } from "./data";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <>
      <div className="bg-[#1C1C1A]">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="font-heading font-semibold text-2xl text-white">
                Clínica Alva
              </span>
              <span className="block text-[0.62rem] tracking-[0.22em] uppercase text-[#C9A96E] mt-1 mb-5">
                Estética &amp; Laser
              </span>
              <p className="text-[0.85rem] text-white/45 leading-[1.85]">
                Tratamentos faciais, corporais e a laser com avaliação
                individual, tecnologia e acompanhamento em todas as etapas.
              </p>
            </div>

            <div>
              <h4 className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/50 mb-5">
                Navegação
              </h4>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>
                      <span className="text-[0.85rem] text-white/45 transition-colors hover:text-[#C9A96E] block">
                        {l.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/50 mb-5">
                Contato
              </h4>
              <p className="text-[0.85rem] text-white/45 leading-[1.7]">
                Rua Sergipe, 1440 — Savassi
                <br />
                Belo Horizonte — MG
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[0.85rem] text-white/45 mt-3 transition-colors hover:text-[#C9A96E]"
              >
                (31) 99742-6185 — WhatsApp
              </a>
              <p className="text-[0.8rem] text-white/35 mt-3 leading-[1.7]">
                Segunda a sexta, das 9h às 19h
                <br />
                Sábado, das 9h às 14h
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-white/[0.06]">
            <p className="text-[0.78rem] text-white/35">
              © 2026 Clínica Alva. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-[#141412] border-t border-white/[0.05]"
        style={{ padding: "0.85rem 0" }}
      >
        <div className="container">
          <p className="text-[0.65rem] text-white/[0.18] leading-[1.7] m-0 text-center">
            Os tratamentos oferecidos pela Clínica Alva possuem indicações e
            contraindicações próprias, avaliadas individualmente antes de
            qualquer procedimento. Resultados variam conforme características
            individuais. Conteúdo, nomes e imagens deste site têm caráter
            demonstrativo.
          </p>
        </div>
      </div>
    </>
  );
}
