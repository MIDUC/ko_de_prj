/**
 * Booking related types
 */

export type BookingStatus = 
  | "pending" 
  | "confirmed" 
  | "paid" 
  | "cancelled" 
  | "completed" 
  | "refunded";

export type BookingType = "flight" | "hotel" | "train" | "car" | "tour" | "combo";

export interface Booking {
  id: string;
  bookingNumber: string;
  type: BookingType;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
  
  // Customer information
  customer: Customer;
  
  // Booking details
  items: BookingItem[];
  
  // Pricing
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  currency: string;
  
  // Payment
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  paymentMethod?: string;
  paidAt?: string;
  
  // Additional info
  notes?: string;
  cancellationDeadline?: string;
  cancellationPolicy?: CancellationPolicy;
  
  // Service-specific data
  serviceData?: Record<string, unknown>;
}

export interface Customer {
  id?: string;
  name: string;
  email: string;
  phone: string;
  nationality?: string;
  passport?: string;
  dateOfBirth?: string;
}

export interface BookingItem {
  id: string;
  serviceId: string;
  serviceName: string;
  serviceType: BookingType;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  currency: string;
  details: Record<string, unknown>; // Service-specific details
}

export interface CancellationPolicy {
  type: "free" | "non-refundable" | "partial";
  description: string;
  deadline?: string;
  refundPercentage?: number;
}

export interface BookingSearchParams {
  bookingNumber?: string;
  email?: string;
  phone?: string;
  status?: BookingStatus;
  type?: BookingType;
  page?: number;
  limit?: number;
}

