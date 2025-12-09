import Link from "next/link";
import { Globe, HelpCircle, User, Bell } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 tracking-tighter"
        >
          KODE.com
        </Link>

        {/* Menu Phải (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <button className="hover:text-blue-600 flex items-center gap-1">
            <Globe size={16} />
            <span>VN / VND</span>
          </button>

          <button className="hover:text-blue-600 flex items-center gap-1">
            <HelpCircle size={16} />
            <span>Hỗ trợ</span>
          </button>

          <button className="hover:text-blue-600">
            <Bell size={18} />
          </button>

          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 font-bold transition-colors">
            Đăng nhập / Đăng ký
          </button>
        </div>

        {/* Nút User cho Mobile (Hiển thị khi màn hình nhỏ) */}
        <div className="md:hidden">
          <User className="text-gray-600" />
        </div>
      </div>
    </header>
  );
}
