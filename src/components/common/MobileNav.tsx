// "use client" bắt buộc vì component này cần tương tác với trình duyệt
// (lấy đường dẫn URL hiện tại để highlight icon)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ListChecks, User, Compass } from "lucide-react"; // Import icon từ thư viện
import { cn } from "@/lib/utils"; // Hàm nối class tiện ích ta đã tạo

// Định nghĩa danh sách các menu item để dễ quản lý và sửa đổi sau này
// Thay vì code cứng HTML, ta dùng mảng (array) để render vòng lặp (map)
const NAV_ITEMS = [
  {
    label: "Trang chủ",
    href: "/", // Đường dẫn trang chủ
    icon: Home,
  },
  {
    label: "Khám phá",
    href: "/explore",
    icon: Compass,
  },
  {
    label: "Đã đặt",
    href: "/bookings", // Trang lịch sử đặt vé
    icon: ListChecks,
  },
  {
    label: "Tài khoản",
    href: "/profile", // Trang profile
    icon: User,
  },
];

export default function MobileNav() {
  // usePathname() là hook của Next.js, trả về đường dẫn hiện tại (VD: "/profile")
  // Giúp ta biết user đang ở đâu để tô màu icon đó.
  const pathname = usePathname();

  return (
    // nav: thẻ ngữ nghĩa, tốt cho SEO và Accessibility
    // fixed bottom-0: Ghim chặt xuống đáy màn hình
    // z-50: Đảm bảo nó luôn nổi lên trên các thành phần khác
    // safe-area-pb: Cần thiết cho iPhone đời mới (tránh thanh vuốt Home ảo)
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white border-t border-gray-200 pb-[env(safe-area-inset-bottom)]">
      {/* Giới hạn chiều rộng max-w-md để trên PC nó không bị dài ngoằng, 
          giữ giao diện giống điện thoại */}
      <div className="flex h-full max-w-md mx-auto justify-around items-center">
        {/* Duyệt qua mảng NAV_ITEMS để tạo ra 4 nút */}
        {NAV_ITEMS.map((item) => {
          // Kiểm tra xem trang hiện tại có trùng với href của nút này không
          // Nếu trùng -> isActive = true -> Tô màu xanh
          const isActive = pathname === item.href;
          const Icon = item.icon; // Lấy component Icon ra biến để dùng

          return (
            <Link
              key={item.href} // Key bắt buộc khi map trong React
              href={item.href}
              // flex-1: Chia đều khoảng cách 4 nút
              className="flex-1 flex flex-col items-center justify-center h-full space-y-1 active:scale-95 transition-transform"
            >
              {/* Render Icon */}
              <Icon
                size={24} // Kích thước icon chuẩn
                // Dùng hàm cn() để điều kiện hóa class:
                // Nếu isActive = true thì thêm text-blue-600 (màu xanh thương hiệu)
                // Nếu không thì để text-gray-500 (màu xám nhạt)
                className={cn(
                  "transition-colors duration-200",
                  isActive
                    ? "text-[var(--primary)] fill-current"
                    : "text-gray-500"
                )}
              />

              {/* Render Label (Chữ dưới icon) */}
              <span
                className={cn(
                  "text-[10px] font-medium transition-colors",
                  isActive ? "text-[var(--primary)]" : "text-gray-500"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
