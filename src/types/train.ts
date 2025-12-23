/**
 * Train related types
 */

export interface Train {
  id: string;
  trainNumber: string;
  trainName: string;
  operator: string;
  operatorLogo?: string;
  departureStation: Station;
  arrivalStation: Station;
  departureTime: string; // "15:35"
  arrivalTime: string; // "17:50"
  duration: string; // "2h 15m"
  durationMinutes: number;
  date: string; // Date string
  classes: TrainClass[];
  stops: TrainStop[];
  status: "available" | "sold-out" | "delayed" | "cancelled";
  amenities: string[];
}

export interface Station {
  code: string;
  name: string;
  nameEn?: string;
  city: string;
  address: string;
}

export interface TrainClass {
  id: string;
  name: string; // "Hard seat", "Soft seat", "Hard sleeper", "Soft sleeper"
  code: string; // "HS", "SS", "HSL", "SSL"
  price: number;
  currency: string;
  available: number; // Number of available seats
  facilities: string[];
}

export interface TrainStop {
  station: Station;
  arrivalTime?: string;
  departureTime?: string;
  stopDuration?: number; // Minutes
}

export interface TrainSearchParams {
  from: string; // Station code
  to: string; // Station code
  date: string;
  passengers?: number;
  class?: string;
  sortBy?: "price" | "duration" | "departure";
  page?: number;
  limit?: number;
}

