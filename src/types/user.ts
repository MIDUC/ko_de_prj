/**
 * User/Account related types
 */

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  dateOfBirth?: string;
  nationality?: string;
  passport?: string;
  address?: Address;
  preferences: UserPreferences;
  rewards: RewardsInfo;
  createdAt: string;
  updatedAt: string;
  verified: boolean;
}

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  country: string;
  zipCode?: string;
}

export interface UserPreferences {
  language: string;
  currency: string;
  timezone?: string;
  notifications: NotificationPreferences;
  marketing: boolean;
}

export interface NotificationPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
  bookingUpdates: boolean;
  promotions: boolean;
  newsletters: boolean;
}

export interface RewardsInfo {
  points: number;
  level: "bronze" | "silver" | "gold" | "platinum";
  nextLevelPoints?: number;
  totalSpent: number;
  totalBookings: number;
}

