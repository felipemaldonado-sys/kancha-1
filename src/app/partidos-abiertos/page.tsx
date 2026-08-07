"use client";

import Link from "next/link";
import { Header } from "@/components/kancha/Header";
import { OpenMatchCard } from "@/components/kancha/OpenMatchCard";
import { SportSelector } from "@/components/kancha/SportSelector";
import { OPEN_MATCHES } from "@/lib/kancha/data";
import { useKancha } from "@/lib/kancha/sport-context";

export default function PartidosAbiertosPage() {
  const { sport } = useKancha();
  const matches = OPEN_MATCHES.filter((m) => m.sport === sport);

  return (
    <div className="kancha-shell pb-10">
      <Header
        title="Partidos Abiertos"
        backHref="/"
        rightAction={
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white hover:bg-kancha-surface"
            aria-label="Crear partido"
          >
            +
          </button>
        }
      />

      <main className="px-4 pt-2">
        <SportSelector />
        <p className="mt-3 text-xs text-kancha-muted">
          Únete a un partido cercano y completa el equipo
        </p>

        <div className="mt-5 space-y-4">
          {matches.map((match) => (
            <OpenMatchCard key={match.id} match={match} />
          ))}
          {matches.length === 0 && (
            <p className="rounded-2xl border border-kancha-border bg-kancha-card p-6 text-center text-sm text-kancha-muted">
              No hay partidos abiertos de{" "}
              {sport === "futbol" ? "fútbol" : "pádel"} por ahora.
            </p>
          )}
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
