"use client";

import Link from "next/link";
import { Header } from "@/components/kancha/Header";
import { VenueCard } from "@/components/kancha/VenueCard";
import { useKancha } from "@/lib/kancha/sport-context";

export default function ReservarPage() {
  const { venues, sport } = useKancha();
  const filtered = venues.filter((v) =>
    v.courts.length === 0
      ? sport === "futbol"
      : v.courts.some((c) => c.sport === sport) ||
        (sport === "futbol" && v.sports.toLowerCase().includes("fútbol"))
  );

  const list = filtered.length > 0 ? filtered : venues;

  return (
    <div className="kancha-shell pb-10">
      <Header title="Reservar Cancha" backHref="/" />

      <main className="px-4 pt-2">
        <div className="relative overflow-hidden rounded-2xl border border-kancha-border bg-kancha-surface animate-fade-up">
          <div
            className="h-40"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 70%, rgba(85,216,105,0.25), transparent 35%),
                linear-gradient(160deg, #1a2230 0%, #12171e 100%),
                repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(255,255,255,0.03) 28px, rgba(255,255,255,0.03) 29px),
                repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.03) 28px, rgba(255,255,255,0.03) 29px)
              `,
            }}
          />
          <div className="absolute inset-x-4 top-4">
            <div className="relative">
              <span
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-red-500"
                aria-hidden
              >
                📍
              </span>
              <input
                type="search"
                placeholder="Localiza tu cancha más cercana..."
                className="w-full rounded-2xl bg-white py-3 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-kancha-green shadow-[0_0_20px_rgba(85,216,105,0.9)] animate-pulse-dot" />
        </div>

        <section className="mt-6">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-kancha-muted">
            Canchas cerca de ti
          </h2>
          <div className="space-y-4">
            {list.map((venue, i) => (
              <VenueCard
                key={venue.id}
                venue={venue}
                defaultExpanded={i === 0 && venue.availableCourts > 0}
              />
            ))}
          </div>
        </section>

        <p className="mt-6 text-center text-xs text-kancha-muted">
          ¿Eres dueño de cancha?{" "}
          <Link
            href="/partners"
            className="font-semibold text-kancha-blue hover:underline"
          >
            Gestiona tu sede en Kancha Partners
          </Link>
        </p>
      </main>
    </div>
  );
}
