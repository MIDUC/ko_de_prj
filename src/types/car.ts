/**
 * Car/Transportation related types
 */

export interface CarService {
  id: string;
  name: string;
  type: CarType;
  vehicle: Vehicle;
  from: Location;
  to: Location;
  price: number;
  currency: string;
  duration: string; // "45 minutes"
  durationMinutes: number;
  distance: number; // km
  capacity: number; // Number of passengers
  luggage: number; // Number of luggage pieces
  amenities: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  available: boolean;
  cancellationPolicy: CancellationPolicy;
}

export type CarType = "airport-transfer" | "city-transfer" | "hourly-rental" | "day-tour";

export interface Vehicle {
  make: string;
  model: string;
  year?: number;
  seats: number;
  transmission: "manual" | "automatic";
  fuelType: "petrol" | "diesel" | "electric" | "hybrid";
  airConditioning: boolean;
}

export interface Location {
  type: "airport" | "hotel" | "address" | "station";
  name: string;
  address: string;
  city: string;
  code?: string; // Airport code, hotel code, etc.
  latitude?: number;
  longitude?: number;
}

export interface CancellationPolicy {
  type: "free" | "non-refundable" | "partial";
  description: string;
  deadline?: string; // Date string
}

export interface CarSearchParams {
  from: string;
  to: string;
  date: string;
  time?: string;
  passengers?: number;
  luggage?: number;
  type?: CarType;
  sortBy?: "price" | "duration" | "rating";
  page?: number;
  limit?: number;
}

