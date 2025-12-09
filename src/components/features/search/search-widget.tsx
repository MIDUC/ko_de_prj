"use client";

import React, { useState } from "react";
import { Hotel, Plane, Train, Car } from "lucide-react";
import { cn } from "@/lib/utils"; // Hàm tiện ích ghép class (nếu chưa có, xem ghi chú cuối bài)
import FlightSearchForm from "./flight/flight-search-form";

// 1. Định nghĩa danh sách Tabs
const TABS = [
  { id: "hotels", label: "Khách sạn", icon: Hotel },
  { id: "flights", label: "Vé máy bay", icon: Plane },
  { id: "trains", label: "Vé tàu", icon: Train },
  { id: "cars", label: "Đưa đón sân bay", icon: Car },
];

export function SearchWidget() {
  const [activeTab, setActiveTab] = useState("flights"); // Mặc định chọn Vé máy bay để giống ảnh 2

  return (
    <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
      {/* --- PHẦN 1: TAB HEADER --- */}
      <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-100">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-all relative",
                isActive ? "text-blue-600" : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
              {/* Đường gạch chân màu xanh khi active */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600" />
              )}
            </button>
          );
        })}
      </div>

      {/* --- PHẦN 2: CONTENT PANEL --- */}
      <div className="p-6">
        {activeTab === "hotels" && <HotelSearchForm />}
        {activeTab === "flights" && <FlightSearchForm />}
        {activeTab === "trains" && (
          <div className="p-8 text-center text-gray-500">
            Chức năng Vé tàu đang phát triển
          </div>
        )}
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: FORM TÌM KHÁCH SẠN (Demo đơn giản) ---
function HotelSearchForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100">
        Demo: Form tìm khách sạn sẽ đặt ở đây
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-12 bg-gray-50 border rounded-lg"></div>
        <div className="h-12 bg-gray-50 border rounded-lg"></div>
      </div>
      <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg mt-2">
        Tìm Khách sạn
      </button>
    </div>
  );
}
