/**
 * Train service
 * Handles all train-related API calls
 */

import axios from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";
import type { Train, TrainSearchParams } from "@/types/train";

export const trainService = {
  /**
   * Search trains based on criteria
   */
  async search(params: TrainSearchParams): Promise<{ data: Train[]; total: number }> {
    const response = await axios.get(API_ENDPOINTS.TRAINS.SEARCH, { params });
    return response.data;
  },

  /**
   * Get train details by ID
   */
  async getById(id: string): Promise<Train> {
    const response = await axios.get(API_ENDPOINTS.TRAINS.DETAIL(id));
    return response.data;
  },
};

