/**
 * Combo/Package deals related types
 */

export interface Combo {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  shortDescription: string;
  images: string[];
  thumbnail: string;
  location: Location;
  duration: string; // "3 days 2 nights"
  durationDays: number;
  price: number;
  currency: string;
  originalPrice: number; // Total price if booked separately
  savings: number; // Amount saved
  savingsPercentage: number;
  components: ComboComponent[];
  inclusions: string[];
  exclusions: string[];
  cancellationPolicy: CancellationPolicy;
  availableDates: string[];
  validUntil: string; // Date string
  minParticipants?: number;
  maxParticipants?: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  provider: ComboProvider;
  instantConfirmation: boolean;
}

export interface Location {
  city: string;
  country: string;
  address?: string;
}

export interface ComboComponent {
  type: "flight" | "hotel" | "tour" | "car" | "train";
  id: string;
  name: string;
  description: string;
  price: number; // Individual price
  details?: Record<string, unknown>; // Component-specific details
}

export interface CancellationPolicy {
  type: "free" | "non-refundable" | "partial";
  description: string;
  deadline?: string;
  refundPercentage?: number;
}

export interface ComboProvider {
  id: string;
  name: string;
  logo?: string;
  rating: number;
  verified: boolean;
}

export interface ComboReview {
  id: string;
  comboId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

export interface ComboSearchParams {
  location?: string;
  city?: string;
  country?: string;
  date?: string;
  duration?: number;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  sortBy?: "price" | "rating" | "savings" | "popularity";
  page?: number;
  limit?: number;
}

