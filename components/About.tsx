"use client";



import { Manrope } from "next/font/google";

import Image from "next/image";

import Reveal from "@/components/Reveal";



const manrope = Manrope({

  subsets: ["latin"],

  weight: ["400", "500", "600", "700"],

});



const highlights = [

  "Atendimento humanizado",

  "Planejamento personalizado",

  "Atualização constante",

];



export default function About() {

  return (

    <section

      id="sobre"

      className={`${manrope.className} scroll-mt-24 w-full bg-[#F9F5EF]`}

    >

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:px-8 lg:py-24">



        {/* FOTO */}



        <Reveal

          direction="left"

          delay={40}

          className="flex w-full justify-center lg:w-[45%]"

        >

          <div className="relative w-full max-w-[520px]">



            <div className="absolute -left-4 -top-4 h-[110px] w-[110px] rounded-full border border-[#E5DDD0]" />



            <div className="absolute -bottom-5 -right-4 h-[130px] w-[130px] rounded-full border border-[#C8A45D] opacity-70" />



            <div className="overflow-hidden rounded-[28px] border border-[#E9E1D6] bg-white p-3 shadow-[0_25px_60px_rgba(17,17,17,.08)]">



              <Image

                src="/images/atendimento.png"

                alt="Atendimento da Dra. Paloma Oliveira"

                width={1200}

                height={900}

                priority

                className="h-[360px] w-full rounded-[22px] object-cover sm:h-[500px] lg:h-[620px]"

              />



            </div>



          </div>



        </Reveal>



        {/* TEXTO */}

        <Reveal

          direction="right"

          delay={80}

          className="w-full lg:w-[55%]"

        >



          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#C8A45D]">

            SOBRE A DRA. PALOMA

          </p>



          <h2 className="max-w-[620px] text-[30px] font-semibold leading-[1.16] tracking-[-0.03em] text-[#171717] sm:text-[34px] lg:text-[42px]">

            Conhecimento, precisão e cuidado em cada atendimento.

          </h2>



          <p className="mt-7 max-w-[640px] text-[16px] leading-[1.9] text-[#5F5F5F] sm:text-[18px]">

            A Dra. Paloma Oliveira acredita que um tratamento odontológico de

            excelência começa pela escuta, pelo planejamento individualizado e

            pelo compromisso com a saúde de cada paciente. Com atualização

            constante e atendimento humanizado, oferece tratamentos modernos,

            seguros e personalizados para devolver saúde, função e confiança ao

            seu sorriso.

          </p>



          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">



            {highlights.map((highlight) => (



              <span

                key={highlight}

                className="rounded-full border border-[#E7DED2] bg-white px-4 py-2.5 text-[13px] font-medium text-[#222222] shadow-sm transition duration-300 hover:border-[#C8A45D] sm:px-5 sm:py-3 sm:text-[14px]"

              >

                {highlight}

              </span>



            ))}



          </div>



          <a

            href="https://wa.me/5511958768433?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."

            target="_blank"

            rel="noopener noreferrer"

            className="mt-12 inline-flex h-[54px] w-full items-center justify-center rounded-full bg-[#C8A45D] px-6 text-[16px] font-semibold text-white shadow-[0_12px_30px_rgba(200,164,93,.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B89245] sm:w-auto sm:px-8 sm:text-[17px]"

          >

            Agendar pelo WhatsApp

          </a>



          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div className="rounded-[24px] border border-[#E8DED0] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,.05)]">



              <h3 className="text-[20px] font-semibold text-[#171717]">

                Atendimento Humanizado

              </h3>



              <p className="mt-3 text-[15px] leading-7 text-[#666666]">

                Cada paciente recebe um atendimento acolhedor, individualizado

                e focado nas suas necessidades e objetivos.

              </p>



            </div>



            <div className="rounded-[24px] border border-[#E8DED0] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,.05)]">



              <h3 className="text-[20px] font-semibold text-[#171717]">

                Tecnologia de Ponta

              </h3>



              <p className="mt-3 text-[15px] leading-7 text-[#666666]">

                Equipamentos modernos garantem diagnósticos precisos, maior

                conforto e tratamentos mais eficientes.

              </p>



            </div>



            <div className="rounded-[24px] border border-[#E8DED0] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,.05)]">



              <h3 className="text-[20px] font-semibold text-[#171717]">

                Planejamento Personalizado

              </h3>



              <p className="mt-3 text-[15px] leading-7 text-[#666666]">

                Cada tratamento é planejado para proporcionar estética,

                funcionalidade e resultados duradouros.

              </p>



            </div>



            <div className="rounded-[24px] border border-[#E8DED0] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,.05)]">



              <h3 className="text-[20px] font-semibold text-[#171717]">

                Atualização Constante

              </h3>



              <p className="mt-3 text-[15px] leading-7 text-[#666666]">

                A busca contínua por conhecimento permite oferecer técnicas

                atuais, seguras e baseadas em evidências.

              </p>



            </div>



          </div>



        </Reveal>

      </div>

    </section>

  );

}