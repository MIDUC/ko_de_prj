/**
 * Flight validation schemas using Zod
 */

import { z } from "zod";

export const flightSearchSchema = z.object({
  from: z.string().min(1, "Departure city is required"),
  to: z.string().min(1, "Arrival city is required"),
  date: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  type: z.enum(["one-way", "round-trip"]),
  adults: z.number().min(1).max(10),
  children: z.number().min(0).max(10).optional(),
  infants: z.number().min(0).max(10).optional(),
  class: z.enum(["economy", "business", "first"]).optional(),
  sortBy: z.enum(["price", "duration", "departure"]).optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(100).optional(),
}).refine(
  (data) => {
    if (data.type === "one-way") {
      return !!data.date;
    }
    return !!(data.startDate && data.endDate);
  },
  {
    message: "Date is required for one-way, start and end dates required for round-trip",
  }
);

export type FlightSearchSchema = z.infer<typeof flightSearchSchema>;

