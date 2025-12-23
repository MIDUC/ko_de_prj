/**
 * Hotel search page
 * Main page for hotel search and booking
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format, addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import CityPicker from "@/components/features/search/CityPicker";
import { DateRangePicker } from "@/components/features/search/DateRangePicker";
import { ROUTES } from "@/constants/routes";

export default function HotelPage() {
  const router = useRouter();
  const [city, setCity] = useState("HAN");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
    if (!dateRange?.from || !dateRange?.to) return;

    const params = new URLSearchParams({
      cityCode: city,
      checkIn: format(dateRange.from, "yyyy-MM-dd"),
      checkOut: format(dateRange.to, "yyyy-MM-dd"),
      adults: adults.toString(),
      rooms: rooms.toString(),
    });

    router.push(`${ROUTES.HOTEL_SEARCH}?${params.toString()}`);
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Tìm khách sạn</h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
        {/* City selection */}
        <div>
          <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block">
            Thành phố
          </label>
          <CityPicker label="" value={city} onChange={setCity} />
        </div>

        {/* Date range */}
        <div>
          <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block">
            Ngày nhận phòng / Trả phòng
          </label>
          <DateRangePicker
            tripType="round-trip"
            date={undefined}
            dateRange={dateRange}
            onDateChange={() => {}}
            onRangeChange={setDateRange}
          />
        </div>

        {/* Guests and rooms */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block">
              Số phòng
            </label>
            <div className="flex items-center gap-2 border rounded-lg p-3">
              <button
                onClick={() => setRooms(Math.max(1, rooms - 1))}
                className="w-8 h-8 rounded border flex items-center justify-center"
              >
                -
              </button>
              <span className="flex-1 text-center font-bold">{rooms}</span>
              <button
                onClick={() => setRooms(rooms + 1)}
                className="w-8 h-8 rounded border flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block">
              Số khách
            </label>
            <div className="flex items-center gap-2 border rounded-lg p-3">
              <button
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="w-8 h-8 rounded border flex items-center justify-center"
              >
                -
              </button>
              <span className="flex-1 text-center font-bold">{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="w-8 h-8 rounded border flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Search button */}
        <Button
          size="lg"
          onClick={handleSearch}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-xl"
        >
          <Search className="mr-2" size={20} />
          Tìm khách sạn
        </Button>
      </div>
    </div>
  );
}

