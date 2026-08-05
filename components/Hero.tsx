"use client";



import Image from "next/image";

import Link from "next/link";

import {

  ArrowRight,

  MapPin,

  Star,

  ShieldCheck,

  Sparkles,

} from "lucide-react";



export default function Hero() {

  return (

    <section

      id="inicio"

      className="relative overflow-hidden bg-gradient-to-b from-[#F7F4EE] via-[#FBF9F6] to-white"

    >

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">



        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16">



          {/* =========================

              LADO ESQUERDO

          ========================= */}



          <div className="relative z-10">



            <span className="inline-block text-[12px] font-medium uppercase tracking-[0.22em] text-[#C8A45A] sm:text-[14px] lg:text-[17px]">

              CLÍNICA ODONTOLÓGICA • ARUJÁ

            </span>



            <h1 className="mt-8 text-[40px] font-light leading-[0.92] tracking-[-0.04em] text-[#1B1B1B] sm:text-[50px] md:text-[62px] lg:text-[78px]">

              Seu sorriso

              <br />

              merece

              <br />

              <span className="font-semibold text-[#C8A45A]">

                excelência.

              </span>

            </h1>



            <p className="mt-10 max-w-[560px] text-[16px] leading-[1.8] text-[#616161] sm:text-[18px] lg:text-[20px]">

              Tratamentos personalizados, tecnologia de ponta e um cuidado

              pensado para devolver saúde, estética e confiança ao seu sorriso.

            </p>



            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">

              <Link

                href="https://wa.me/5511958768433"

                target="_blank"

                className="inline-flex h-[56px] w-full items-center justify-center rounded-full bg-[#C8A45A] px-6 text-[16px] font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#B8903F] hover:scale-[1.02] sm:h-[62px] sm:w-auto sm:px-9 sm:text-[18px]"

              >

                Agendar pelo WhatsApp

                <ArrowRight className="ml-3 h-5 w-5" />

              </Link>



              <Link

                href="#localizacao"

                className="inline-flex h-[56px] w-full items-center justify-center rounded-full border border-[#DCC7A3] bg-white px-6 text-[16px] font-medium text-[#222222] transition-all duration-300 hover:border-[#C8A45A] hover:text-[#C8A45A] sm:h-[62px] sm:w-auto sm:px-9 sm:text-[18px]"

              >

                Nossa localização

              </Link>



            </div>



            <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">



              <div className="flex items-center gap-3">

                <Star className="h-5 w-5 fill-[#C8A45A] text-[#C8A45A]" />

                <span className="text-[15px] tracking-[0.18em] text-[#222222] sm:text-[17px]">

                  ★★★★★

                </span>

              </div>



              <div className="hidden h-6 w-px bg-[#D9D1C5] sm:block" />



              <div className="flex items-center gap-3">

                <MapPin className="h-5 w-5 text-[#C8A45A]" />

                <span className="text-[15px] font-medium text-[#222222] sm:text-[17px]">

                  Arujá • SP

                </span>

              </div>



              <div className="hidden h-6 w-px bg-[#D9D1C5] sm:block" />



              <span className="text-[15px] font-medium text-[#222222] sm:text-[17px]">

                Atendimento Humanizado

              </span>



            </div>



          </div>



          {/* =========================

              LADO DIREITO

          ========================= */}



          <div className="relative flex justify-end">



            <div

              className="

                relative

                h-[420px]

                w-full

                max-w-[620px]

                sm:h-[520px]

                lg:h-[720px]

                overflow-hidden

                rounded-[38px]

                bg-white

                shadow-[0_35px_90px_rgba(0,0,0,.12)]

              "

            >



              <img

                src="/images/recepcao.png"

                alt="Recepção da Dra. Paloma Oliveira"

                className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]"

              />



              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/10 to-transparent" />



              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/10 via-transparent to-transparent" />



              <div className="absolute inset-0 rounded-[38px] ring-1 ring-[#E8DCC8] ring-inset" />



            </div>



          </div>



        </div>



        {/* =========================

            CARDS PREMIUM

        ========================= */}



        <div className="mt-12 sm:mt-20">



          <div className="overflow-hidden rounded-[34px] border border-[#E9DDCB] bg-white shadow-[0_18px_50px_rgba(0,0,0,.06)]">



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

              {/* CARD 1 */}



              <div className="flex flex-col items-center justify-center px-6 py-8 text-center sm:px-10 sm:py-10">



                <Star className="mb-4 h-8 w-8 fill-[#C8A45A] text-[#C8A45A]" />



                <h3 className="text-[20px] font-bold text-[#1B1B1B] sm:text-[24px]">

                  Excelência

                </h3>



                <p className="mt-2 text-[14px] text-[#6A6A6A] sm:text-[16px]">

                  Atendimento Premium

                </p>



              </div>



              {/* CARD 2 */}



              <div className="flex flex-col items-center justify-center border-t border-[#EEE5D7] px-6 py-8 text-center sm:px-10 sm:py-10 md:border-l md:border-t-0">



                <MapPin className="mb-4 h-8 w-8 text-[#C8A45A]" />



                <h3 className="text-[20px] font-bold text-[#1B1B1B] sm:text-[24px]">

                  Arujá • SP

                </h3>



                <p className="mt-2 text-[14px] text-[#6A6A6A] sm:text-[16px]">

                  Estrada de Santa Isabel, 965B

                </p>



              </div>



              {/* CARD 3 */}



              <div className="flex flex-col items-center justify-center border-t border-[#EEE5D7] px-6 py-8 text-center sm:px-10 sm:py-10 md:border-l md:border-t-0">



                <ShieldCheck className="mb-4 h-8 w-8 text-[#C8A45A]" />



                <h3 className="text-[20px] font-bold text-[#1B1B1B] sm:text-[24px]">

                  CRO-SP 144.973

                </h3>



                <p className="mt-2 text-[14px] text-[#6A6A6A] sm:text-[16px]">

                  Atendimento Humanizado

                </p>



              </div>



              {/* CARD 4 */}



              <div className="flex flex-col items-center justify-center border-t border-[#EEE5D7] px-6 py-8 text-center sm:px-10 sm:py-10 md:border-l md:border-t-0">



                <Sparkles className="mb-4 h-8 w-8 text-[#C8A45A]" />



                <h3 className="text-[20px] font-bold text-[#1B1B1B] sm:text-[24px]">

                  Tecnologia

                </h3>



                <p className="mt-2 text-[14px] text-[#6A6A6A] sm:text-[16px]">

                  Equipamentos modernos

                </p>



              </div>



            </div>



          </div>



        </div>

      </div>



    </section>



  );

}