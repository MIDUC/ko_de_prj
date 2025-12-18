"use client";

import Link from "next/link";
import {
  Menu,
  Search,
  Smartphone,
  Globe,
  HelpCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/store/use-sidebar-store";
export default function Header() {
  const { toggle } = useSidebarStore();
  return (
    // sticky top-0: Ghim thanh này lên đỉnh màn hình khi cuộn
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="p-4 mx-auto h-16 flex items-center justify-between gap-4">
        {/* --- 1. LEFT: Logo & Menu --- */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Nút Menu (Hamburger) */}
          <button
            onClick={toggle}
            className=" p-4 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
          >
            <Menu size={24} />
          </button>

          <Link
            href="/"
            className="flex items-center gap-0.5 text-3xl font-bold tracking-tighter"
          >
            <span className="text-blue-600">Kode</span>
            <span className="text-orange-500 text-3xl leading-none pt-1">
              .
            </span>
            <span className="text-blue-600">com</span>
          </Link>

          <div className="flex px-4.5 w-full group focus-within:ring-2 focus-within:ring-blue-200 rounded-lg transition-all md:min-w-[500px]">
            <input
              type="text"
              placeholder="Điểm đến, địa điểm tham quan, khách sạn..."
              className="flex-1 h-10 px-4 border border-r-0 border-gray-300 rounded-l-md outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
            <button className="h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md flex items-center justify-center transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* --- 3. RIGHT: Utilities & Login --- */}
        <div className="flex items-center gap-1 md:gap-4 shrink-0 text-xs md:text-sm font-medium text-gray-700">
          {/* App */}
          <Link
            href="#"
            className="hidden xl:flex items-center gap-1 hover:text-blue-600 hover:bg-gray-50 px-2 py-2 rounded-lg transition-colors"
          >
            <Smartphone size={18} />
            <span>Ứng Dụng</span>
          </Link>

          {/* Currency / Language */}
          <Link
            href="#"
            className="hidden md:flex items-center gap-1 hover:text-blue-600 hover:bg-gray-50 px-2 py-2 rounded-lg transition-colors"
          >
            <Globe size={18} className="text-gray-500" />
            {/* Giả lập icon cờ VN và USD */}
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-red-600 text-[8px] text-yellow-400 flex items-center justify-center border border-gray-100">
                ★
              </span>
              <span>USD</span>
            </span>
          </Link>

          {/* Support */}
          <Link
            href="#"
            className="hidden xl:flex items-center gap-1 hover:text-blue-600 hover:bg-gray-50 px-2 py-2 rounded-lg transition-colors"
          >
            {/* <HelpCircle size={18} /> */}
            <span>Chăm sóc khách hàng</span>
          </Link>

          {/* Booking lookup */}
          <Link
            href="#"
            className="hidden xl:flex items-center gap-1 hover:text-blue-600 hover:bg-gray-50 px-2 py-2 rounded-lg transition-colors"
          >
            {/* <FileText size={18} /> */}
            <span>Tìm Đặt Chỗ</span>
          </Link>

          {/* Login Button */}
          <Button
            variant="default"
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-9 px-4 rounded-md shadow-sm ml-2"
          >
            Đăng nhập / Đăng ký
          </Button>
        </div>
      </div>
    </header>
  );
}
