/**
 * Train search results page
 */

"use client";

import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function TrainSearchPage() {
  const searchParams = useSearchParams();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Kết quả tìm kiếm vé tàu</h1>
      <Card className="p-6">
        <p className="text-gray-500">
          Tìm thấy 0 chuyến tàu từ {searchParams.get("from")} đến {searchParams.get("to")}
        </p>
        {/* TODO: Implement train list */}
      </Card>
    </div>
  );
}

