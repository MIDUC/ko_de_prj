"use client";

import { useState } from "react";
import { Plane, Hotel, Train, Car, ArrowRightLeft } from "lucide-react";
import { ServiceTab } from "@/components/ui/home/ServiceTab"; // Import từ component con
import { SearchType } from "@/types"; // Import type

export function SearchWidget() {
  const [activeTab, setActiveTab] = useState<SearchType>("flight");

  return (
    <div className="relative z-20 bg-white rounded-xl shadow-xl mx-4 md:mx-auto max-w-4xl mt-4 text-gray-800">
      {/* 1. Danh sách Tabs */}
      <div className="flex space-x-1 border-b p-2 overflow-x-auto scrollbar-hide">
        <ServiceTab
          icon={<Hotel size={18} />}
          label="Khách sạn"
          active={activeTab === "hotel"}
          onClick={() => setActiveTab("hotel")}
        />
        <ServiceTab
          icon={<Plane size={18} />}
          label="Vé máy bay"
          active={activeTab === "flight"}
          onClick={() => setActiveTab("flight")}
        />
        <ServiceTab
          icon={<Train size={18} />}
          label="Vé tàu"
          active={activeTab === "train"}
          onClick={() => setActiveTab("train")}
        />
        <ServiceTab
          icon={<Car size={18} />}
          label="Đưa đón"
          active={activeTab === "car"}
          onClick={() => setActiveTab("car")}
        />
      </div>

      {/* 2. Nội dung Form tìm kiếm */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          {/* Input Khu vực (Hà Nội -> HCM) */}
          <div className="flex-1 w-full grid grid-cols-2 gap-0 border rounded-lg relative overflow-hidden">
            <div className="p-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <span className="text-xs text-gray-500 font-medium">Từ</span>
              <div className="font-bold text-lg text-gray-900 truncate">
                Hà Nội (HAN)
              </div>
            </div>

            <div className="border-l p-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <span className="text-xs text-gray-500 font-medium">Đến</span>
              <div className="font-bold text-lg text-gray-900 truncate">
                Hồ Chí Minh (SGN)
              </div>
            </div>

            {/* Icon đảo chiều */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 border shadow-sm cursor-pointer hover:rotate-180 transition-transform z-10">
              <ArrowRightLeft className="w-4 h-4 text-blue-600" />
            </div>
          </div>

          {/* Nút Tìm kiếm */}
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg active:scale-95 transition-all text-lg whitespace-nowrap">
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}
