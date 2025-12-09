"use client";
import {
  Search,
  ArrowRight,
  MapPin,
  ArrowRightLeft,
  Calendar,
  User,
} from "lucide-react";
import { useState } from "react";

interface CompactSearchFormProps {
  className?: string;
}
export default function CompactSearchForm({
  className,
}: CompactSearchFormProps) {
  // State quản lý loại vé: Khứ hồi hay Một chiều
  const [tripType, setTripType] = useState<
    "round-trip" | "one-way" | "mutil-city"
  >("round-trip");

  return (
    <div className={`flex flex-col gap-5 ${className || ""}`}>
      {/* 1. Radio Options (Khứ hồi / Một chiều) */}
      <div className="flex gap-2 md:gap-6">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="radio"
            name="tripType"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 accent-blue-600"
            checked={tripType === "round-trip"}
            onChange={() => setTripType("round-trip")}
          />
          <span className="text-sm font-medium text-gray-700">Khứ hồi</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="radio"
            name="tripType"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 accent-blue-600"
            checked={tripType === "one-way"}
            onChange={() => setTripType("one-way")}
          />
          <span className="text-sm font-medium text-gray-700">Một chiều</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="radio"
            name="tripType"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 accent-blue-600"
            checked={tripType === "mutil-city"}
            onChange={() => setTripType("mutil-city")}
          />
          <span className="text-sm font-medium text-gray-700">
            Nhiều thành phố
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            className="w-4 h-4 rounded text-blue-600 accent-blue-600"
          />
          <span className="text-sm font-medium text-gray-700">Bay thẳng</span>
        </label>
      </div>

      {/* 2. Inputs Grid - Layout chính */}
      <div className="grid grid-cols-1 lg:grid-cols-24 gap-2">
        {/* Điểm đi & Điểm đến (Chiếm 5 phần) */}
        <div className="lg:col-span-10 flex relative group">
          <div className="flex-1 relative">
            <div className="absolute top-3 left-3 text-gray-400 pointer-events-none">
              <MapPin size={16} />
            </div>
            <label className="block text-xs text-gray-500 absolute top-2 left-9 pointer-events-none">
              Từ
            </label>
            <input
              type="text"
              defaultValue="Hà Nội (HAN)"
              className="w-full h-14 pl-9 pr-2 pt-4 bg-gray-50 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-gray-800 transition-all hover:bg-gray-100"
            />
          </div>

          {/* Nút đảo chiều (Nằm giữa) */}
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 p-1.5 rounded-full shadow-sm hover:rotate-180 transition-transform hover:shadow-md"
            aria-label="Đổi điểm đi và đến"
          >
            <ArrowRightLeft size={14} className="text-blue-600" />
          </button>

          <div className="flex-1 relative">
            <div className="absolute top-3 left-3 text-gray-400 pointer-events-none">
              <MapPin size={16} />
            </div>
            <label className="block text-xs text-gray-500 absolute top-2 left-9 pointer-events-none">
              Đến
            </label>
            <input
              type="text"
              placeholder="Thành phố, sân bay..."
              className="w-full h-14 pl-9 pr-2 pt-4 bg-gray-50 border border-gray-200 rounded-r-lg lg:rounded-r-none border-l-0 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-gray-800 transition-all hover:bg-gray-100"
            />
          </div>
        </div>

        {/* Ngày đi & Ngày về (Chiếm 4 phần) */}
        <div className="lg:col-span-6 relative group">
          <div className="absolute top-3 left-3 text-gray-400 pointer-events-none">
            <Calendar size={16} />
          </div>
          <label className="block text-xs text-gray-500 absolute top-2 left-9 pointer-events-none">
            Đi - Về
          </label>
          <input
            type="text"
            defaultValue="T6, 5 thg 12 - T7, 6 thg 12"
            readOnly
            className="w-full h-14 pl-9 pr-2 pt-4 bg-gray-50 border border-gray-200 rounded-lg lg:rounded-none lg:border-l-0 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-gray-800 cursor-pointer transition-all hover:bg-gray-100"
          />
        </div>

        {/* Hành khách (Chiếm 3 phần) */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute top-3 left-3 text-gray-400 pointer-events-none">
            <User size={16} />
          </div>
          <label className="block text-xs text-gray-500 absolute top-2 left-9 pointer-events-none">
            Hành khách / Hạng ghế
          </label>
          <input
            type="text"
            defaultValue="1 Người lớn, Phổ thông"
            readOnly
            className="w-full h-14 pl-9 pr-2 pt-4 bg-gray-50 border border-gray-200 rounded-lg lg:rounded-l-none lg:rounded-r-lg lg:border-l-0 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-gray-800 cursor-pointer truncate transition-all hover:bg-gray-100"
          />
        </div>
        <div className="lg:col-span-3 relative group">
          <button
            type="submit"
            className=" h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200 active:scale-95"
          >
            <Search size={20} />
            <span>Tìm kiếm</span>
          </button>
        </div>
      </div>
    </div>
  );
}
