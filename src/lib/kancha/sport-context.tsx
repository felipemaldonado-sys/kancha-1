"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { INITIAL_PARTNER_VENUE, INITIAL_VENUES } from "./data";
import type { PartnerCourt, PartnerVenue, Sport, Venue } from "./types";

interface KanchaContextValue {
  sport: Sport;
  setSport: (sport: Sport) => void;
  venues: Venue[];
  partnerVenue: PartnerVenue;
  updatePartnerCourt: (court: PartnerCourt) => void;
}

const KanchaContext = createContext<KanchaContextValue | null>(null);

function syncVenuesFromPartner(
  venues: Venue[],
  partner: PartnerVenue
): Venue[] {
  const partnerCourt2 = partner.courts.find((c) => c.id === "pc2");
  const partnerCourt3 = partner.courts.find((c) => c.id === "pc3");

  return venues.map((venue) => {
    if (venue.id === "1" && partnerCourt2) {
      const availableSlots = partnerCourt2.slots.filter(
        (s) => s.status === "available"
      ).length;
      return {
        ...venue,
        availableCourts: availableSlots > 0 ? Math.max(1, venue.availableCourts) : 0,
        courts: venue.courts.map((court) =>
          court.id === "c1"
            ? {
                ...court,
                slots: partnerCourt2.slots.map((s) => ({
                  time: s.time,
                  available: s.status === "available",
                })),
              }
            : court
        ),
      };
    }

    if (venue.id === "3" && partnerCourt3) {
      const availableSlots = partnerCourt3.slots.filter(
        (s) => s.status === "available"
      ).length;
      return {
        ...venue,
        availableCourts: availableSlots > 0 ? 2 : 0,
        courts: venue.courts.map((court) =>
          court.id === "c3"
            ? {
                ...court,
                slots: partnerCourt3.slots.map((s) => ({
                  time: s.time,
                  available: s.status === "available",
                })),
              }
            : court
        ),
      };
    }

    return venue;
  });
}

export function KanchaProvider({ children }: { children: ReactNode }) {
  const [sport, setSport] = useState<Sport>("futbol");
  const [partnerVenue, setPartnerVenue] = useState(INITIAL_PARTNER_VENUE);
  const [venues, setVenues] = useState(() =>
    syncVenuesFromPartner(INITIAL_VENUES, INITIAL_PARTNER_VENUE)
  );

  const updatePartnerCourt = (updated: PartnerCourt) => {
    setPartnerVenue((prev) => {
      const next: PartnerVenue = {
        ...prev,
        courts: prev.courts.map((c) => (c.id === updated.id ? updated : c)),
      };
      setVenues((current) => syncVenuesFromPartner(current, next));
      return next;
    });
  };

  return (
    <KanchaContext.Provider
      value={{ sport, setSport, venues, partnerVenue, updatePartnerCourt }}
    >
      {children}
    </KanchaContext.Provider>
  );
}

export function useKancha() {
  const ctx = useContext(KanchaContext);
  if (!ctx) throw new Error("useKancha must be used within KanchaProvider");
  return ctx;
}

/** @deprecated use useKancha */
export function useSport() {
  const { sport, setSport } = useKancha();
  return { sport, setSport };
}

/** Alias for plan naming */
export const SportProvider = KanchaProvider;
