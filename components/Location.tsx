import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Location() {
  return (
    <section id="localizacao" className={`${manrope.className} scroll-mt-24 w-full bg-[#FCFAF7]`}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[32px] border border-[#E8DFD3] bg-[#F8F2E9] shadow-[0_20px_60px_rgba(17,17,17,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#171717]">
                LOCALIZAÇÃO
              </p>
              <h2 className="mt-4 text-[26px] leading-[1.16] font-[600] tracking-[-0.02em] text-[#171717] sm:text-[30px] lg:text-[32px]">
                Encontre a clínica em um ambiente acolhedor e acessível.
              </h2>
              <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-[#525252] sm:text-[15px] sm:leading-8">
                Estamos localizados em Arujá, em uma região de fácil acesso para consultas, avaliações e tratamentos odontológicos personalizados.
              </p>

              <div className="mt-8 space-y-4 rounded-[24px] border border-[#E5DDD0] bg-white/70 p-6">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#171717]">
                    Endereço
                  </p>
                  <p className="mt-2 text-[16px] leading-7 text-[#171717]">
                    Estrada de Santa Isabel, 965B – Sala 14<br />
                    Comercial Arujazinho / Caputera<br />
                    Arujá – SP<br />
                    CEP 07432-575
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Estrada+de+Santa+Isabel%2C+965B%2C+Aruj%C3%A1+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[46px] w-full items-center justify-center rounded-full bg-[#C8A45D] px-5 text-[14px] font-[600] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B79247] sm:w-auto"
                >
                  Como chegar
                </a>
              </div>
            </div>

            <div className="border-t border-[#E8DFD3] p-4 sm:p-6 lg:border-t-0 lg:border-l lg:p-6">
              <div className="overflow-hidden rounded-[24px] border border-[#E5DDD0] bg-white">
                <iframe
                  src="https://maps.google.com/maps?q=Estrada%20de%20Santa%20Isabel%20965B%20Aruj%C3%A1%20SP&z=15&output=embed"
                  title="Localização da clínica Dra. Paloma Oliveira"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-[320px] w-full sm:h-[380px] lg:h-[460px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
