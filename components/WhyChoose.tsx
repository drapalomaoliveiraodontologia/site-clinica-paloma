import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const reasons = [
  {
    title: "Atendimento humanizado",
    description:
      "Cada paciente recebe atenção individual e um plano de tratamento pensado para suas necessidades.",
  },
  {
    title: "Tecnologia moderna",
    description:
      "Equipamentos atuais que proporcionam diagnósticos mais precisos e tratamentos mais seguros.",
  },
  {
    title: "Planejamento personalizado",
    description:
      "Cada sorriso é tratado de forma única, buscando equilíbrio entre saúde, função e estética.",
  },
  {
    title: "Ambiente acolhedor",
    description:
      "Um espaço moderno, confortável e preparado para oferecer tranquilidade desde a primeira consulta.",
  },
];

export default function WhyChoose() {
  return (
    <section className={`${manrope.className} w-full bg-[#FCFAF7]`}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#171717]">
            POR QUE NOS ESCOLHER
          </p>
          <h2 className="text-[28px] leading-[1.18] font-[600] tracking-[-0.02em] text-[#171717] sm:text-[30px] lg:text-[32px]">
            Cuidado pensado para oferecer uma experiência acima do esperado.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#525252]">
            Atendimento humanizado, tecnologia moderna e planejamento personalizado para proporcionar tratamentos seguros, confortáveis e duradouros.
          </p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-3 border-t border-[#E8DFD3] md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className={`py-6 ${index < 2 ? "md:border-b md:border-[#E8DFD3]" : "border-b border-[#E8DFD3]"}`}
            >
              <div className="mb-3 h-[1px] w-10 bg-[#C8A45D]" />
              <h3 className="text-[16px] font-[600] tracking-[-0.01em] text-[#171717]">
                {reason.title}
              </h3>
              <p className="mt-2 max-w-[32rem] text-[14px] leading-6 text-[#5F5F5F]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
