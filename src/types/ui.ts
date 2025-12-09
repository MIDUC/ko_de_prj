// src/types/index.ts
import { ReactNode } from "react";

// Định nghĩa Interface cho PromoCard
// Export từ đây để các file khác có thể import được
export interface PromoCardProps {
  title: string;
  desc: string;
  badge: string;
  // Dùng ReactNode để nhận icon dạng JSX (ví dụ: <Train />)
  icon: ReactNode;
}

// Nếu bạn có define kiểu dữ liệu khác (ví dụ TabItem) thì cũng viết luôn ở đây
export interface TabItemProps {
  label: string;
  active: boolean;
  icon: ReactNode;
  onClick: () => void;
}
