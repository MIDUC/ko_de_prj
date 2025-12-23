/**
 * Car/Transportation service
 * Handles all car service-related API calls
 */

import axios from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";
import type { CarService, CarSearchParams } from "@/types/car";

export const carService = {
  /**
   * Search car services based on criteria
   */
  async search(params: CarSearchParams): Promise<{ data: CarService[]; total: number }> {
    const response = await axios.get(API_ENDPOINTS.CARS.SEARCH, { params });
    return response.data;
  },

  /**
   * Get car service details by ID
   */
  async getById(id: string): Promise<CarService> {
    const response = await axios.get(API_ENDPOINTS.CARS.DETAIL(id));
    return response.data;
  },
};

