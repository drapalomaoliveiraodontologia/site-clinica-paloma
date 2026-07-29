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
  title: "Dra. Paloma Oliveira Odontologia | Dentista em Arujá",
  description:
    "Clínica odontológica em Arujá com atendimento humanizado, tecnologia de ponta e tratamentos personalizados para devolver saúde, estética e confiança ao seu sorriso.",

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

        {children}
      </body>
    </html>
  );
}