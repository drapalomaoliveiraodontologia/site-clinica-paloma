import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Clínica odontológica em Arujá com atendimento humanizado e tratamentos personalizados. Ortodontia, implantes dentários, estética dental, próteses, odontopediatria e clínica geral.",

  keywords: [
    "dentista em Arujá",
    "clínica odontológica em Arujá",
    "odontologia Arujá",
    "Dra. Paloma Oliveira",
    "implante dentário Arujá",
    "clareamento dental Arujá",
    "aparelho ortodôntico Arujá",
    "dentista perto de mim",
  ],

  authors: [
    {
      name: "Dra. Paloma Oliveira Odontologia",
    },
  ],

  creator: "Dra. Paloma Oliveira Odontologia",

  metadataBase: new URL(
    "https://site-clinica-paloma.vercel.app"
  ),

  openGraph: {
    title: "Dra. Paloma Oliveira Odontologia | Dentista em Arujá",
    description:
      "Excelência em odontologia. Atendimento humanizado, tecnologia e tratamentos personalizados para o seu sorriso.",
    url: "https://site-clinica-paloma.vercel.app",
    siteName: "Dra. Paloma Oliveira Odontologia",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}