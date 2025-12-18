"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format, addDays } from "date-fns";
import { Search, User, ArrowRightLeft } from "lucide-react"; // Icon ArrowRightLeft cho nút đảo chiều
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import CityPicker from "@/components/features/search/CityPicker";
import { DateRangePicker } from "@/components/features/search/DateRangePicker";
import { cn } from "@/lib/utils";

export default function SearchWidget() {
  const router = useRouter();

  // --- STATE QUẢN LÝ ---
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [fromCity, setFromCity] = useState("HAN");
  const [toCity, setToCity] = useState("SGN");

  // Ngày đi (Cho một chiều)
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Ngày khoảng (Cho khứ hồi) - Mặc định đi hôm nay, về sau 3 ngày
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  // --- HÀM XỬ LÝ ---

  // 1. Đảo ngược điểm đi và đến
  const handleSwapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  // 2. Xử lý tìm kiếm
  const handleSearch = () => {
    const params = new URLSearchParams({
      from: fromCity,
      to: toCity,
      adults: "1",
    });

    if (tripType === "one-way" && date) {
      params.set("date", format(date, "yyyy-MM-dd"));
      params.set("type", "one-way");
    } else if (tripType === "round-trip" && dateRange?.from && dateRange?.to) {
      params.set("startDate", format(dateRange.from, "yyyy-MM-dd"));
      params.set("endDate", format(dateRange.to, "yyyy-MM-dd"));
      params.set("type", "round-trip");
    }

    router.push(`/flights/search?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 space-y-5">
      {/* 1. TOP: Chọn loại vé & Hạng ghế */}
      <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-700">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="radio"
              name="tripType"
              checked={tripType === "one-way"}
              onChange={() => setTripType("one-way")}
              className="w-4 h-4 accent-blue-600"
            />
            Một chiều
          </label>
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="radio"
              name="tripType"
              checked={tripType === "round-trip"}
              onChange={() => setTripType("round-trip")}
              className="w-4 h-4 accent-blue-600"
            />
            Khứ hồi
          </label>
        </div>

        {/* Placeholder cho Hạng ghế (Sau này làm Popover) */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 ml-auto md:ml-0">
          <span>Phổ thông</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* 2. MIDDLE: Grid nhập liệu */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative">
        {/* Điểm đi (3 cột) */}
        <div className="md:col-span-3 z-30">
          <CityPicker label="TỪ" value={fromCity} onChange={setFromCity} />
        </div>

        {/* Nút đảo chiều (Nằm giữa 2 ô city) */}
        <div className="md:col-span-1 flex items-center justify-center -my-3 md:my-0">
          <button
            onClick={handleSwapCities}
            className="bg-white border border-gray-200 p-2 rounded-full hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition shadow-sm group"
            title="Đảo ngược điểm đi/đến"
          >
            <ArrowRightLeft
              size={16}
              className="group-hover:rotate-180 transition-transform duration-300 md:rotate-0 rotate-90"
            />
          </button>
        </div>

        {/* Điểm đến (3 cột) */}
        <div className="md:col-span-3 z-30">
          <CityPicker label="ĐẾN" value={toCity} onChange={setToCity} />
        </div>

        {/* Chọn ngày (3 cột) */}
        <div className="md:col-span-3 z-30">
          <DateRangePicker
            tripType={tripType}
            date={date}
            dateRange={dateRange}
            onDateChange={setDate}
            onRangeChange={setDateRange}
          />
        </div>

        {/* Chọn khách (2 cột) */}
        <div className="md:col-span-2">
          <label className="text-xs text-gray-500 font-bold ml-1 uppercase">
            Hành khách
          </label>
          <div className="relative h-14 border-b md:border md:rounded-lg flex items-center px-3 bg-white hover:border-blue-400 cursor-pointer transition-colors">
            <User className="text-gray-400 mr-2" size={20} />
            <span className="font-bold text-gray-900 text-lg truncate">
              1 Người
            </span>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM: Nút tìm kiếm */}
      <div className="flex justify-end pt-2">
        <Button
          size="lg"
          onClick={handleSearch}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-10 text-xl shadow-blue-200 shadow-xl rounded-xl"
        >
          <Search className="mr-2" strokeWidth={3} size={20} />
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
}
