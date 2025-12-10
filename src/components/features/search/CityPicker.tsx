"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Plane } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Mock data sân bay
const AIRPORTS = [
  { code: "HAN", city: "Hà Nội", name: "Sân bay Nội Bài" },
  { code: "SGN", city: "TP. Hồ Chí Minh", name: "Sân bay Tân Sơn Nhất" },
  { code: "DAD", city: "Đà Nẵng", name: "Sân bay Đà Nẵng" },
  { code: "PQC", city: "Phú Quốc", name: "Sân bay Phú Quốc" },
  { code: "CXR", city: "Nha Trang", name: "Sân bay Cam Ranh" },
];

interface CityPickerProps {
  label: string;
  value: string; // Mã sân bay (HAN)
  onChange: (code: string) => void;
  icon?: React.ReactNode;
}

export default function CityPicker({
  label,
  value,
  onChange,
  icon,
}: CityPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Tìm sân bay đang được chọn để hiển thị tên
  const selectedAirport = AIRPORTS.find((a) => a.code === value);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lọc danh sách sân bay theo từ khóa
  const filteredAirports = AIRPORTS.filter(
    (a) =>
      a.city.toLowerCase().includes(search.toLowerCase()) ||
      a.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="text-xs text-gray-500 font-bold ml-1 uppercase">
        {label}
      </label>

      {/* Ô hiển thị chính */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer border-b md:border border-gray-200 md:rounded-lg bg-white h-14 hover:border-blue-400 transition-colors"
      >
        <div className="absolute left-3 top-4 text-gray-400">
          {icon || <MapPin size={20} />}
        </div>
        <div className="pl-10 pt-2">
          <div className="font-bold text-lg leading-none">
            {selectedAirport?.city || "Chọn thành phố"}
          </div>
          <div className="text-xs text-gray-400">{selectedAirport?.name}</div>
        </div>
        <span className="absolute right-3 top-4 text-gray-400 text-xs font-mono font-bold border border-gray-200 px-1 rounded">
          {value}
        </span>
      </div>

      {/* Dropdown Gợi ý */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 mt-2 w-full md:w-[300px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="p-2 bg-gray-50 border-b">
            <Input
              placeholder="Nhập tên thành phố hoặc mã sân bay..."
              className="h-9 text-sm"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredAirports.map((airport) => (
              <div
                key={airport.code}
                onClick={() => {
                  onChange(airport.code);
                  setIsOpen(false);
                }}
                className="p-3 hover:bg-blue-50 cursor-pointer flex justify-between items-center group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full group-hover:bg-blue-200 text-gray-500 group-hover:text-blue-600 transition-colors">
                    <Plane size={16} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">
                      {airport.city}
                    </div>
                    <div className="text-xs text-gray-500">{airport.name}</div>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-gray-400">
                  {airport.code}
                </span>
              </div>
            ))}
            {filteredAirports.length === 0 && (
              <div className="p-4 text-center text-sm text-gray-500">
                Không tìm thấy kết quả
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
