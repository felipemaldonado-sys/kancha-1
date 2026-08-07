import type { OpenMatch } from "@/lib/kancha/types";
import { formatCop, sportAccent } from "@/lib/kancha/utils";
import { MapsLink } from "./MapsLink";

interface OpenMatchCardProps {
  match: OpenMatch;
}

export function OpenMatchCard({ match }: OpenMatchCardProps) {
  const accent = sportAccent(match.sport);
  const playersLabel =
    match.playersNeeded === 1
      ? "Falta 1 Jugador"
      : `Faltan ${match.playersNeeded} Jugadores`;

  return (
    <article className="kancha-card animate-fade-up">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-white">{match.venueName}</h3>
          <p className="mt-0.5 text-xs text-kancha-muted">
            {match.detail} • {match.datetime}
          </p>

          <span
            className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${accent.soft}`}
          >
            ⚡ {playersLabel}
          </span>

          <div className="mt-4">
            <p className="text-xs text-kancha-muted">
              Nivel:{" "}
              <span className={`font-semibold ${accent.text}`}>{match.level}</span>
            </p>
            <p className="mt-1 text-xs text-kancha-muted">
              Aprox.{" "}
              <span className="font-semibold text-white">
                {formatCop(match.pricePerPerson)}
              </span>{" "}
              c/u
            </p>
            <MapsLink
              location={match.location}
              placeName={match.venueName}
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-kancha-green hover:underline"
            />
          </div>
        </div>

        <button
          type="button"
          className={`shrink-0 self-center rounded-xl px-5 py-3 text-sm font-bold uppercase tracking-wide transition hover:brightness-110 active:scale-[0.98] ${
            match.sport === "futbol"
              ? "bg-kancha-green text-black"
              : "bg-kancha-blue text-white"
          }`}
        >
          Unirme
        </button>
      </div>
    </article>
  );
}
