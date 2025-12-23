/**
 * Common types and interfaces
 * Re-export all types for easier imports
 */

import { ReactNode } from "react";

// Re-export all types
export * from "./flight";
export * from "./hotel";
export * from "./train";
export * from "./car";
export * from "./tour";
export * from "./combo";
export * from "./booking";
export * from "./payment";
export * from "./user";

// UI Component Props
export interface PromoCardProps {
  title: string;
  desc: string;
  badge: string;
  icon: ReactNode;
}

export interface ServiceTabProps {
  label: string;
  active: boolean;
  icon: ReactNode;
  onClick: () => void;
}

export type SearchType = "hotel" | "flight" | "train" | "car" | "tour" | "combo";
