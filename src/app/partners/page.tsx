"use client";

import Link from "next/link";
import { Header } from "@/components/kancha/Header";
import { useKancha } from "@/lib/kancha/sport-context";
import type { PartnerCourt } from "@/lib/kancha/types";

function CourtManager({
  court,
  onUpdate,
}: {
  court: PartnerCourt;
  onUpdate: (court: PartnerCourt) => void;
}) {
  const toggleSlot = (time: string) => {
    const slots = court.slots.map((s) => {
      if (s.time !== time) return s;
      if (s.status === "booked") return s;
      const next = s.status === "available" ? "occupied" : "available";
      return { ...s, status: next as "available" | "booked" | "occupied" };
    });
    onUpdate({
      ...court,
      occupied: slots.every((s) => s.status !== "available"),
      slots,
    });
  };

  const statusColor = {
    available: "border-kancha-green/50 bg-kancha-green/10 text-kancha-green",
    booked: "border-yellow-500/50 bg-yellow-500/10 text-yellow-400",
    occupied: "border-red-500/50 bg-red-500/10 text-red-400",
  };

  const statusLabel = {
    available: "Disponible",
    booked: "Reservado",
    occupied: "Ocupado",
  };

  return (
    <article className="kancha-card animate-fade-up">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span aria-hidden>{court.sport === "futbol" ? "⚽" : "🎾"}</span>
            <h3 className="font-bold text-white">{court.name}</h3>
          </div>
          <p className="mt-0.5 text-xs text-kancha-muted">
            {court.surface} • {court.sport === "futbol" ? "Fútbol" : "Pádel"}
          </p>
        </div>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${
            court.occupied
              ? "bg-red-500/15 text-red-400"
              : "bg-kancha-green/15 text-kancha-green"
          }`}
        >
          {court.occupied ? "Ocupada" : "Activa"}
        </span>
      </div>

      <p className="mt-4 text-xs text-kancha-muted">
        Toca un horario para cambiar disponibilidad u ocupación:
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {court.slots.map((slot) => (
          <button
            key={slot.time}
            type="button"
            onClick={() => slot.status !== "booked" && toggleSlot(slot.time)}
            disabled={slot.status === "booked"}
            title={statusLabel[slot.status]}
            className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
              statusColor[slot.status]
            } ${
              slot.status === "booked"
                ? "cursor-not-allowed opacity-70"
                : "hover:opacity-80 active:scale-95"
            }`}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </article>
  );
}

export default function PartnersPage() {
  const { partnerVenue, updatePartnerCourt } = useKancha();

  const availableCount = partnerVenue.courts.reduce(
    (acc, c) => acc + c.slots.filter((s) => s.status === "available").length,
    0
  );

  return (
    <div className="kancha-shell pb-10">
      <Header
        title="Kancha Partners"
        backHref="/"
        showMenu
      />

      <main className="px-4 pt-2">
        <div className="rounded-2xl border border-kancha-blue/30 bg-kancha-blue/5 p-4 animate-fade-up">
          <p className="text-sm font-semibold text-kancha-blue">
            Panel B2B — {partnerVenue.name}
          </p>
          <p className="mt-1 text-xs text-kancha-muted">
            Administra la disponibilidad y ocupación de tus canchas. Los
            cambios se reflejan en la vista de reserva de jugadores.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="kancha-card text-center">
            <p className="text-lg font-black text-white">
              {partnerVenue.courts.length}
            </p>
            <p className="text-[10px] uppercase text-kancha-muted">Canchas</p>
          </div>
          <div className="kancha-card text-center">
            <p className="text-lg font-black text-kancha-green">{availableCount}</p>
            <p className="text-[10px] uppercase text-kancha-muted">Slots libres</p>
          </div>
          <div className="kancha-card text-center">
            <p className="text-lg font-black text-white">Hoy</p>
            <p className="text-[10px] uppercase text-kancha-muted">Vista</p>
          </div>
        </div>

        <section className="mt-6">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-kancha-muted">
            Canchas de tu sede
          </h2>
          <div className="space-y-4">
            {partnerVenue.courts.map((court) => (
              <CourtManager
                key={court.id}
                court={court}
                onUpdate={updatePartnerCourt}
              />
            ))}
          </div>
        </section>

        <div className="mt-6 flex flex-wrap gap-2 text-[10px] text-kancha-muted">
          <span className="rounded border border-kancha-green/50 bg-kancha-green/10 px-2 py-0.5 text-kancha-green">
            Disponible
          </span>
          <span className="rounded border border-yellow-500/50 bg-yellow-500/10 px-2 py-0.5 text-yellow-400">
            Reservado
          </span>
          <span className="rounded border border-red-500/50 bg-red-500/10 px-2 py-0.5 text-red-400">
            Ocupado
          </span>
        </div>

        <Link
          href="/reservar"
          className="mt-6 block text-center text-xs text-kancha-muted hover:text-white"
        >
          Ver vista del jugador (B2C) →
        </Link>
      </main>
    </div>
  );
}
