import { Flight } from "@/types/flight";
import { Plane, ChevronDown, Luggage } from "lucide-react";

export default function FlightCard({ flight }: { flight: Flight }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4 hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT: Thông tin chuyến bay (Chiếm phần lớn) */}
        <div className="flex-1">
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* 1. Hãng bay */}
            <div className="col-span-12 sm:col-span-3 flex sm:flex-col items-center sm:items-start gap-2">
              {/* Dùng thẻ img thường cho nhanh, sau này đổi Next Image */}
              <img
                src={flight.airlineLogo}
                alt={flight.airlineName}
                className="h-8 w-auto object-contain"
              />
              <div className="text-xs font-semibold text-gray-600 truncate max-w-full">
                {flight.airlineName}
              </div>
            </div>

            {/* 2. Thời gian & Hành trình */}
            <div className="col-span-12 sm:col-span-9 flex items-center justify-between">
              {/* Đi */}
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800 leading-none">
                  {flight.departTime}
                </div>
                <div className="text-xs text-gray-500 mt-1">HAN T1</div>
              </div>

              {/* Duration Line */}
              <div className="flex flex-col items-center px-2 flex-1">
                <span className="text-xs text-gray-400 mb-1">
                  {flight.duration}
                </span>
                <div className="w-full max-w-[120px] h-[px] bg-gray-300 relative flex items-center justify-center">
                  {/* Icon máy bay xoay 90 độ */}
                  <Plane
                    size={14}
                    className="text-gray-400 rotate-90 bg-white px-0.5 absolute"
                  />
                </div>
                <span
                  className={`text-xs mt-1 font-medium ${
                    flight.stops === 0 ? "text-blue-600" : "text-orange-500"
                  }`}
                >
                  {flight.stops === 0
                    ? "Bay thẳng"
                    : `${flight.stops} điểm dừng`}
                </span>
              </div>

              {/* Đến */}
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800 leading-none">
                  {flight.arriveTime}
                </div>
                <div className="text-xs text-gray-500 mt-1">SGN T1</div>
              </div>
            </div>
          </div>

          {/* Thông tin phụ (Hành lý) */}
          <div className="mt-4 pt-3 border-t border-dashed border-gray-200 flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-teal-600">
              <Luggage size={14} />
              <span>Có hành lý xách tay</span>
            </div>
            <button className="text-xs text-blue-600 flex items-center gap-0.5 hover:underline">
              Chi tiết <ChevronDown size={12} />
            </button>
          </div>
        </div>

        {/* RIGHT: Giá & Nút Mua */}
        <div className="flex flex-row md:flex-col justify-between items-center md:items-end md:justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 gap-2 min-w-[140px]">
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              {flight.price} {flight.currency}
            </div>
            <div className="text-xs text-gray-400 line-through">
              {(flight.price * 1.2).toFixed(0)} {flight.currency}
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg transition-colors shadow-blue-100 shadow-lg">
            Chọn
          </button>
        </div>
      </div>
    </div>
  );
}
