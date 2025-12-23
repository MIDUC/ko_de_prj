/**
 * API endpoints configuration
 * Centralized API routes for backend communication
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    REFRESH: `${API_BASE_URL}/auth/refresh`,
    PROFILE: `${API_BASE_URL}/auth/profile`,
  },
  
  // Flights
  FLIGHTS: {
    SEARCH: `${API_BASE_URL}/flights/search`,
    DETAIL: (id: string) => `${API_BASE_URL}/flights/${id}`,
    PRICE: (id: string) => `${API_BASE_URL}/flights/${id}/price`,
  },
  
  // Hotels
  HOTELS: {
    SEARCH: `${API_BASE_URL}/hotels/search`,
    DETAIL: (id: string) => `${API_BASE_URL}/hotels/${id}`,
    REVIEWS: (id: string) => `${API_BASE_URL}/hotels/${id}/reviews`,
    AVAILABILITY: (id: string) => `${API_BASE_URL}/hotels/${id}/availability`,
  },
  
  // Trains
  TRAINS: {
    SEARCH: `${API_BASE_URL}/trains/search`,
    DETAIL: (id: string) => `${API_BASE_URL}/trains/${id}`,
  },
  
  // Cars
  CARS: {
    SEARCH: `${API_BASE_URL}/cars/search`,
    DETAIL: (id: string) => `${API_BASE_URL}/cars/${id}`,
  },
  
  // Tours
  TOURS: {
    SEARCH: `${API_BASE_URL}/tours/search`,
    DETAIL: (id: string) => `${API_BASE_URL}/tours/${id}`,
    REVIEWS: (id: string) => `${API_BASE_URL}/tours/${id}/reviews`,
  },
  
  // Combos
  COMBOS: {
    SEARCH: `${API_BASE_URL}/combos/search`,
    DETAIL: (id: string) => `${API_BASE_URL}/combos/${id}`,
  },
  
  // Bookings
  BOOKINGS: {
    CREATE: `${API_BASE_URL}/bookings`,
    LIST: `${API_BASE_URL}/bookings`,
    DETAIL: (id: string) => `${API_BASE_URL}/bookings/${id}`,
    CANCEL: (id: string) => `${API_BASE_URL}/bookings/${id}/cancel`,
    LOOKUP: `${API_BASE_URL}/bookings/lookup`,
  },
  
  // Payments
  PAYMENTS: {
    CREATE: `${API_BASE_URL}/payments`,
    DETAIL: (id: string) => `${API_BASE_URL}/payments/${id}`,
    VERIFY: (id: string) => `${API_BASE_URL}/payments/${id}/verify`,
  },
  
  // Rewards
  REWARDS: {
    POINTS: `${API_BASE_URL}/rewards/points`,
    HISTORY: `${API_BASE_URL}/rewards/history`,
    REDEEM: `${API_BASE_URL}/rewards/redeem`,
  },
  
  // Inspiration/Blog
  INSPIRATION: {
    LIST: `${API_BASE_URL}/inspiration`,
    DETAIL: (slug: string) => `${API_BASE_URL}/inspiration/${slug}`,
    CATEGORIES: `${API_BASE_URL}/inspiration/categories`,
  },
} as const;

