import type {
  OpenMatch,
  PartnerVenue,
  PlayerProfile,
  Reservation,
  Venue,
} from "./types";

export const RESERVATIONS: Reservation[] = [
  {
    id: "1",
    venueName: "Sede Colina Campestre",
    sport: "futbol",
    detail: "Fútbol 5 • Sintética",
    datetime: "Hoy 19:00",
    isToday: true,
    isActive: true,
  },
  {
    id: "2",
    venueName: "Pádel Club Norte",
    sport: "padel",
    detail: "Cancha 3 • Outdoor",
    datetime: "Jueves 20:00",
    isToday: false,
    isActive: false,
  },
];

export const VENUES: Venue[] = [
  {
    id: "1",
    name: "Sede Colina Campestre",
    distance: "2.5 km",
    sports: "Fútbol 5 y 8",
    totalCourts: 5,
    availableCourts: 2,
    priceFrom: 120000,
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
    courts: [],
  },
];

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
  },
  {
    id: "2",
    venueName: "Pádel Club Norte",
    sport: "padel",
    detail: "Cancha Doble",
    datetime: "Mañana, 18:00 hrs",
    playersNeeded: 2,
    level: "Recreativo",
    pricePerPerson: 32000,
  },
  {
    id: "3",
    venueName: "Canchas El Salitre",
    sport: "futbol",
    detail: "Fútbol 5",
    datetime: "Sábado, 17:00 hrs",
    playersNeeded: 1,
    level: "Libre / Amigos",
    pricePerPerson: 22000,
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

export const PARTNER_VENUE: PartnerVenue = {
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
      occupied: true,
      slots: [
        { time: "17:00", status: "occupied" },
        { time: "18:00", status: "occupied" },
        { time: "19:00", status: "occupied" },
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
