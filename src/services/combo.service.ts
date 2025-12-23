/**
 * Combo/Package deals service
 * Handles all combo-related API calls
 */

import axios from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";
import type { Combo, ComboSearchParams } from "@/types/combo";

export const comboService = {
  /**
   * Search combos based on criteria
   */
  async search(params: ComboSearchParams): Promise<{ data: Combo[]; total: number }> {
    const response = await axios.get(API_ENDPOINTS.COMBOS.SEARCH, { params });
    return response.data;
  },

  /**
   * Get combo details by ID
   */
  async getById(id: string): Promise<Combo> {
    const response = await axios.get(API_ENDPOINTS.COMBOS.DETAIL(id));
    return response.data;
  },
};

