import { Manrope } from "next/font/google";
import Reveal from "@/components/Reveal";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const treatments = [
  {
    title: "Implantes Dentários",
    description: "Solucões funcionais e estéticas para restaurar confiança e mobilidade ao sorriso.",
    icon: "✦",
  },
  {
    title: "Ortodontia",
    description: "Alinhamento preciso e planejamento sofisticado para uma estética natural.",
    icon: "◌",
  },
  {
    title: "Clínica Geral",
    description: "Cuidado preventivo e acompanhamento completo para saúde oral de longo prazo.",
    icon: "◍",
  },
  {
    title: "Endodontia (Canal)",
    description: "Tratamento conservador e seguro para preservar dentes e aliviar desconfortos.",
    icon: "✧",
  },
  {
    title: "Prótese Dentária",
    description: "Restauro refinado para função, conforto e beleza do sorriso.",
    icon: "⬢",
  },
  {
    title: "Estética Dental",
    description: "Tratamentos elegantes para brilho, harmonia e valorização do sorriso.",
    icon: "✺",
  },
];

export default function Treatments() {
  return (
    <section id="especialidades" className={`${manrope.className} scroll-mt-24 w-full bg-[#FCFAF7]`}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <Reveal delay={40} direction="up" className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#171717]">
            Tratamentos
          </p>
          <h2 className="text-[30px] leading-[1.15] font-[600] tracking-[-0.02em] text-[#171717] sm:text-[34px] lg:text-[36px]">
            Cuidado completo para todas as fases do seu sorriso.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <Reveal key={treatment.title} delay={120 + index * 80} direction="up">
              <article className="group rounded-[24px] border border-[#E9E1D6] bg-white p-7 shadow-[0_12px_40px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_18px_50px_rgba(17,17,17,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5DDD0] bg-[#F7F2EA] text-[20px] text-[#C8A45D] transition-transform duration-300 group-hover:scale-105">
                  {treatment.icon}
                </div>
                <h3 className="mt-6 text-[18px] font-[600] tracking-[-0.01em] text-[#171717]">
                  {treatment.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-[#5F5F5F]">
                  {treatment.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
