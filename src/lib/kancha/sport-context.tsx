"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Sport } from "./types";

interface SportContextValue {
  sport: Sport;
  setSport: (sport: Sport) => void;
}

const SportContext = createContext<SportContextValue | null>(null);

export function SportProvider({ children }: { children: ReactNode }) {
  const [sport, setSport] = useState<Sport>("futbol");

  return (
    <SportContext.Provider value={{ sport, setSport }}>
      {children}
    </SportContext.Provider>
  );
}

export function useSport() {
  const ctx = useContext(SportContext);
  if (!ctx) throw new Error("useSport must be used within SportProvider");
  return ctx;
}
