"use client";
import React from "react";
import Sidebar from "@/components/features/home/Sidebar";
import Header from "@/components/layout/home/header";
import MobileNav from "@/components/common/MobileNav";
import { useSidebarStore } from "@/store/use-sidebar-store"; // Import store
import { cn } from "@/lib/utils";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebarStore(); // Lấy trạng thái đóng mở
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. HEADER (Nằm trên cùng, bao trùm toàn bộ) */}
      {/* fixed top-0 left-0 right-0: Ghim chặt lên đỉnh, rộng full màn hình */}
      {/* z-50: Đè lên mọi thứ khác */}
      {/* h-16: Chiều cao cố định (64px) */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200">
        <Header />
      </div>

      <aside
        className={cn(
          "bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 z-40 overflow-y-auto transition-all duration-300 ease-in-out scrollbar-hide",
          // 👇 CHỖ NÀY PHẢI LÀ w-20 ĐỂ KHỚP VỚI CODE TRÊN
          isOpen ? "w-64" : "w-20 -translate-x-full md:translate-x-0 md:w-20"
        )}
      >
        <Sidebar />
      </aside>

      <main
        className={cn(
          "pt-16 min-h-screen w-full transition-all duration-300 ease-in-out",
          // 👇 CHỖ NÀY CŨNG PHẢI LÀ pl-20
          isOpen ? "md:pl-64" : "md:pl-20"
        )}
      >
        <div className="p-4 md:p-6">{children}</div>
      </main>

      {/* 4. Bottom Nav (Mobile) */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
