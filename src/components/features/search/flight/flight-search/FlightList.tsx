import { Flight } from "@/types/flight";
import FlightCard from "./FlightCard";
import { Ghost } from "lucide-react";

interface FlightListProps {
  data: Flight[];
}

export default function FlightList({ data }: FlightListProps) {
  // 1. Trường hợp không có dữ liệu (Empty State)
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
        <div className="p-4 bg-gray-50 rounded-full mb-4">
          <Ghost size={40} className="text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-700">
          Không tìm thấy chuyến bay
        </h3>
        <p className="text-gray-500 text-sm">
          Vui lòng thử thay đổi bộ lọc tìm kiếm
        </p>
      </div>
    );
  }

  // 2. Có dữ liệu -> Map ra danh sách
  return (
    <div className="flex flex-col">
      {/* Banner quảng cáo (nếu có) */}
      <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg mb-4 flex items-center justify-between">
        <span className="text-sm text-blue-800 font-medium">
          ✨ Mẹo: Đặt vé khứ hồi để tiết kiệm đến 20%
        </span>
      </div>

      {data.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}
