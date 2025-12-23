/**
 * Payment service
 * Handles all payment-related API calls
 */

import axios from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";
import type { Payment, PaymentIntent, PaymentMethodInfo } from "@/types/payment";

export const paymentService = {
  /**
   * Create payment intent
   */
  async createIntent(bookingId: string, returnUrl: string, cancelUrl: string): Promise<PaymentIntent> {
    const response = await axios.post(API_ENDPOINTS.PAYMENTS.CREATE, {
      bookingId,
      returnUrl,
      cancelUrl,
    });
    return response.data;
  },

  /**
   * Get payment details by ID
   */
  async getById(id: string): Promise<Payment> {
    const response = await axios.get(API_ENDPOINTS.PAYMENTS.DETAIL(id));
    return response.data;
  },

  /**
   * Verify payment
   */
  async verify(id: string): Promise<Payment> {
    const response = await axios.post(API_ENDPOINTS.PAYMENTS.VERIFY(id));
    return response.data;
  },

  /**
   * Get available payment methods
   */
  async getPaymentMethods(): Promise<PaymentMethodInfo[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"}/payments/methods`);
    return response.data;
  },
};

