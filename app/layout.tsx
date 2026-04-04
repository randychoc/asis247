import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
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
    icon: [{ url: "/asis247_icono.svg", type: "image/svg+xml" }],
    apple: "/asis247_icono.svg",
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
      </body>
    </html>
  );
}
