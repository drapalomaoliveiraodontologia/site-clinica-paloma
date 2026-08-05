"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navItems = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Especialidades", href: "#especialidades", id: "especialidades" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Depoimentos", href: "#depoimentos", id: "depoimentos" },
  { label: "Localização", href: "#localizacao", id: "localizacao" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export default function Header() {
  const [activeId, setActiveId] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const offset = 140;
      let current = "inicio";
      setIsScrolled(window.scrollY > 12);

      sections.forEach((section) => {
        const top = section.offsetTop - offset;
        if (window.scrollY >= top) {
          current = section.id;
        }
      });

      setActiveId(current);
    };

    document.documentElement.style.scrollBehavior = "smooth";
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`${manrope.className} sticky top-0 z-50 w-full border-b border-gray-100 ${
        isScrolled ? "bg-white/85 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-col leading-none">
          <a
            href="#inicio"
            className="truncate text-[14px] font-[500] tracking-[0.2em] text-black transition-colors duration-300 hover:text-gray-700 sm:text-[16px]"
          >
            DRA. PALOMA OLIVEIRA
          </a>
          <span className="mt-1 text-[10px] font-medium tracking-[0.16em] text-gray-400 uppercase sm:text-[12px]">
            Odontologia
          </span>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-[15px] font-medium transition-all duration-300 ${
                  isActive ? "text-black" : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/5511958768433?text=Olá!%20Encontrei%20o%20site%20da%20Dra.%20Paloma%20Oliveira%20e%20gostaria%20de%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-[46px] items-center rounded-full bg-[#C8A45D] px-5 text-[15px] font-[600] text-white transition-all duration-250 ease-out hover:-translate-y-[2px] hover:bg-[#B79247] hover:shadow-[0_10px_24px_rgba(200,164,93,0.25)] md:inline-flex"
          >
            Agendar pelo WhatsApp
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5DDD0] bg-white text-[#171717] md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#E8DFD3] bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-3 text-[15px] font-medium ${
                  activeId === item.id ? "text-black" : "text-gray-600"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://wa.me/5511958768433?text=Olá!%20Encontrei%20o%20site%20da%20Dra.%20Paloma%20Oliveira%20e%20gostaria%20de%20agendar%20uma%20avaliação."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex h-[46px] items-center justify-center rounded-full bg-[#C8A45D] px-5 text-[15px] font-[600] text-white"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
