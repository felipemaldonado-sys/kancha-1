import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SportProvider } from "@/lib/kancha/sport-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KANCHA — Reserva canchas de fútbol y pádel",
  description:
    "Plataforma para jugadores y dueños de canchas. Reserva, únete a partidos abiertos y gestiona tu sede.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} min-h-screen bg-kancha-bg font-sans antialiased text-white`}
      >
        <SportProvider>{children}</SportProvider>
      </body>
    </html>
  );
}
