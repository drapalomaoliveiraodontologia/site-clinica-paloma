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
    "Clínica odontológica em Arujá com atendimento personalizado. Tratamentos em ortodontia, implantes, estética dental, próteses e odontopediatria.",

  keywords: [
    "dentista em Arujá",
    "clínica odontológica em Arujá",
    "odontologista Arujá",
    "ortodontia Arujá",
    "implante dentário Arujá",
    "clareamento dental Arujá",
    "Dra. Paloma Oliveira",
  ],

  authors: [
    {
      name: "Dra. Paloma Oliveira Odontologia",
    },
  ],

  creator: "Dra. Paloma Oliveira Odontologia",

  openGraph: {
    title: "Dra. Paloma Oliveira Odontologia | Dentista em Arujá",
    description:
      "Excelência em odontologia. Atendimento humanizado e tratamentos personalizados para transformar seu sorriso.",
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