/**
 * Tour and Activities related types
 */

export interface Tour {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  shortDescription: string;
  images: string[];
  thumbnail: string;
  location: Location;
  duration: string; // "3 days 2 nights"
  durationDays: number;
  price: number;
  currency: string;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  category: TourCategory;
  tags: string[];
  highlights: string[];
  itinerary: ItineraryItem[];
  inclusions: string[]; // What's included
  exclusions: string[]; // What's not included
  cancellationPolicy: CancellationPolicy;
  availableDates: string[]; // Available dates
  minParticipants?: number;
  maxParticipants?: number;
  languages: string[]; // Available languages
  provider: TourProvider;
  instantConfirmation: boolean;
}

export interface Location {
  city: string;
  country: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  meetingPoint?: string;
}

export type TourCategory = 
  | "adventure" 
  | "cultural" 
  | "nature" 
  | "food" 
  | "beach" 
  | "city-tour" 
  | "day-trip" 
  | "multi-day";

export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals?: string[]; // "breakfast", "lunch", "dinner"
  accommodation?: string;
}

export interface CancellationPolicy {
  type: "free" | "non-refundable" | "partial";
  description: string;
  deadline?: string; // Date string
  refundPercentage?: number;
}

export interface TourProvider {
  id: string;
  name: string;
  logo?: string;
  rating: number;
  verified: boolean;
}

export interface TourReview {
  id: string;
  tourId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
  photos?: string[];
}

export interface TourSearchParams {
  location?: string;
  city?: string;
  country?: string;
  category?: TourCategory;
  date?: string;
  duration?: number; // Days
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  sortBy?: "price" | "rating" | "popularity" | "duration";
  page?: number;
  limit?: number;
}

