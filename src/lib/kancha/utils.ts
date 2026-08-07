import type { Sport } from "./types";

export function sportAccent(sport: Sport) {
  return sport === "futbol"
    ? { text: "text-kancha-green", bg: "bg-kancha-green", border: "border-kancha-green" }
    : { text: "text-kancha-blue", bg: "bg-kancha-blue", border: "border-kancha-blue" };
}
