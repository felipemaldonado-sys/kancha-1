import type {
  MapLocation,
  OpenMatch,
  PartnerVenue,
  PlayerProfile,
  Reservation,
  Venue,
} from "./types";

/** Ubicaciones de ejemplo en Bogotá (coordenadas reales aproximadas por zona). */
export const LOCATIONS = {
  colinaCampestre: {
    address: "Calle 138 #55-20, Colina Campestre, Bogotá",
    lat: 4.7352,
    lng: -74.0648,
  },
  cedritos: {
    address: "Calle 140 #11-45, Cedritos, Bogotá",
    lat: 4.7228,
    lng: -74.0339,
  },
  padelNorte: {
    address: "Autopista Norte #116-20, Bogotá",
    lat: 4.6975,
    lng: -74.0552,
  },
  elSalitre: {
    address: "Av. El Dorado #68C-61, El Salitre, Bogotá",
    lat: 4.6689,
    lng: -74.0921,
  },
} satisfies Record<string, MapLocation>;

export const RESERVATIONS: Reservation[] = [
  {
    id: "1",
    venueName: "Sede Colina Campestre",
    sport: "futbol",
    detail: "Fútbol 5 • Sintética",
    datetime: "Hoy 19:00",
    isToday: true,
    isActive: true,
    location: LOCATIONS.colinaCampestre,
  },
  {
    id: "2",
    venueName: "Pádel Club Norte",
    sport: "padel",
    detail: "Cancha 3 • Outdoor",
    datetime: "Jueves 20:00",
    isToday: false,
    isActive: false,
    location: LOCATIONS.padelNorte,
  },
];

export const INITIAL_VENUES: Venue[] = [
  {
    id: "1",
    name: "Sede Colina Campestre",
    distance: "2.5 km",
    sports: "Fútbol 5 y 8",
    totalCourts: 5,
    availableCourts: 2,
    priceFrom: 120000,
    location: LOCATIONS.colinaCampestre,
    courts: [
      {
        id: "c1",
        name: "Cancha 2 - Sintética (Fútbol 5)",
        sport: "futbol",
        surface: "Sintética",
        format: "Fútbol 5",
        slots: [
          { time: "18:00", available: false },
          { time: "19:00", available: true },
          { time: "20:00", available: true },
          { time: "21:00", available: true },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Sede Cedritos",
    distance: "4.1 km",
    sports: "Fútbol 5",
    totalCourts: 3,
    availableCourts: 0,
    priceFrom: 95000,
    location: LOCATIONS.cedritos,
    courts: [],
  },
  {
    id: "3",
    name: "Pádel Club Norte",
    distance: "3.2 km",
    sports: "Pádel",
    totalCourts: 4,
    availableCourts: 2,
    priceFrom: 140000,
    location: LOCATIONS.padelNorte,
    courts: [
      {
        id: "c3",
        name: "Cancha 3 - Outdoor",
        sport: "padel",
        surface: "Outdoor",
        format: "Cancha Doble",
        slots: [
          { time: "17:00", available: true },
          { time: "18:00", available: false },
          { time: "19:00", available: true },
          { time: "20:00", available: true },
        ],
      },
    ],
  },
];

/** @deprecated use INITIAL_VENUES via context */
export const VENUES = INITIAL_VENUES;

export const OPEN_MATCHES: OpenMatch[] = [
  {
    id: "1",
    venueName: "Sede Colina Campestre",
    sport: "futbol",
    detail: "Fútbol 5",
    datetime: "Hoy, 20:00 hrs",
    playersNeeded: 1,
    level: "Intermedio",
    pricePerPerson: 25000,
    location: LOCATIONS.colinaCampestre,
  },
  {
    id: "2",
    venueName: "Pádel Club Norte",
    sport: "padel",
    detail: "Cancha Doble",
    datetime: "Mañana, 18:00 hrs",
    playersNeeded: 2,
    level: "Recreativo",
    pricePerPerson: 35000,
    location: LOCATIONS.padelNorte,
  },
  {
    id: "3",
    venueName: "Canchas El Salitre",
    sport: "futbol",
    detail: "Fútbol 8",
    datetime: "Sábado, 10:00 hrs",
    playersNeeded: 1,
    level: "Libre / Amigos",
    pricePerPerson: 20000,
    location: LOCATIONS.elSalitre,
  },
];

export const PLAYER_PROFILE: PlayerProfile = {
  name: "Manuela M.",
  city: "Bogotá",
  age: 25,
  agePublic: true,
  matches: 12,
  attendance: 100,
  reliability: "Confiable",
  sports: [
    {
      sport: "futbol",
      level: "Intermedio",
      positions: ["Libre", "Arquero"],
    },
    {
      sport: "padel",
      level: "Principiante / Recreativo",
      positions: ["Drive (Derecha)"],
    },
  ],
  badges: [
    { label: "Buen Vibe", icon: "🤝" },
    { label: "Siempre Llega", icon: "⏱️" },
  ],
};

export const INITIAL_PARTNER_VENUE: PartnerVenue = {
  id: "pv1",
  name: "Sede Colina Campestre",
  courts: [
    {
      id: "pc1",
      name: "Cancha 1",
      sport: "futbol",
      surface: "Sintética",
      occupied: false,
      slots: [
        { time: "17:00", status: "booked" },
        { time: "18:00", status: "booked" },
        { time: "19:00", status: "available" },
        { time: "20:00", status: "available" },
        { time: "21:00", status: "occupied" },
      ],
    },
    {
      id: "pc2",
      name: "Cancha 2",
      sport: "futbol",
      surface: "Sintética",
      occupied: false,
      slots: [
        { time: "18:00", status: "occupied" },
        { time: "19:00", status: "available" },
        { time: "20:00", status: "available" },
        { time: "21:00", status: "available" },
      ],
    },
    {
      id: "pc3",
      name: "Cancha 3",
      sport: "padel",
      surface: "Outdoor",
      occupied: false,
      slots: [
        { time: "17:00", status: "available" },
        { time: "18:00", status: "booked" },
        { time: "19:00", status: "available" },
        { time: "20:00", status: "available" },
        { time: "21:00", status: "booked" },
      ],
    },
  ],
};

/** @deprecated use INITIAL_PARTNER_VENUE via context */
export const PARTNER_VENUE = INITIAL_PARTNER_VENUE;
