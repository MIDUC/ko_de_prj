// src/app/(main)/layout.tsx
import Header from "@/components/layout/home/header";
import Sidebar from "@/components/layout/home/sidebar";
import BottomNav from "@/components/layout/home/bottom-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* 1. Sidebar bên trái: Chỉ hiện khi màn hình > md (Desktop) */}
      {/* Ẩn trên mobile (hidden), hiện trên desktop (md:block) */}
      <aside className="hidden md:block w-64 bg-white border-r border-gray-200 fixed h-full z-10">
        <Sidebar />
      </aside>

      {/* 2. Nội dung chính (Main Content) */}
      {/* Trên desktop thì thụt vào 64 (md:ml-64) để nhường chỗ cho sidebar */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen pb-16 md:pb-0">
        <Header /> {/* Thanh tìm kiếm trên cùng */}
        <div className="p-4">
          {children} {/* Đây chính là nơi app/(main)/page.tsx sẽ hiển thị */}
        </div>
      </main>

      {/* 3. Bottom Navigation: Chỉ hiện khi màn hình nhỏ (Mobile) */}
      {/* Hiện trên mobile (block), ẩn trên desktop (md:hidden) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomNav />
      </div>
    </div>
  );
}
