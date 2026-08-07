import type { ReactNode } from "react";
import type { MapLocation } from "@/lib/kancha/types";
import { googleMapsDirectionsUrl, googleMapsUrl } from "@/lib/kancha/utils";

interface MapsLinkProps {
  location: MapLocation;
  placeName: string;
  /** `place` abre la ubicación; `directions` abre cómo llegar */
  mode?: "place" | "directions";
  className?: string;
  children?: ReactNode;
}

export function MapsLink({
  location,
  placeName,
  mode = "place",
  className = "",
  children,
}: MapsLinkProps) {
  const href =
    mode === "directions"
      ? googleMapsDirectionsUrl(location)
      : googleMapsUrl(location, placeName);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children ?? (
        <>
          <span aria-hidden>📍</span> Ver en Maps
        </>
      )}
    </a>
  );
}
