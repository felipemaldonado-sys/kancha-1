import type { OpenMatch } from "@/lib/kancha/types";
import { sportAccent } from "@/lib/kancha/utils";

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
    <article className="kancha-card">
      <h3 className="font-bold text-white">{match.venueName}</h3>
      <p className="mt-0.5 text-xs text-kancha-muted">
        {match.detail} • {match.datetime}
      </p>

      <span
        className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
          match.sport === "futbol"
            ? "bg-kancha-green/15 text-kancha-green"
            : "bg-kancha-blue/15 text-kancha-blue"
        }`}
      >
        ⚡ {playersLabel}
      </span>

      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs text-kancha-muted">
            Nivel:{" "}
            <span className={`font-semibold ${accent.text}`}>{match.level}</span>
          </p>
          <p className="mt-1 text-xs text-kancha-muted">
            Aprox. ${match.pricePerPerson.toLocaleString("es-CO")} c/u
          </p>
        </div>
        <button
          type="button"
          className={`rounded-xl px-6 py-2.5 text-sm font-bold uppercase text-black ${accent.bg} hover:opacity-90`}
        >
          Unirme
        </button>
      </div>
    </article>
  );
}
