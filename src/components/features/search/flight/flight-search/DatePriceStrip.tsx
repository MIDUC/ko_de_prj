"use client";

import { useUrlFilter } from "@/hooks/useUrlFilter";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

// Giả lập dữ liệu giá các ngày xung quanh
const DATES = [
  { date: "2024-12-09", label: "9/12", price: "101 US$" },
  { date: "2024-12-10", label: "10/12", price: "110 US$" }, // Đang chọn
  { date: "2024-12-11", label: "11/12", price: "105 US$" },
  { date: "2024-12-12", label: "12/12", price: "104 US$" },
  { date: "2024-12-13", label: "13/12", price: "102 US$" },
];

export default function DatePriceStrip() {
  const { updateFilter, searchParams } = useUrlFilter();
  // Giả sử lấy date từ URL, nếu ko có thì lấy ngày hiện tại
  const currentDate = searchParams.get("date") || "2024-12-10";

  return (
    <div className="bg-white border-b rounded-lg border-gray-200 py-2">
      <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between gap-2">
        <button className="p-1 hover:bg-gray-100 rounded-full text-gray-500">
          <ChevronLeft size={20} />
        </button>

        <div className="flex-1 flex justify-between gap-1 overflow-x-auto no-scrollbar">
          {DATES.map((item) => {
            const isSelected = currentDate === item.date;
            return (
              <button
                key={item.date}
                onClick={() => updateFilter("date", item.date)}
                className={cn(
                  "flex-1 min-w-20 flex flex-col items-center py-2 rounded transition-all",
                  isSelected
                    ? "bg-blue-600 text-white shadow-md transform -translate-y-1"
                    : "hover:bg-gray-50 text-gray-600"
                )}
              >
                <span
                  className={cn(
                    "text-xs mb-1",
                    isSelected ? "text-blue-100" : "text-gray-400"
                  )}
                >
                  {item.label}
                </span>
                <span
                  className={cn(
                    "text-sm font-bold",
                    isSelected ? "text-white" : "text-gray-800"
                  )}
                >
                  {item.price}
                </span>
              </button>
            );
          })}
        </div>

        <button className="p-1 hover:bg-gray-100 rounded-full text-gray-500">
          <ChevronRight size={20} />
        </button>

        <div className="w-px h-8 bg-gray-200 mx-2 hidden md:block"></div>

        <button className="hidden md:flex flex-col items-center text-gray-500 hover:text-blue-600 min-w-[60px]">
          <CalendarDays size={20} />
          <span className="text-[10px] mt-1 font-medium">Bảng giá</span>
        </button>
      </div>
    </div>
  );
}
