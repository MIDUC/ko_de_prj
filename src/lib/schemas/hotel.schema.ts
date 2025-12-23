/**
 * Hotel validation schemas using Zod
 */

import { z } from "zod";

export const hotelSearchSchema = z.object({
  city: z.string().optional(),
  cityCode: z.string().optional(),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  adults: z.number().min(1).max(10),
  children: z.number().min(0).max(10).optional(),
  rooms: z.number().min(1).max(10).optional(),
  priceMin: z.number().min(0).optional(),
  priceMax: z.number().min(0).optional(),
  rating: z.number().min(1).max(5).optional(),
  amenities: z.array(z.string()).optional(),
  sortBy: z.enum(["price", "rating", "distance", "popularity"]).optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(100).optional(),
});

export type HotelSearchSchema = z.infer<typeof hotelSearchSchema>;

