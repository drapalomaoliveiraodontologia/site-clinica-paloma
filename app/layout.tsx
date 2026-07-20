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
        {children}
      </body>
    </html>
  );
}