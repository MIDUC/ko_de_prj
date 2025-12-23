/**
 * Application route paths
 * Centralized route definitions for easy maintenance
 */
export const ROUTES = {
  // Main pages
  HOME: "/",
  
  // Auth
  LOGIN: "/login",
  REGISTER: "/register",
  
  // Services
  FLIGHTS: "/flights",
  FLIGHTS_SEARCH: "/flights/search",
  
  HOTEL: "/hotel",
  HOTEL_SEARCH: "/hotel/search",
  HOTEL_DETAIL: (id: string) => `/hotel/${id}`,
  
  TRAIN: "/train",
  TRAIN_SEARCH: "/train/search",
  
  CAR: "/car",
  CAR_SEARCH: "/car/search",
  
  TOUR: "/tour",
  TOUR_SEARCH: "/tour/search",
  TOUR_DETAIL: (id: string) => `/tour/${id}`,
  
  COMBO: "/combo",
  COMBO_SEARCH: "/combo/search",
  
  // User
  PROFILE: "/profile",
  BOOKINGS: "/bookings",
  BOOKING_DETAIL: (id: string) => `/bookings/${id}`,
  SETTINGS: "/settings",
  
  // Features
  REWARDS: "/rewards",
  INSPIRATION: "/inspiration",
  INSPIRATION_DETAIL: (slug: string) => `/inspiration/${slug}`,
  
  // Booking
  BOOKING: (id: string) => `/booking/${id}`,
  PAYMENT: (id: string) => `/payment/${id}`,
  BOOKING_LOOKUP: "/booking-lookup",
} as const;

