/**
 * Payment related types
 */

export type PaymentMethod = 
  | "credit-card" 
  | "debit-card" 
  | "bank-transfer" 
  | "e-wallet" 
  | "cash";

export type PaymentStatus = 
  | "pending" 
  | "processing" 
  | "completed" 
  | "failed" 
  | "cancelled" 
  | "refunded";

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  status: PaymentStatus;
  createdAt: string;
  completedAt?: string;
  failedAt?: string;
  
  // Payment details
  transactionId?: string;
  gateway?: string; // Payment gateway name
  gatewayTransactionId?: string;
  
  // Card information (if applicable, masked)
  cardLast4?: string;
  cardBrand?: string;
  
  // Error information
  errorCode?: string;
  errorMessage?: string;
  
  // Refund information
  refundAmount?: number;
  refundedAt?: string;
  refundReason?: string;
}

export interface PaymentIntent {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  clientSecret?: string; // For Stripe, etc.
  paymentMethod?: PaymentMethod;
  returnUrl: string;
  cancelUrl: string;
}

export interface PaymentMethodInfo {
  type: PaymentMethod;
  name: string;
  icon?: string;
  description?: string;
  enabled: boolean;
  fees?: number; // Processing fee percentage
}

