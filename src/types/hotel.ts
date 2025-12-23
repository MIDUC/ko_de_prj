/**
 * Hotel related types
 */

export interface Hotel {
  id: string;
  name: string;
  nameEn?: string;
  address: string;
  city: string;
  cityCode: string;
  country: string;
  rating: number; // 1-5 stars
  reviewCount: number;
  reviewScore: number; // 0-10
  images: string[];
  thumbnail: string;
  description: string;
  amenities: string[];
  price: number;
  currency: string;
  originalPrice?: number; // For discounts
  discount?: number; // Percentage
  checkIn: string; // Date string
  checkOut: string; // Date string
  roomTypes: RoomType[];
  latitude?: number;
  longitude?: number;
  distance?: number; // Distance from city center in km
  cancellationPolicy: CancellationPolicy;
  facilities: Facility[];
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  maxOccupancy: number;
  bedType: string;
  size: string; // e.g., "25 m²"
  price: number;
  currency: string;
  images: string[];
  amenities: string[];
  available: boolean;
}

export interface CancellationPolicy {
  type: "free" | "non-refundable" | "partial";
  description: string;
  deadline?: string; // Date string
}

export interface Facility {
  id: string;
  name: string;
  icon?: string;
  category: "general" | "room" | "dining" | "recreation" | "business" | "parking";
}

export interface HotelSearchParams {
  city?: string;
  cityCode?: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children?: number;
  rooms?: number;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  amenities?: string[];
  sortBy?: "price" | "rating" | "distance" | "popularity";
  page?: number;
  limit?: number;
}

export interface HotelReview {
  id: string;
  hotelId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

