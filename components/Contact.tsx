import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const contactItems = [
  {
    title: "WhatsApp",
    value: "(11) 95876-8433",
    href: "https://wa.me/5511958768433?text=Olá!%20Encontrei%20o%20site%20da%20Dra.%20Paloma%20Oliveira%20e%20gostaria%20de%20agendar%20uma%20avaliação.",
  },
  {
    title: "Telefone",
    value: "(11) 95876-8433",
    href: "tel:+5511958768433",
  },
  {
    title: "Email",
    value: "dra.palomaoliveira.odontologia@gmail.com",
    href: "mailto:dra.palomaoliveira.odontologia@gmail.com",
  },
  {
    title: "Instagram",
    value: "@palomaoliveira.odontologia",
    href: "https://www.instagram.com/palomaoliveira.odontologia",
  },
];

export default function Contact() {
  return (
    <section id="contato" className={`${manrope.className} scroll-mt-24 w-full bg-[#FCFAF7]`}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[32px] border border-[#E8DFD3] bg-[#F8F2E9] shadow-[0_20px_60px_rgba(17,17,17,0.08)]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#171717]">
                  CONTATO
                </p>
                <h2 className="mt-4 text-[28px] leading-[1.16] font-[600] tracking-[-0.02em] text-[#171717] sm:text-[30px] lg:text-[32px]">
                  Entre em contato para agendar sua avaliação.
                </h2>
                <p className="mt-5 max-w-[560px] text-[15px] leading-8 text-[#525252]">
                  Atendimento personalizado, acolhimento e soluções odontológicas com excelência clínica em Arujá.
                </p>
              </div>

              <a
                href="https://wa.me/5511958768433?text=Olá!%20Encontrei%20o%20site%20da%20Dra.%20Paloma%20Oliveira%20e%20gostaria%20de%20agendar%20uma%20avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-[48px] w-fit items-center justify-center rounded-full bg-[#C8A45D] px-6 text-[15px] font-[600] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B79247]"
              >
                Falar pelo WhatsApp
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-[24px] border border-[#E5DDD0] bg-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,17,0.08)]"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#171717]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[#525252]">{item.value}</p>
                </a>
              ))}

              <div className="rounded-[24px] border border-[#E5DDD0] bg-white/80 p-5 sm:col-span-2">
                <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#171717]">
                  Horário de atendimento
                </p>
                <p className="mt-2 text-[15px] leading-7 text-[#525252]">
                  Segunda a Sexta: 09:00 às 18:00<br />
                  Sábado: 08:00 às 12:00<br />
                  Domingo: Fechado
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E5DDD0] bg-white/80 p-5 sm:col-span-2">
                <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#171717]">
                  Endereço
                </p>
                <p className="mt-2 text-[15px] leading-7 text-[#525252]">
                  Estrada de Santa Isabel, 965B – Sala 14<br />
                  Comercial Arujazinho / Caputera<br />
                  Arujá – SP<br />
                  CEP 07432-575
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
