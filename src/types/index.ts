// src/types/index.ts
import { ReactNode } from "react";

// Props cho từng Card khuyến mãi
export interface PromoCardProps {
  title: string;
  desc: string;
  badge: string;
  icon: ReactNode; // Icon dạng component <Icon />
}

// Props cho từng Tab dịch vụ (Khách sạn, Vé máy bay...)
export interface ServiceTabProps {
  label: string;
  active: boolean;
  icon: ReactNode;
  onClick: () => void;
}

// Props cho dữ liệu hiển thị trên Search Widget
export type SearchType = "hotel" | "flight" | "train" | "car";
