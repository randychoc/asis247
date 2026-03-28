import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asis24/7 - Asistencia Vial, Cerrajería y Mecánica 24 Horas",
  description:
    "Servicio de asistencia vial, cerrajería y mecánica para carros y motos. Disponible 24/7. Llámanos ahora: 4633-0869 o 5617-8837. Respuesta inmediata.",
  keywords:
    "asistencia vial, cerrajería, mecánico, 24 horas, emergencia, grúa, llaves, carros, motos",
  generator: "v0.app",
  openGraph: {
    title: "Asis24/7 - Asistencia Vial, Cerrajería y Mecánica",
    description:
      "Servicio de emergencia 24/7. Llámanos ahora para asistencia inmediata.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a7dbc",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${_geist.className} antialiased`}>
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
