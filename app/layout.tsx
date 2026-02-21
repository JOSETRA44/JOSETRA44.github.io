import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "José Huanaco — Economía & Tecnología",
  description:
    "Portafolio de José Gabriel Huanaco Muñoz. Estudiante de Economía en la UNSA y desarrollador de soluciones tecnológicas. Creador de UNSAP y KOLKI.",
  keywords: [
    "economía",
    "tecnología",
    "UNSA",
    "Arequipa",
    "portafolio",
    "desarrollador",
    "UNSAP",
    "KOLKI",
  ],
  authors: [{ name: "José Gabriel Huanaco Muñoz" }],
  openGraph: {
    type: "website",
    locale: "es_PE",
    title: "José Huanaco — Economía & Tecnología",
    description:
      "Estudiante de Economía en la UNSA y desarrollador de soluciones tecnológicas desde Challhuahuacho.",
    siteName: "José Huanaco Portfolio",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
