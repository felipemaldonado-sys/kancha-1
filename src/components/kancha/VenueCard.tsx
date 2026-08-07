"use client";

import { useState } from "react";
import type { Venue } from "@/lib/kancha/types";
import { formatCop } from "@/lib/kancha/utils";
import { MapsLink } from "./MapsLink";

interface VenueCardProps {
  venue: Venue;
  defaultExpanded?: boolean;
}

export function VenueCard({ venue, defaultExpanded = false }: VenueCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(
    defaultExpanded
      ? venue.courts[0]?.slots.find((s) => s.available)?.time ?? null
      : null
  );

  const allOccupied = venue.availableCourts === 0;
  const court = venue.courts[0];

  return (
    <article className="kancha-card overflow-hidden animate-fade-up">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => !allOccupied && setExpanded(!expanded)}
          className="flex min-w-0 flex-1 gap-3 text-left"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-kancha-surface text-2xl">
            {venue.sports.toLowerCase().includes("pádel") ||
            venue.sports.toLowerCase().includes("padel")
              ? "🎾"
              : "⚽"}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-white">{venue.name}</h3>
            <p className="mt-0.5 text-xs text-kancha-muted">
              <span className="text-red-400">📍</span> A {venue.distance} •{" "}
              {venue.sports}
            </p>
            <p className="mt-1 text-xs">
              {allOccupied ? (
                <span className="text-red-400">
                  🔴 Todas las canchas ocupadas hoy
                </span>
              ) : (
                <span className="text-kancha-muted">
                  {venue.totalCourts} Canchas •{" "}
                  <span className="text-kancha-green">
                    🟢 {venue.availableCourts} Disponibles
                  </span>
                </span>
              )}
            </p>
          </div>
        </button>
      </div>

      <p className="mt-2 truncate text-[11px] text-kancha-muted">
        {venue.location.address}
      </p>
      <div className="mt-2 flex flex-wrap gap-3">
        <MapsLink
          location={venue.location}
          placeName={venue.name}
          className="text-xs font-semibold text-kancha-green hover:underline"
        />
        <MapsLink
          location={venue.location}
          placeName={venue.name}
          mode="directions"
          className="text-xs font-semibold text-kancha-muted hover:text-white hover:underline"
        >
          Cómo llegar
        </MapsLink>
      </div>

      {expanded && court && (
        <div className="mt-4 border-t border-kancha-border pt-4">
          <p className="text-sm font-semibold text-white">{court.name}</p>
          <p className="mt-3 text-xs text-kancha-muted">
            Horarios disponibles para hoy:
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {court.slots.map((slot) => (
              <button
                key={slot.time}
                type="button"
                disabled={!slot.available}
                onClick={() => slot.available && setSelectedSlot(slot.time)}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                  !slot.available
                    ? "border-kancha-border text-kancha-muted line-through opacity-50"
                    : selectedSlot === slot.time
                      ? "border-kancha-green bg-kancha-green/20 text-kancha-green"
                      : "border-kancha-green/50 text-kancha-green hover:bg-kancha-green/10"
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="kancha-btn-primary mt-4 w-full"
            disabled={!selectedSlot}
          >
            Elegir Horario
          </button>
          <p className="mt-2 text-center text-[11px] text-kancha-muted">
            Precios desde {formatCop(venue.priceFrom)} (Se confirma en el
            siguiente paso)
          </p>
        </div>
      )}
    </article>
  );
}
