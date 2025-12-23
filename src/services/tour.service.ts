/**
 * Tour and Activities service
 * Handles all tour-related API calls
 */

import axios from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";
import type { Tour, TourSearchParams, TourReview } from "@/types/tour";

export const tourService = {
  /**
   * Search tours based on criteria
   */
  async search(params: TourSearchParams): Promise<{ data: Tour[]; total: number }> {
    const response = await axios.get(API_ENDPOINTS.TOURS.SEARCH, { params });
    return response.data;
  },

  /**
   * Get tour details by ID
   */
  async getById(id: string): Promise<Tour> {
    const response = await axios.get(API_ENDPOINTS.TOURS.DETAIL(id));
    return response.data;
  },

  /**
   * Get tour reviews
   */
  async getReviews(tourId: string, page = 1, limit = 10): Promise<{ data: TourReview[]; total: number }> {
    const response = await axios.get(API_ENDPOINTS.TOURS.REVIEWS(tourId), {
      params: { page, limit },
    });
    return response.data;
  },
};

