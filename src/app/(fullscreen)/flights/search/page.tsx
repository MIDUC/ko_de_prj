"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FilterSidebar from "@/components/features/search/flight/flight-search/FilterSidebar";
import FlightList from "@/components/features/search/flight/flight-search/FlightList";
import CompactSearchForm from "@/components/features/search/flight/flight-search/CompactSearchForm";
import DatePriceStrip from "@/components/features/search/flight/flight-search/DatePriceStrip";
import SortBar from "@/components/features/search/flight/flight-search/SortBar";

// Import Fake Data
import { MOCK_FLIGHTS } from "@/data/mock-flights";
import { Flight } from "@/types/flight";

// Hàm Fake API (Giả vờ gọi Server)
const fetchFlightsFake = async (params: URLSearchParams): Promise<Flight[]> => {
  // Giả lập độ trễ mạng 1 giây (1000ms) để thấy hiệu ứng loading
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Ở đây bạn có thể viết logic lọc giả (Client Side Filtering) nếu thích
  // Ví dụ: Nếu params có 'stops=0' thì filter array...
  // Hiện tại tôi trả về hết để test giao diện
  return MOCK_FLIGHTS;
};
// Hàm gọi API (Call Java Backend)
const fetchFlights = async (params: URLSearchParams) => {
  // Chuyển searchParams thành object để gửi xuống Backend
  const queryString = params.toString();
  // Backend Java của bạn sẽ đón request tại: /api/flights/search?from=HAN&to=SGN...
  const { data } = await axios.get(`/api/flights/search?${queryString}`);
  return data;
};

export default function FlightSearchPage() {
  const searchParams = useSearchParams();

  // TanStack Query: Tự động gọi API khi searchParams thay đổi
  // key: ['flights', searchParams.toString()] -> Khi URL đổi, key đổi -> fetch lại
  //   const {
  //     data: flights,
  //     isLoading,
  //     error,
  //   } = useQuery({
  //     queryKey: ["flights", searchParams.toString()],
  //     queryFn: () => fetchFlights(searchParams),
  //     staleTime: 5 * 60 * 1000, // Cache dữ liệu 5 phút để user back lại không phải load lại
  //   });
  const { data: flights } = useQuery({
    queryKey: ["flights", searchParams.toString()],
    queryFn: () => fetchFlightsFake(searchParams),
  });
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="container mx-auto max-w-7xl mt-6 px-4">
        <div className="border border-gray-200 rounded-lg bg-white shadow-md mb-4 p-10">
          <CompactSearchForm /> {/* Header xanh đậm */}
        </div>
        <div className="border border-gray-200 rounded-lg bg-white shadow-md mb-4">
          <DatePriceStrip /> {/* Thanh ngày tháng màu trắng */}
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3 hidden lg:block">
            <FilterSidebar /> {/* Sidebar bên trái */}
          </div>

          <div className="col-span-12 lg:col-span-9">
            <SortBar /> {/* <--- THÊM MỚI VÀO ĐÂY: Thanh filter ngang */}
            {/* ... Phần list kết quả ... */}
            {flights && <FlightList data={flights} />}
          </div>
        </div>
      </div>
    </div>
  );
}
