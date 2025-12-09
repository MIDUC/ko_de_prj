"use client";

import FlightSearchForm from "@/components/features/search/flight/flight-search-form";

// 1. Định nghĩa danh sách Tabs
// const TABS = [
//   { id: "hotels", label: "Khách sạn", icon: Hotel },
//   { id: "flights", label: "Vé máy bay", icon: Plane },
//   { id: "trains", label: "Vé tàu", icon: Train },
//   { id: "cars", label: "Đưa đón sân bay", icon: Car },
// ];

export function SearchWidget() {
  //   const [activeTab, setActiveTab] = useState("flights"); // Mặc định chọn Vé máy bay để giống ảnh 2

  return (
    <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
      {/* --- PHẦN 1: TAB HEADER --- */}
      <div className="p-10 scrollbar-hide border-gray-100">
        <FlightSearchForm />
      </div>
    </div>
  );
}
