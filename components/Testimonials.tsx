"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const testimonials = [
  {
    name: "João Jannetta",
    text: "Excelente atendimento desde a recepção. A Dra. Paloma explicou todo o tratamento com muita clareza e transmitiu bastante confiança.",
  },
  {
    name: "Rafaela Magron",
    text: "A clínica é linda, organizada e extremamente acolhedora. Atendimento impecável.",
  },
  {
    name: "Ana Julia",
    text: "Profissional muito cuidadosa e atenciosa. Me senti segura durante todo o procedimento.",
  },
  {
    name: "Pamela Souza",
    text: "Ambiente moderno, confortável e muito bem preparado. Recomendo sem dúvidas.",
  },
  {
    name: "Douglas Pereira",
    text: "Desde o primeiro contato pelo WhatsApp até o atendimento presencial tudo foi excelente.",
  },
  {
    name: "Monica Aparecida",
    text: "Atendimento maravilhoso, ambiente muito agradável e uma equipe extremamente atenciosa. Superou todas as minhas expectativas.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleCards = useMemo(() => {
    const total = testimonials.length;
    return Array.from({ length: total }, (_, index) => testimonials[(activeIndex + index) % total]);
  }, [activeIndex]);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    window.setTimeout(() => setIsAnimating(false), 260);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    window.setTimeout(() => setIsAnimating(false), 260);
  };

  const renderCard = (testimonial: (typeof testimonials)[number], index: number) => (
    <article
      key={`${testimonial.name}-${index}`}
      className="rounded-[24px] border border-[#E9E1D6] bg-white p-5 shadow-[0_12px_40px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_18px_50px_rgba(17,17,17,0.08)] sm:p-7"
    >
      <div className="flex gap-1 text-[16px] text-[#C8A45D]">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <span key={`${testimonial.name}-${starIndex}`}>★</span>
        ))}
      </div>
      <p className="mt-5 text-[15px] leading-7 text-[#525252]">“{testimonial.text}”</p>
      <p className="mt-6 text-[14px] font-[600] text-[#171717]">{testimonial.name}</p>
    </article>
  );

  return (
    <section id="depoimentos" className={`${manrope.className} scroll-mt-24 w-full bg-[#FCF8F3]`}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal delay={40} direction="up" className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#171717]">
              Depoimentos
            </p>
            <h2 className="text-[26px] leading-[1.15] font-[600] tracking-[-0.02em] text-[#171717] sm:text-[32px]">
              Depoimentos de nossos pacientes
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[#525252]">
              Veja o que nossos pacientes dizem sobre a experiência na clínica.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Depoimentos anteriores"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DDD0] bg-white text-[#171717] transition-colors duration-300 hover:bg-[#F4EEE7]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próximos depoimentos"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DDD0] bg-white text-[#171717] transition-colors duration-300 hover:bg-[#F4EEE7]"
            >
              →
            </button>
          </div>
        </Reveal>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {visibleCards.slice(0, 3).map((testimonial, index) => renderCard(testimonial, index))}
        </div>

        <div className="hidden gap-6 md:grid lg:hidden md:grid-cols-2">
          {visibleCards.slice(0, 2).map((testimonial, index) => renderCard(testimonial, index))}
        </div>

        <div className="grid gap-6 md:hidden">
          {visibleCards.slice(0, 1).map((testimonial, index) => renderCard(testimonial, index))}
        </div>
      </div>
    </section>
  );
}
