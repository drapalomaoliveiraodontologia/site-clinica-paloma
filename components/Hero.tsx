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

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">



        <div className="grid items-center gap-16 lg:grid-cols-2">



          {/* =========================

              LADO ESQUERDO

          ========================= */}



          <div className="relative z-10">



            <span className="inline-block text-[17px] font-medium uppercase tracking-[0.22em] text-[#C8A45A]">

              CLÍNICA ODONTOLÓGICA • ARUJÁ

            </span>



            <h1 className="mt-8 text-[62px] font-light leading-[0.92] tracking-[-0.04em] text-[#1B1B1B] lg:text-[78px]">

              Seu sorriso

              <br />

              merece

              <br />

              <span className="font-semibold text-[#C8A45A]">

                excelência.

              </span>

            </h1>



            <p className="mt-10 max-w-[560px] text-[20px] leading-[1.8] text-[#616161]">

              Tratamentos personalizados, tecnologia de ponta e um cuidado

              pensado para devolver saúde, estética e confiança ao seu sorriso.

            </p>



            <div className="mt-12 flex flex-wrap gap-5">

              <Link

                href="https://wa.me/5511958768433"

                target="_blank"

                className="inline-flex h-[62px] items-center rounded-full bg-[#C8A45A] px-9 text-[18px] font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#B8903F] hover:scale-[1.02]"

              >

                Agendar pelo WhatsApp

                <ArrowRight className="ml-3 h-5 w-5" />

              </Link>



              <Link

                href="#localizacao"

                className="inline-flex h-[62px] items-center rounded-full border border-[#DCC7A3] bg-white px-9 text-[18px] font-medium text-[#222222] transition-all duration-300 hover:border-[#C8A45A] hover:text-[#C8A45A]"

              >

                Nossa localização

              </Link>



            </div>



            <div className="mt-14 flex flex-wrap items-center gap-8">



              <div className="flex items-center gap-3">

                <Star className="h-5 w-5 fill-[#C8A45A] text-[#C8A45A]" />

                <span className="text-[17px] tracking-[0.18em] text-[#222222]">

                  ★★★★★

                </span>

              </div>



              <div className="h-6 w-px bg-[#D9D1C5]" />



              <div className="flex items-center gap-3">

                <MapPin className="h-5 w-5 text-[#C8A45A]" />

                <span className="text-[17px] font-medium text-[#222222]">

                  Arujá • SP

                </span>

              </div>



              <div className="h-6 w-px bg-[#D9D1C5]" />



              <span className="text-[17px] font-medium text-[#222222]">

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

                h-[720px]

                w-full

                max-w-[620px]

                overflow-hidden

                rounded-[38px]

                bg-white

                shadow-[0_35px_90px_rgba(0,0,0,.12)]

              "

            >



              <Image

                src="/images/recepcao.png"

                alt="Recepção da Dra. Paloma Oliveira"

                fill

                priority

                sizes="(min-width:1024px) 55vw,100vw"

                className="object-cover object-center transition duration-700 hover:scale-[1.02]"

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



        <div className="mt-20">



          <div className="overflow-hidden rounded-[34px] border border-[#E9DDCB] bg-white shadow-[0_18px_50px_rgba(0,0,0,.06)]">



            <div className="grid md:grid-cols-4">

              {/* CARD 1 */}



              <div className="flex flex-col items-center justify-center px-10 py-10 text-center">



                <Star className="mb-4 h-8 w-8 fill-[#C8A45A] text-[#C8A45A]" />



                <h3 className="text-[24px] font-bold text-[#1B1B1B]">

                  Excelência

                </h3>



                <p className="mt-2 text-[16px] text-[#6A6A6A]">

                  Atendimento Premium

                </p>



              </div>



              {/* CARD 2 */}



              <div className="flex flex-col items-center justify-center border-l border-[#EEE5D7] px-10 py-10 text-center">



                <MapPin className="mb-4 h-8 w-8 text-[#C8A45A]" />



                <h3 className="text-[24px] font-bold text-[#1B1B1B]">

                  Arujá • SP

                </h3>



                <p className="mt-2 text-[16px] text-[#6A6A6A]">

                  Estrada de Santa Isabel, 965B

                </p>



              </div>



              {/* CARD 3 */}



              <div className="flex flex-col items-center justify-center border-l border-[#EEE5D7] px-10 py-10 text-center">



                <ShieldCheck className="mb-4 h-8 w-8 text-[#C8A45A]" />



                <h3 className="text-[24px] font-bold text-[#1B1B1B]">

                  CRO-SP 144.973

                </h3>



                <p className="mt-2 text-[16px] text-[#6A6A6A]">

                  Atendimento Humanizado

                </p>



              </div>



              {/* CARD 4 */}



              <div className="flex flex-col items-center justify-center border-l border-[#EEE5D7] px-10 py-10 text-center">



                <Sparkles className="mb-4 h-8 w-8 text-[#C8A45A]" />



                <h3 className="text-[24px] font-bold text-[#1B1B1B]">

                  Tecnologia

                </h3>



                <p className="mt-2 text-[16px] text-[#6A6A6A]">

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