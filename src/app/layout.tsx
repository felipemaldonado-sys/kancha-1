import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { KanchaProvider } from "@/lib/kancha/sport-context";
import "./globals.css";

const outfit = Outfit({
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
        className={`${outfit.variable} min-h-screen bg-kancha-bg font-sans antialiased text-white`}
      >
        <KanchaProvider>{children}</KanchaProvider>
      </body>
    </html>
  );
}
