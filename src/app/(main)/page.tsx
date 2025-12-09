"use client";

import { Train, Car, Tag, ShieldCheck } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { PromoCard } from "@/components/home/ui/PromoCard";

export default function HomePage() {
  return (
    <div className="space-y-8 pb-10">
      {/* 1. Phần Banner & Tìm kiếm */}
      <HeroSection />

      {/* 2. Phần Danh sách khuyến mãi */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 px-2">
          Dành riêng cho bạn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PromoCard
            title="Giảm 5% Vé Tàu"
            desc="Áp dụng cho mọi tuyến EU"
            badge="HOT"
            icon={<Train className="text-red-500" />}
          />
          <PromoCard
            title="Đưa đón sân bay"
            desc="Tiết kiệm đến 10%"
            badge="MỚI"
            icon={<Car className="text-blue-500" />}
          />
          <PromoCard
            title="Combo Tiết Kiệm"
            desc="Vé + Khách sạn"
            badge="-15%"
            icon={<Tag className="text-green-500" />}
          />
          <PromoCard
            title="Bảo hiểm du lịch"
            desc="An tâm mọi chuyến đi"
            badge="Free"
            icon={<ShieldCheck className="text-orange-500" />}
          />
        </div>
      </div>
    </div>
  );
}
