"use client";

import { useEffect, useState } from "react";
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
    <header className={`${manrope.className} sticky top-0 z-50 w-full border-b border-gray-100 ${isScrolled ? "bg-white/85 backdrop-blur-md" : "bg-white"}`}>
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex flex-col leading-none">
          <a href="#inicio" className="text-[16px] font-[500] tracking-[0.2em] text-black transition-colors duration-300 hover:text-gray-700">
            DRA. PALOMA OLIVEIRA
          </a>
          <span className="mt-1 text-[12px] font-medium tracking-[0.16em] text-gray-400 uppercase">
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

        <a
          href="https://wa.me/5511958768433?text=Olá!%20Encontrei%20o%20site%20da%20Dra.%20Paloma%20Oliveira%20e%20gostaria%20de%20agendar%20uma%20avaliação."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[46px] items-center rounded-full bg-[#C8A45D] px-5 text-[15px] font-[600] text-white transition-all duration-250 ease-out hover:-translate-y-[2px] hover:bg-[#B79247] hover:shadow-[0_10px_24px_rgba(200,164,93,0.25)]"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </header>
  );
}
