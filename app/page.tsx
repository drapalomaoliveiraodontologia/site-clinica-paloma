import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Header />

        <section id="inicio">
          <Hero />
        </section>

        <section id="especialidades">
          <Treatments />
        </section>

        <section id="sobre">
          <About />
        </section>

        <section id="diferenciais">
          <WhyChoose />
        </section>

        <section id="depoimentos">
          <Testimonials />
        </section>

        <section id="localizacao">
          <Location />
        </section>

        <Footer />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Dra. Paloma Oliveira Odontologia",
            description:
              "Clínica odontológica em Arujá com atendimento humanizado e tratamentos personalizados.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Arujá",
              addressRegion: "SP",
              addressCountry: "BR",
            },
            areaServed: "Arujá - SP",
            medicalSpecialty: [
              "Ortodontia",
              "Implantodontia",
              "Odontopediatria",
              "Estética Dental",
            ],
          }),
        }}
      />
    </>
  );
}