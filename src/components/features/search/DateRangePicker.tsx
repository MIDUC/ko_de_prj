"use client";

import * as React from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

interface DateRangePickerProps {
  tripType: "one-way" | "round-trip";
  date: Date | undefined;
  dateRange: DateRange | undefined;
  onDateChange: (date: Date | undefined) => void;
  onRangeChange: (range: DateRange | undefined) => void;
}

export function DateRangePicker({
  tripType,
  date,
  dateRange,
  onDateChange,
  onRangeChange,
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Đóng khi click ra ngoài
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Text hiển thị
  const displayText = React.useMemo(() => {
    if (tripType === "one-way") {
      return date
        ? format(date, "EEE, dd 'thg' MM", { locale: vi })
        : "Chọn ngày đi";
    } else {
      if (dateRange?.from) {
        if (dateRange.to) {
          return `${format(dateRange.from, "dd/MM", { locale: vi })} - ${format(
            dateRange.to,
            "dd/MM",
            { locale: vi }
          )}`;
        }
        return format(dateRange.from, "EEE, dd 'thg' MM", { locale: vi });
      }
      return "Chọn ngày đi - về";
    }
  }, [tripType, date, dateRange]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="text-xs text-gray-500 font-bold ml-1 uppercase">
        {tripType === "one-way" ? "Ngày đi" : "Ngày đi - về"}
      </label>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-start text-left font-normal",
          "h-14 border-b md:border md:rounded-lg px-3 hover:border-blue-400 bg-white transition-colors relative"
        )}
      >
        <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
        <span className="text-lg font-bold text-gray-900 capitalize truncate">
          {displayText}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 animate-in fade-in zoom-in-95 overflow-hidden min-w-[300px] md:min-w-[600px]">
          {/* Nút đóng trên mobile */}
          <div className="flex md:hidden justify-end mb-2">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-gray-100 rounded-full"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex justify-center">
            {/* 🔥 SỬA LỖI: Tách riêng 2 trường hợp để TypeScript hiểu rõ kiểu dữ liệu */}
            {tripType === "round-trip" ? (
              // Trường hợp 1: KHỨ HỒI (Range Mode)
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={onRangeChange} // Tự động hiểu đây là DateRange
                numberOfMonths={2}
                disabled={(date) =>
                  date < new Date(new Date().setHours(0, 0, 0, 0))
                }
              />
            ) : (
              // Trường hợp 2: MỘT CHIỀU (Single Mode)
              <Calendar
                initialFocus
                mode="single"
                defaultMonth={date}
                selected={date}
                onSelect={(val) => {
                  onDateChange(val);
                  setIsOpen(false); // Chọn xong đóng luôn
                }} // Tự động hiểu đây là Date
                numberOfMonths={2}
                disabled={(date) =>
                  date < new Date(new Date().setHours(0, 0, 0, 0))
                }
              />
            )}
          </div>

          {tripType === "round-trip" && (
            <div className="border-t p-3 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700"
              >
                Xác nhận
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
