/**
 * Tour search results page
 */

"use client";

import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function TourSearchPage() {
  const searchParams = useSearchParams();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Kết quả tìm kiếm tour</h1>
      <Card className="p-6">
        <p className="text-gray-500">
          Tìm thấy 0 tour tại {searchParams.get("location") || "tất cả địa điểm"}
        </p>
        {/* TODO: Implement tour list */}
      </Card>
    </div>
  );
}

