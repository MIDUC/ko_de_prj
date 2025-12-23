/**
 * Booking service
 * Handles all booking-related API calls
 */

import axios from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";
import type { Booking, BookingSearchParams } from "@/types/booking";

export const bookingService = {
  /**
   * Create a new booking
   */
  async create(data: unknown): Promise<Booking> {
    const response = await axios.post(API_ENDPOINTS.BOOKINGS.CREATE, data);
    return response.data;
  },

  /**
   * Get user's bookings
   */
  async getList(params?: BookingSearchParams): Promise<{ data: Booking[]; total: number }> {
    const response = await axios.get(API_ENDPOINTS.BOOKINGS.LIST, { params });
    return response.data;
  },

  /**
   * Get booking details by ID
   */
  async getById(id: string): Promise<Booking> {
    const response = await axios.get(API_ENDPOINTS.BOOKINGS.DETAIL(id));
    return response.data;
  },

  /**
   * Cancel a booking
   */
  async cancel(id: string, reason?: string): Promise<Booking> {
    const response = await axios.post(API_ENDPOINTS.BOOKINGS.CANCEL(id), { reason });
    return response.data;
  },

  /**
   * Lookup booking by booking number or email/phone
   */
  async lookup(params: { bookingNumber?: string; email?: string; phone?: string }): Promise<Booking> {
    const response = await axios.post(API_ENDPOINTS.BOOKINGS.LOOKUP, params);
    return response.data;
  },
};

