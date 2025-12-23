/**
 * Hotel search results page
 * Displays search results for hotels
 */

"use client";

import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function HotelSearchPage() {
  const searchParams = useSearchParams();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Kết quả tìm kiếm khách sạn</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters sidebar - TODO: Implement */}
        <div className="lg:col-span-1">
          <Card className="p-4">
            <h2 className="font-bold mb-4">Bộ lọc</h2>
            <p className="text-sm text-gray-500">Coming soon...</p>
          </Card>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            <p className="text-gray-500">
              Tìm thấy 0 khách sạn cho: {searchParams.get("cityCode")}
            </p>
            {/* TODO: Implement hotel list */}
          </div>
        </div>
      </div>
    </div>
  );
}

