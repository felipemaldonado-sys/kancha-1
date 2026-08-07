import type { MapLocation, Sport } from "./types";

export function sportAccent(sport: Sport) {
  return sport === "futbol"
    ? {
        text: "text-kancha-green",
        bg: "bg-kancha-green",
        border: "border-kancha-green",
        soft: "bg-kancha-green/15 text-kancha-green",
        glow: "shadow-green-glow",
      }
    : {
        text: "text-kancha-blue",
        bg: "bg-kancha-blue",
        border: "border-kancha-blue",
        soft: "bg-kancha-blue/15 text-kancha-blue",
        glow: "shadow-blue-glow",
      };
}

export function formatCop(value: number) {
  return `$${value.toLocaleString("es-CO")}`;
}

/** Abre Google Maps en el navegador/app. No requiere API key. */
export function googleMapsUrl(location: MapLocation, placeName?: string) {
  const query = placeName
    ? `${placeName}, ${location.address}`
    : `${location.lat},${location.lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function googleMapsDirectionsUrl(location: MapLocation) {
  return `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
}
