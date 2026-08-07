import Link from "next/link";
import { Header } from "@/components/kancha/Header";
import { ReservationCard } from "@/components/kancha/ReservationCard";
import { SportSelector } from "@/components/kancha/SportSelector";
import { RESERVATIONS } from "@/lib/kancha/data";

export default function HomePage() {
  return (
    <div className="kancha-shell pb-10">
      <Header showLocation />

      <main className="px-4 pt-4">
        <section className="animate-fade-up">
          <h1 className="text-[1.65rem] font-black uppercase leading-tight tracking-wide text-white">
            Bienvenido, Jugador
          </h1>
          <p className="mt-1 text-sm text-kancha-muted">
            ¿Qué vamos a jugar hoy?
          </p>

          <SportSelector className="mt-5" />

          <div className="relative mt-4">
            <span
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-kancha-muted"
              aria-hidden
            >
              🔍
            </span>
            <input
              type="search"
              placeholder="Busca zona, club o sede..."
              className="w-full rounded-2xl border border-kancha-border bg-kancha-surface/90 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-kancha-muted focus:border-kancha-green focus:outline-none"
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
            {RESERVATIONS.map((reservation, index) => (
              <div
                key={reservation.id}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <ReservationCard reservation={reservation} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
