"use client";

import Sidebar from "@/components/features/home/Sidebar";
import SearchWidget from "@/components/features/home/SearchWidget"; // Import mới
import { Ticket } from "lucide-react"; // Icon cho phần promo

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-50 pb-24 md:pb-0">
      <div className="flex-1 flex flex-col min-w-0">
        {/* 1. Banner Xanh */}
        <section className="bg-linear-to-r from-blue-600 to-blue-500 h-64 md:h-120 relative overflow-hidden rounded-2xl">
          {/* Trang trí nền (Optional) */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://pages.trip.com/images/home-banner-bg.png')] bg-cover bg-center" />

          <div className="relative z-10 text-white text-center pt-10 px-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-shadow">
              Khám phá thế giới cùng KoDe.com
            </h1>
            <p className="text-blue-100 hidden md:block">
              Đặt vé máy bay, khách sạn, tàu hỏa với giá tốt nhất
            </p>
          </div>
        </section>

        {/* 2. SEARCH WIDGET (Thanh tìm kiếm) */}
        {/* -mt-32: Kéo ngược lên để đè lên banner xanh */}
        <div className="px-4 md:px-8 lg:px-12 -mt-50 relative z-20 mb-12">
          <div className="max-w-6xl mx-auto">
            <SearchWidget />
          </div>
        </div>

        {/* 3. Promo Section (Nội dung dưới) */}
        <div className="px-4 md:px-12 max-w-6xl mx-auto w-full space-y-6">
          {/* Section Title */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Ưu đãi dành cho bạn
            </h2>
            <a
              href="#"
              className="text-sm text-blue-600 font-semibold hover:underline"
            >
              Xem tất cả
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer flex items-center gap-4"
              >
                <div className="bg-red-50 text-red-500 p-3 rounded-full shrink-0">
                  <Ticket size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 line-clamp-1">
                    Giảm 15% Vé máy bay
                  </p>
                  <p className="text-xs text-gray-500">Hết hạn: 31/12</p>
                  <div className="mt-2 text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded w-fit font-bold">
                    HOT
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
