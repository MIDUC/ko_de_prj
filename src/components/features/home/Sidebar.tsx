"use client";

import { Hotel, Plane, Train, Car, Map, Ticket } from "lucide-react";
import Link from "next/link";
import { useSidebarStore } from "@/store/use-sidebar-store";
import { cn } from "@/lib/utils";

const MENU_ITEMS = [
  { icon: Hotel, label: "Khách sạn & Chỗ nghỉ", href: "/hotel" },
  { icon: Plane, label: "Vé Máy bay", href: "/flights" },
  { icon: Train, label: "Tàu hỏa", href: "/train" },
  { icon: Car, label: "Đưa đón sân bay", href: "/car" },
  { icon: Map, label: "Tour & Hoạt động", href: "/tour" },
  { icon: Ticket, label: "Combo Tiết Kiệm", href: "/combo" },
];

export default function Sidebar() {
  const { isOpen } = useSidebarStore();

  return (
    <div className="flex flex-col h-full py-4 space-y-2">
      {MENU_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          title={!isOpen ? item.label : undefined}
          // p-0: Bỏ padding của thẻ Link để tự quản lý bên trong
          className={cn(
            "flex items-center rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group min-h-[48px] overflow-hidden",
            // Luôn luôn justify-start để icon không bị chạy
            "justify-start"
          )}
        >
          {/* 🔥 MẤU CHỐT Ở ĐÂY: 
            Tạo 1 cái hộp cố định (w-20 = 80px) chứa Icon.
            Dù mở hay đóng, hộp này vẫn rộng 80px và Icon luôn nằm giữa hộp đó.
          */}
          <div className="w-20 h-12 flex items-center justify-center shrink-0">
            <item.icon size={24} strokeWidth={1.5} />
          </div>

          {/* Text nằm bên phải cái hộp icon */}
          <span
            className={cn(
              "whitespace-nowrap overflow-hidden transition-all duration-300 origin-left",
              // Nếu mở: Hiện chữ. Nếu đóng: Width = 0
              isOpen ? "w-auto opacity-100 pr-4" : "w-0 opacity-0"
            )}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
