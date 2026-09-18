"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-sm shadow-[0_1px_20px_rgba(28,28,26,0.07)]"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="#inicio" className="flex flex-col leading-none">
            <span className="font-heading font-semibold text-xl md:text-2xl text-[#1C1C1A]">
              Clínica Alva
            </span>
            <span className="text-[0.62rem] tracking-[0.22em] uppercase text-[#7D5E10] mt-1">
              Estética &amp; Laser
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                <span className="nav-link">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:block"
            >
              <span className="btn-gold cursor-pointer">Agendar avaliação</span>
            </a>
            <button
              className="xl:hidden p-2 text-[#1C1C1A]"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="xl:hidden border-t border-[#E8E0D5] bg-[#FAF7F2]">
          <nav className="container flex flex-col py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="min-h-11 flex items-center"
              >
                <span className="nav-link block">{link.label}</span>
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <span className="btn-gold inline-flex w-full justify-center mt-3">
                Agendar avaliação
              </span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
