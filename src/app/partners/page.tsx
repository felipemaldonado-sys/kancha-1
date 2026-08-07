"use client";

import Link from "next/link";
import { useState } from "react";
import { PARTNER_VENUE } from "@/lib/kancha/data";
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
      const next =
        s.status === "available"
          ? "occupied"
          : s.status === "occupied"
            ? "available"
            : s.status;
      return { ...s, status: next as "available" | "booked" | "occupied" };
    });
    onUpdate({ ...court, occupied: slots.every((s) => s.status !== "available") });
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
    <article className="kancha-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span>{court.sport === "futbol" ? "⚽" : "🎾"}</span>
            <h3 className="font-bold text-white">{court.name}</h3>
          </div>
          <p className="mt-0.5 text-xs text-kancha-muted">
            {court.surface} •{" "}
            {court.sport === "futbol" ? "Fútbol" : "Pádel"}
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
            } ${slot.status === "booked" ? "cursor-not-allowed opacity-70" : "hover:opacity-80"}`}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </article>
  );
}

export default function PartnersPage() {
  const [venue, setVenue] = useState(PARTNER_VENUE);

  const updateCourt = (updated: PartnerCourt) => {
    setVenue((prev) => ({
      ...prev,
      courts: prev.courts.map((c) => (c.id === updated.id ? updated : c)),
    }));
  };

  const availableCount = venue.courts.reduce(
    (acc, c) => acc + c.slots.filter((s) => s.status === "available").length,
    0
  );

  return (
    <div className="mx-auto min-h-screen max-w-lg pb-10">
      <header className="sticky top-0 z-40 border-b border-kancha-border/50 bg-kancha-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-kancha-surface"
          >
            ←
          </Link>
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-kancha-blue">
              Kancha Partners
            </p>
            <h1 className="text-sm font-bold text-white">{venue.name}</h1>
          </div>
          <div className="h-10 w-10" />
        </div>
      </header>

      <main className="px-4 pt-6">
        <div className="rounded-2xl border border-kancha-blue/30 bg-kancha-blue/5 p-4">
          <p className="text-sm font-semibold text-kancha-blue">
            Panel B2B — Gestión de sede
          </p>
          <p className="mt-1 text-xs text-kancha-muted">
            Administra la disponibilidad y ocupación de tus canchas en tiempo real.
            Los jugadores verán estos horarios al reservar.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="kancha-card text-center">
            <p className="text-lg font-black text-white">{venue.courts.length}</p>
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
            {venue.courts.map((court) => (
              <CourtManager
                key={court.id}
                court={court}
                onUpdate={updateCourt}
              />
            ))}
          </div>
        </section>

        <div className="mt-6 flex gap-2 text-[10px] text-kancha-muted">
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
