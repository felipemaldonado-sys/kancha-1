export type Sport = "futbol" | "padel";

export type SkillLevel =
  | "Principiante"
  | "Recreativo"
  | "Intermedio"
  | "Avanzado"
  | "Libre / Amigos";

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Court {
  id: string;
  name: string;
  sport: Sport;
  surface: string;
  format: string;
  slots: TimeSlot[];
}

export interface Venue {
  id: string;
  name: string;
  distance: string;
  sports: string;
  totalCourts: number;
  availableCourts: number;
  courts: Court[];
  priceFrom: number;
}

export interface Reservation {
  id: string;
  venueName: string;
  sport: Sport;
  detail: string;
  datetime: string;
  isToday: boolean;
  isActive: boolean;
}

export interface OpenMatch {
  id: string;
  venueName: string;
  sport: Sport;
  detail: string;
  datetime: string;
  playersNeeded: number;
  level: SkillLevel;
  pricePerPerson: number;
}

export interface PlayerSport {
  sport: Sport;
  level: string;
  positions: string[];
}

export interface PlayerProfile {
  name: string;
  city: string;
  age: number;
  agePublic: boolean;
  matches: number;
  attendance: number;
  reliability: string;
  sports: PlayerSport[];
  badges: { label: string; icon: string }[];
}

export interface PartnerCourt {
  id: string;
  name: string;
  sport: Sport;
  surface: string;
  occupied: boolean;
  slots: { time: string; status: "available" | "booked" | "occupied" }[];
}

export interface PartnerVenue {
  id: string;
  name: string;
  courts: PartnerCourt[];
}
