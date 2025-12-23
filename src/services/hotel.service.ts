/**
 * Hotel service
 * Handles all hotel-related API calls
 */

import axios from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";
import type { Hotel, HotelSearchParams, HotelReview } from "@/types/hotel";

export const hotelService = {
  /**
   * Search hotels based on criteria
   */
  async search(params: HotelSearchParams): Promise<{ data: Hotel[]; total: number }> {
    const response = await axios.get(API_ENDPOINTS.HOTELS.SEARCH, { params });
    return response.data;
  },

  /**
   * Get hotel details by ID
   */
  async getById(id: string): Promise<Hotel> {
    const response = await axios.get(API_ENDPOINTS.HOTELS.DETAIL(id));
    return response.data;
  },

  /**
   * Get hotel reviews
   */
  async getReviews(hotelId: string, page = 1, limit = 10): Promise<{ data: HotelReview[]; total: number }> {
    const response = await axios.get(API_ENDPOINTS.HOTELS.REVIEWS(hotelId), {
      params: { page, limit },
    });
    return response.data;
  },

  /**
   * Check hotel availability
   */
  async checkAvailability(hotelId: string, checkIn: string, checkOut: string): Promise<{ available: boolean; rooms: unknown[] }> {
    const response = await axios.get(API_ENDPOINTS.HOTELS.AVAILABILITY(hotelId), {
      params: { checkIn, checkOut },
    });
    return response.data;
  },
};

