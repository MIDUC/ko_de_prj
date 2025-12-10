import React from "react";
import Sidebar from "@/components/features/home/Sidebar";
import Header from "@/components/layout/home/header";
import MobileNav from "@/components/common/MobileNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. HEADER (Nằm trên cùng, bao trùm toàn bộ) */}
      {/* fixed top-0 left-0 right-0: Ghim chặt lên đỉnh, rộng full màn hình */}
      {/* z-50: Đè lên mọi thứ khác */}
      {/* h-16: Chiều cao cố định (64px) */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200">
        <Header />
      </div>

      {/* 2. SIDEBAR (Nằm bên trái, NHƯNG bên dưới Header) */}
      {/* top-16: Cách đỉnh 16 đơn vị (64px) để không đè lên Header */}
      {/* h-[calc(100vh-4rem)]: Chiều cao bằng màn hình trừ đi Header */}
      <aside className="hidden md:block w-64 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 z-40 overflow-y-auto">
        <Sidebar />
      </aside>

      {/* 3. MAIN CONTENT (Nội dung chính) */}
      {/* pt-16: Đẩy nội dung xuống 64px để không bị Header che */}
      {/* md:pl-64: Đẩy nội dung sang phải 256px để không bị Sidebar che */}
      <main className="pt-16 md:pl-64 min-h-screen w-full">
        <div className="p-4 md:p-6">{children}</div>
      </main>

      {/* 4. Bottom Nav (Mobile) */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
