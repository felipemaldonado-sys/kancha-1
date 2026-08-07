import Link from "next/link";
import { Header } from "@/components/kancha/Header";
import { VenueCard } from "@/components/kancha/VenueCard";
import { VENUES } from "@/lib/kancha/data";

export default function ReservarPage() {
  return (
    <div className="mx-auto min-h-screen max-w-lg pb-10">
      <Header title="Reservar Cancha" backHref="/" />

      <main className="px-4 pt-4">
        <div className="relative overflow-hidden rounded-2xl border border-kancha-border bg-kancha-surface">
          <div
            className="h-36 bg-gradient-to-br from-kancha-card via-kancha-surface to-kancha-bg"
            style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(163,230,53,0.08) 0%, transparent 50%),
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 21px)
              `,
            }}
          />
          <div className="absolute inset-x-4 top-4">
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                📍
              </span>
              <input
                type="search"
                placeholder="Localiza tu cancha más cercana..."
                className="w-full rounded-2xl bg-white py-3 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-kancha-green shadow-[0_0_20px_rgba(163,230,53,0.8)]" />
        </div>

        <section className="mt-6">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-kancha-muted">
            Canchas cerca de ti
          </h2>
          <div className="space-y-4">
            {VENUES.map((venue, i) => (
              <VenueCard key={venue.id} venue={venue} defaultExpanded={i === 0} />
            ))}
          </div>
        </section>

        <p className="mt-6 text-center text-xs text-kancha-muted">
          ¿Eres dueño de cancha?{" "}
          <Link href="/partners" className="font-semibold text-kancha-blue hover:underline">
            Gestiona tu sede en Kancha Partners
          </Link>
        </p>
      </main>
    </div>
  );
}
