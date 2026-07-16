import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const galleryImages = [
  { src: "/images/clinic-gallery.svg", alt: "Ambiente elegante da clínica", className: "h-[280px] md:h-[360px]" },
  { src: "/images/clinic-gallery.svg", alt: "Sala de atendimento premium", className: "h-[220px] md:h-[280px]" },
  { src: "/images/clinic-gallery.svg", alt: "Espaço acolhedor da clínica", className: "h-[260px] md:h-[320px]" },
  { src: "/images/clinic-gallery.svg", alt: "Detalhes da clínica", className: "h-[320px] md:h-[420px]" },
];

export default function Gallery() {
  return (
    <section className={`${manrope.className} w-full bg-[#FCFAF7]`}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#171717]">
            Galeria da Clínica
          </p>
          <h2 className="text-[28px] leading-[1.15] font-[600] tracking-[-0.02em] text-[#171717] sm:text-[32px]">
            Um ambiente pensado para acolher e inspirar confiança.
          </h2>
        </div>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="mb-6 overflow-hidden rounded-[24px] border border-[#E9E1D6] bg-[#F7F2EA] p-2 shadow-[0_12px_40px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_18px_50px_rgba(17,17,17,0.08)]">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1200}
                className={`w-full rounded-[20px] object-cover transition-transform duration-500 hover:scale-[1.03] ${image.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
