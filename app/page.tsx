import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Treatments />
      <About />
      <WhyChoose />
      <Testimonials />
      <Location />
      <Footer />

      {/* BOTÃO WHATSAPP */}

      <a
        href="https://wa.me/5511958768433?text=Olá!%20Encontrei%20o%20site%20da%20Dra.%20Paloma%20Oliveira%20e%20gostaria%20de%20agendar%20uma%20avaliação."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105"
      >
        <svg
          viewBox="0 0 448 512"
          className="h-8 w-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M380.9 97.1C339-1.1 233.3-30.2 143.2 10.8 53.1 51.8 9.6 157.5 50.6 247.6l-26.9 98.5 101.1-26.5c88.1 48.1 198.2 15.7 246.3-72.4 48.1-88.1 15.7-198.2-72.4-246.1zM224 370c-31.1 0-61.5-8.3-87.9-24l-6.3-3.8-59.9 15.7 16-58.3-4.1-6.5c-18.2-28.7-27.8-61.9-27.8-95.6 0-99.4 80.9-180.3 180.3-180.3 48.1 0 93.3 18.8 127.3 52.9 34 34 52.8 79.2 52.8 127.3-.1 99.4-81 172.6-190.4 172.6zm101-134.9c-5.5-2.8-32.7-16.1-37.8-17.9-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.4 17.9-17.7 21.6-3.3 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27-16.3-14.5-27.3-32.4-30.5-37.9-3.2-5.5-.3-8.5 2.5-11.3 2.6-2.6 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.2-17.1-41.4-4.5-10.9-9.1-9.4-12.5-9.6-3.2-.2-7-.2-10.7-.2s-9.8 1.4-14.9 7c-5.1 5.6-19.5 19.1-19.5 46.5s20 53.9 22.8 57.6c2.8 3.7 39.4 60.2 95.5 84.4 35.5 15.3 49.4 16.6 67.1 14 10.8-1.6 32.7-13.3 37.3-26.2 4.6-12.9 4.6-24 3.2-26.2-1.3-2.4-5-3.8-10.5-6.6z" />
        </svg>
      </a>
    </main>
  );
}