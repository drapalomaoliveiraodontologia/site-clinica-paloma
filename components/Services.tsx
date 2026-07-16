import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const services = [
  {
    title: "Clínico Geral",
    description: "Prevenção e cuidado contínuo para o seu sorriso.",
  },
  {
    title: "Dentística Estética",
    description: "Naturalidade e brilho em cada detalhe.",
  },
  {
    title: "Endodontia",
    description: "Preservação e conforto com precisão clínica.",
  },
  {
    title: "Ortodontia",
    description: "Alinhamento e estética com resultado duradouro.",
  },
  {
    title: "Implantodontia",
    description: "Reabilitação funcional e resultado sofisticado.",
  },
  {
    title: "Próteses",
    description: "Restauro de função e beleza com excelência.",
  },
];

export default function Services() {
  return (
    <section id="tratamentos" className={`${manrope.className} scroll-mt-24 w-full bg-[#FCFAF7]`}>
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#171717]">
            ESPECIALIDADES
          </p>
          <h2 className="text-[26px] leading-[1.15] font-[600] tracking-[-0.02em] text-[#171717] sm:text-[28px] lg:text-[30px]">
            Tratamentos completos para todas as fases do seu sorriso.
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-7 text-[#525252]">
            Atendimento personalizado com tecnologia moderna e foco na saúde, na estética e na longevidade do sorriso.
          </p>
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-2 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group border-b border-[#E8DFD3] py-4 transition-all duration-300 hover:bg-white/40"
            >
              <h3 className="text-[16px] font-[600] tracking-[-0.01em] text-[#171717]">
                {service.title}
              </h3>
              <p className="mt-1 max-w-[30rem] text-[13px] leading-6 text-[#5F5F5F]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
