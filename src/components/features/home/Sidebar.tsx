import { Hotel, Plane, Train, Car, Map, Ticket } from "lucide-react";
import Link from "next/link";

const MENU_ITEMS = [
  { icon: Hotel, label: "Khách sạn & Chỗ nghỉ", href: "/hotel" },
  { icon: Plane, label: "Vé Máy bay", href: "/flights" },
  { icon: Train, label: "Tàu hỏa", href: "/train" },
  { icon: Car, label: "Đưa đón sân bay", href: "/car" },
  { icon: Map, label: "Tour & Hoạt động", href: "/tour" },
  { icon: Ticket, label: "Combo Tiết Kiệm", href: "/combo" },
];

export default function Sidebar() {
  return (
    // hidden: Ẩn trên mobile
    // md:flex: Hiện trên màn hình desktop (medium trở lên)
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0 p-4 space-y-2 z-40">
      {MENU_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors font-medium"
        >
          <item.icon size={20} />
          <span>{item.label}</span>
        </Link>
      ))}
    </aside>
  );
}
