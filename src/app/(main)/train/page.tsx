/**
 * Train search page
 * Main page for train ticket search and booking
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Search, ArrowRightLeft } from "lucide-react";
import CityPicker from "@/components/features/search/CityPicker";
import { ROUTES } from "@/constants/routes";

export default function TrainPage() {
  const router = useRouter();
  const [from, setFrom] = useState("HAN");
  const [to, setTo] = useState("SGN");
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      from,
      to,
      date: format(date, "yyyy-MM-dd"),
      passengers: passengers.toString(),
    });

    router.push(`${ROUTES.TRAIN_SEARCH}?${params.toString()}`);
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Tìm vé tàu</h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5">
            <CityPicker label="Điểm đi" value={from} onChange={setFrom} />
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <button
              onClick={handleSwap}
              className="p-2 rounded-full border hover:bg-blue-50 transition-colors"
            >
              <ArrowRightLeft size={20} />
            </button>
          </div>
          <div className="md:col-span-5">
            <CityPicker label="Điểm đến" value={to} onChange={setTo} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block">
              Ngày đi
            </label>
            <input
              type="date"
              value={format(date, "yyyy-MM-dd")}
              onChange={(e) => setDate(new Date(e.target.value))}
              className="w-full border rounded-lg p-3"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block">
              Số hành khách
            </label>
            <div className="flex items-center gap-2 border rounded-lg p-3">
              <button
                onClick={() => setPassengers(Math.max(1, passengers - 1))}
                className="w-8 h-8 rounded border flex items-center justify-center"
              >
                -
              </button>
              <span className="flex-1 text-center font-bold">{passengers}</span>
              <button
                onClick={() => setPassengers(passengers + 1)}
                className="w-8 h-8 rounded border flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          onClick={handleSearch}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-xl"
        >
          <Search className="mr-2" size={20} />
          Tìm vé tàu
        </Button>
      </div>
    </div>
  );
}

