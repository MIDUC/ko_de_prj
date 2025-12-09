"use client";

import { useUrlFilter } from "@/hooks/useUrlFilter";
import { Check } from "lucide-react";

const AIRLINES = [
  { id: "VJ", name: "VietJet Air", price: "110 US$" },
  { id: "VN", name: "Vietnam Airlines", price: "122 US$" },
  { id: "QH", name: "Bamboo Airways", price: "110 US$" },
];

export default function FilterSidebar() {
  const { toggleFilter, isSelected } = useUrlFilter();

  return (
    <div className="flex flex-col gap-4">
      {/* 1. Bộ lọc dừng/thẳng */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3 text-sm">Điểm dừng</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={isSelected("stops", "0")}
              onChange={() => toggleFilter("stops", "0")}
            />
            <span className="text-sm text-gray-600 group-hover:text-blue-600">
              Bay thẳng
            </span>
          </label>
        </div>
      </div>

      {/* 2. Bộ lọc Hãng bay */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3 text-sm">
          Hãng hàng không
        </h3>
        <div className="flex flex-col gap-3">
          {AIRLINES.map((airline) => (
            <label
              key={airline.id}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={isSelected("airlines", airline.id)}
                    onChange={() => toggleFilter("airlines", airline.id)}
                  />
                </div>
                {/* Logo giả lập */}
                <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                <span className="text-sm text-gray-600 group-hover:text-blue-600">
                  {airline.name}
                </span>
              </div>
              <span className="text-xs text-gray-400">{airline.price}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
