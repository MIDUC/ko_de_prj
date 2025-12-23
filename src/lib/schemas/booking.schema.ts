/**
 * Booking validation schemas using Zod
 */

import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  nationality: z.string().optional(),
  passport: z.string().optional(),
  dateOfBirth: z.string().optional(),
});

export const bookingCreateSchema = z.object({
  type: z.enum(["flight", "hotel", "train", "car", "tour", "combo"]),
  items: z.array(
    z.object({
      serviceId: z.string().min(1),
      serviceName: z.string().min(1),
      quantity: z.number().min(1),
      unitPrice: z.number().min(0),
      details: z.record(z.unknown()),
    })
  ).min(1),
  customer: customerSchema,
  notes: z.string().optional(),
});

export type BookingCreateSchema = z.infer<typeof bookingCreateSchema>;
export type CustomerSchema = z.infer<typeof customerSchema>;

