import Link from "next/link";
import { Header } from "@/components/kancha/Header";
import { ReservationCard } from "@/components/kancha/ReservationCard";
import { SportSelector } from "@/components/kancha/SportSelector";
import { RESERVATIONS } from "@/lib/kancha/data";

export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen max-w-lg pb-10">
      <Header showLocation />

      <main className="px-4 pt-6">
        <section>
          <h1 className="text-2xl font-black uppercase tracking-wide text-white">
            Bienvenido, Jugador
          </h1>
          <p className="mt-1 text-sm text-kancha-muted">
            ¿Qué vamos a jugar hoy?
          </p>

          <SportSelector className="mt-5" />

          <div className="relative mt-4">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-kancha-muted">
              🔍
            </span>
            <input
              type="search"
              placeholder="Busca zona, club o sede..."
              className="w-full rounded-2xl border border-kancha-border bg-kancha-surface py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-kancha-muted focus:border-kancha-green focus:outline-none"
            />
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">
              Tus Próximos Partidos
            </h2>
            <Link
              href="/reservar"
              className="text-xs font-semibold text-kancha-green hover:underline"
            >
              Reservar +
            </Link>
          </div>

          <div className="space-y-3">
            {RESERVATIONS.map((reservation) => (
              <ReservationCard key={reservation.id} reservation={reservation} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
