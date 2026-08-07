"use client";

import type { Sport } from "@/lib/kancha/types";
import { useSport } from "@/lib/kancha/sport-context";

const sports: { id: Sport; label: string; icon: string }[] = [
  { id: "futbol", label: "Fútbol", icon: "⚽" },
  { id: "padel", label: "Pádel", icon: "🎾" },
];

export function SportSelector({ className = "" }: { className?: string }) {
  const { sport, setSport } = useSport();

  return (
    <div className={`flex gap-3 ${className}`}>
      {sports.map((s) => {
        const active = sport === s.id;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => setSport(s.id)}
            className={`kancha-pill flex flex-1 items-center justify-center gap-2 ${
              active
                ? "bg-kancha-green text-black shadow-green-glow"
                : "bg-kancha-surface text-white hover:bg-kancha-card"
            }`}
          >
            <span>{s.icon}</span>
            {s.label}
          </button>
        );
      })}
    </div>
  );
}
