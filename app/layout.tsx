import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palomaoliveiraodontologia.com.br"),

  title: "Dra. Paloma Oliveira Odontologia | Dentista em Arujá",

  description:
    "Clínica odontológica em Arujá com atendimento humanizado, tecnologia de ponta e tratamentos personalizados para devolver saúde, estética e confiança ao seu sorriso.",

  keywords: [
    "dentista em Arujá",
    "clínica odontológica em Arujá",
    "odontologia em Arujá",
    "implante dentário",
    "clareamento dental",
    "facetas de porcelana",
    "lentes de contato dental",
    "ortodontia",
    "odontopediatria",
    "endodontia",
    "prótese dentária",
  ],

  authors: [{ name: "Dra. Paloma Oliveira" }],

  creator: "Dra. Paloma Oliveira",

  publisher: "Dra. Paloma Oliveira Odontologia",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dra. Paloma Oliveira Odontologia | Dentista em Arujá",
    description:
      "Clínica odontológica em Arujá com atendimento humanizado, tecnologia de ponta e tratamentos personalizados para devolver saúde, estética e confiança ao seu sorriso.",
    url: "https://palomaoliveiraodontologia.com.br",
    siteName: "Dra. Paloma Oliveira Odontologia",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dra. Paloma Oliveira Odontologia | Dentista em Arujá",
    description:
      "Clínica odontológica em Arujá com atendimento humanizado, tecnologia de ponta e tratamentos personalizados.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "5ltuunb1ie2eMjpGNrKyVFUDDZrImtK1WRK18KYqwVo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18196292532"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18196292532');
          `}
        </Script>

        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Dra. Paloma Oliveira Odontologia",
            url: "https://palomaoliveiraodontologia.com.br",
            telephone: "+55 11 96574-3468",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Estrada de Santa Isabel, 965B",
              addressLocality: "Arujá",
              addressRegion: "SP",
              postalCode: "07432-575",
              addressCountry: "BR",
            },
            areaServed: "Arujá",
            priceRange: "$$",
            sameAs: [
              "https://www.instagram.com/drapaloma.oliveira",
            ],
          })}
        </Script>

        {children}
      </body>
    </html>
  );
}