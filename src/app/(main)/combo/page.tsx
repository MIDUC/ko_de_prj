/**
 * Combo/Package deals page
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function ComboPage() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (date) params.set("date", date);

    router.push(`${ROUTES.COMBO_SEARCH}?${params.toString()}`);
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Combo Tiết Kiệm</h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <div>
          <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block">
            Điểm đến
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Thành phố, địa điểm..."
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block">
            Ngày (tùy chọn)
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <Button
          size="lg"
          onClick={handleSearch}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-xl"
        >
          <Search className="mr-2" size={20} />
          Tìm combo
        </Button>
      </div>
    </div>
  );
}

