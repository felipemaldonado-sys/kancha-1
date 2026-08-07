import Link from "next/link";
import { Header } from "@/components/kancha/Header";
import { OpenMatchCard } from "@/components/kancha/OpenMatchCard";
import { SportSelector } from "@/components/kancha/SportSelector";
import { OPEN_MATCHES } from "@/lib/kancha/data";

export default function PartidosAbiertosPage() {
  return (
    <div className="mx-auto min-h-screen max-w-lg pb-10">
      <Header
        title="Partidos Abiertos"
        backHref="/"
        rightAction={
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-white hover:bg-kancha-surface"
            aria-label="Crear partido"
          >
            +
          </button>
        }
      />

      <main className="px-4 pt-4">
        <SportSelector />
        <p className="mt-3 text-xs text-kancha-muted">
          Únete a un partido cercano y completa el equipo
        </p>

        <div className="mt-5 space-y-4">
          {OPEN_MATCHES.map((match) => (
            <OpenMatchCard key={match.id} match={match} />
          ))}
        </div>

        <Link
          href="/perfil"
          className="mt-6 block text-center text-xs text-kancha-muted hover:text-white"
        >
          Completa tu perfil de jugador para unirte más rápido →
        </Link>
      </main>
    </div>
  );
}
