/**
 * Flight service
 * Handles all flight-related API calls
 */

import axios from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";
import type { Flight } from "@/types/flight";

export interface FlightSearchParams {
  from: string;
  to: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  type: "one-way" | "round-trip";
  adults: number;
  children?: number;
  infants?: number;
  class?: "economy" | "business" | "first";
  sortBy?: "price" | "duration" | "departure";
  page?: number;
  limit?: number;
}

export const flightService = {
  /**
   * Search flights based on criteria
   */
  async search(params: FlightSearchParams): Promise<{ data: Flight[]; total: number }> {
    const response = await axios.get(API_ENDPOINTS.FLIGHTS.SEARCH, { params });
    return response.data;
  },

  /**
   * Get flight details by ID
   */
  async getById(id: string): Promise<Flight> {
    const response = await axios.get(API_ENDPOINTS.FLIGHTS.DETAIL(id));
    return response.data;
  },

  /**
   * Get flight price (for price updates)
   */
  async getPrice(id: string): Promise<{ price: number; currency: string }> {
    const response = await axios.get(API_ENDPOINTS.FLIGHTS.PRICE(id));
    return response.data;
  },
};

