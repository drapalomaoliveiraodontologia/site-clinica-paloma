import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",

    name: "Dra. Paloma Oliveira Odontologia",

    image:
      "https://site-clinica-paloma.vercel.app/images/recepcao.png",

    url:
      "https://site-clinica-paloma.vercel.app",

    description:
      "Clínica odontológica em Arujá com atendimento humanizado, tecnologia e tratamentos personalizados para devolver saúde, estética e confiança ao sorriso.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Arujá",
      addressRegion: "SP",
      addressCountry: "BR",
    },

    areaServed: [
      "Arujá",
      "Mogi das Cruzes",
      "Santa Isabel",
      "Itaquaquecetuba",
    ],

    priceRange: "$$",

    medicalSpecialty: [
      "Ortodontia",
      "Implantodontia",
      "Odontopediatria",
      "Dentística",
      "Endodontia",
      "Próteses Dentárias",
      "Estética Dental",
    ],

    sameAs: [
      "https://www.instagram.com/palomaoliveira.odontologia/",
    ],
  };


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
          __html: JSON.stringify(schema),
        }}
      />

    </>
  );
}