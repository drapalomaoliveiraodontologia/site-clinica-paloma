import { Manrope } from "next/font/google";
import Reveal from "@/components/Reveal";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer
      id="contato"
      className={`${manrope.className} scroll-mt-24 w-full border-t border-[#E8DFD3] bg-[#F7F3EC]`}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <Reveal
          delay={40}
          direction="up"
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >

          <div className="max-w-sm">
            <p className="text-[18px] font-[600] tracking-[0.16em] text-[#171717]">
              Dra. Paloma Oliveira
              <br />
              Odontologia
            </p>

            <p className="mt-4 text-[14px] leading-7 text-[#5F5F5F]">
              Odontologia moderna com foco em saúde, estética e atendimento
              humanizado em Arujá.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#171717]">
              Contato
            </p>

            <ul className="mt-4 space-y-3 text-[14px] text-[#5F5F5F]">
              <li>
                <span className="block text-[#171717]">
                  Telefone / WhatsApp
                </span>

                <a
                  href="https://wa.me/5511958768433?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#171717]"
                >
                  (11) 95876-8433
                </a>
              </li>

              <li>
                <span className="block text-[#171717]">Email</span>

                <a
                  href="mailto:dra.palomaoliveira.odontologia@gmail.com"
                  className="transition-colors hover:text-[#171717]"
                >
                  dra.palomaoliveira.odontologia@gmail.com
                </a>
              </li>

              <li>
                <span className="block text-[#171717]">Instagram</span>

                <a
                  href="https://instagram.com/palomaoliveira.odontologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#171717]"
                >
                  @palomaoliveira.odontologia
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/5511958768433?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-[46px] w-full items-center justify-center rounded-full bg-[#C8A45D] px-5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B79247] sm:w-auto"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#171717]">
              Endereço
            </p>

            <ul className="mt-4 space-y-3 text-[14px] leading-7 text-[#5F5F5F]">
              <li>Estrada de Santa Isabel, 965B - Sala 14</li>
              <li>Comercial Arujazinho</li>
              <li>Caputera</li>
              <li>Arujá - SP</li>
              <li>CEP 07432-575</li>
            </ul>

            <a
              href="https://maps.google.com/?q=Estrada+de+Santa+Isabel+965B+Aruja"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-[46px] w-full items-center justify-center rounded-full border border-[#E5DDD0] bg-white px-5 text-[14px] font-medium text-[#171717] transition-all duration-300 hover:bg-[#F4EEE7] sm:w-auto"
            >
              Como chegar
            </a>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#171717]">
              Horário
            </p>

            <ul className="mt-4 space-y-3 text-[14px] leading-7 text-[#5F5F5F]">
              <li>
                <span className="block text-[#171717]">
                  Segunda a Sexta
                </span>

                09:00 às 18:00
              </li>

              <li>
                <span className="block text-[#171717]">
                  Sábado
                </span>

                08:00 às 12:00
              </li>

              <li>
                <span className="block text-[#171717]">
                  Domingo
                </span>

                Fechado
              </li>
            </ul>
          </div>

        </Reveal>

        <Reveal
          delay={80}
          direction="up"
          className="mt-12 border-t border-[#E8DFD3] pt-6 text-[13px] leading-7 text-[#5F5F5F]"
        >
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <span>
              © 2026 Dra. Paloma Oliveira Odontologia. Todos os direitos reservados.
            </span>

            <span>
              Responsável Técnica: Dra. Paloma Oliveira
            </span>
          </div>

          <div className="mt-2 flex flex-col gap-2 md:flex-row md:justify-between">
            <span>CRO-SP 144.973</span>

            <span>CNPJ 63.788.381/0001-35</span>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}