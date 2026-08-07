import type { Reservation } from "@/lib/kancha/types";
import { sportAccent } from "@/lib/kancha/utils";
import { MapsLink } from "./MapsLink";

interface ReservationCardProps {
  reservation: Reservation;
}

export function ReservationCard({ reservation }: ReservationCardProps) {
  const accent = sportAccent(reservation.sport);

  return (
    <article
      className={`kancha-card animate-fade-up ${
        reservation.isActive ? accent.glow : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            reservation.sport === "futbol"
              ? "bg-kancha-green/20"
              : "bg-kancha-blue/20"
          }`}
        >
          <span className="text-xl" aria-hidden>
            {reservation.sport === "futbol" ? "⚽" : "🎾"}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-bold text-white">
            {reservation.venueName}
          </h3>
          <p className="text-xs text-kancha-muted">{reservation.detail}</p>
          <span
            className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
              reservation.isToday
                ? `${accent.bg} text-black`
                : "bg-kancha-surface text-kancha-muted"
            }`}
          >
            {reservation.datetime}
          </span>
        </div>

        <button type="button" className="kancha-btn-secondary shrink-0 text-xs">
          Ver Reserva+
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 border-t border-kancha-border pt-3">
        <MapsLink
          location={reservation.location}
          placeName={reservation.venueName}
          mode="directions"
          className="text-xs font-semibold text-kancha-green hover:underline"
        >
          <span aria-hidden>📍</span> Cómo llegar
        </MapsLink>
        <MapsLink
          location={reservation.location}
          placeName={reservation.venueName}
          className="text-xs text-kancha-muted hover:text-white hover:underline"
        >
          Ver en Maps
        </MapsLink>
      </div>
    </article>
  );
}
