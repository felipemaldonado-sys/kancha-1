"use client";

import type { Sport } from "@/lib/kancha/types";
import { useKancha } from "@/lib/kancha/sport-context";

const sports: { id: Sport; label: string; icon: string }[] = [
  { id: "futbol", label: "Fútbol", icon: "⚽" },
  { id: "padel", label: "Pádel", icon: "🎾" },
];

export function SportSelector({ className = "" }: { className?: string }) {
  const { sport, setSport } = useKancha();

  return (
    <div className={`flex gap-3 ${className}`}>
      {sports.map((s) => {
        const active = sport === s.id;
        const activeClasses =
          s.id === "futbol"
            ? "bg-kancha-green text-black shadow-green-glow"
            : "bg-kancha-blue text-white shadow-blue-glow";

        return (
          <button
            key={s.id}
            type="button"
            onClick={() => setSport(s.id)}
            className={`kancha-pill flex flex-1 items-center justify-center gap-2 ${
              active
                ? activeClasses
                : "bg-kancha-surface/80 text-white hover:bg-kancha-card"
            }`}
          >
            <span aria-hidden>{s.icon}</span>
            {s.label}
          </button>
        );
      })}
    </div>
  );
}
