import { SearchWidget } from "@/components/layout/home/SearchWidget";

export function HeroSection() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-blue-600 text-white shadow-lg min-h-[450px]">
      {/* Ảnh nền */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
        }}
      ></div>

      {/* Gradient phủ mờ để text dễ đọc */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/10 to-blue-900/60"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 pt-12 pb-6 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-md">
          Khám phá thế giới cùng KODE Trip
        </h1>
        <p className="text-blue-100 text-lg font-medium drop-shadow-sm">
          Thanh toán an toàn | Hỗ trợ 24/7 | Giá tốt nhất thị trường
        </p>
      </div>

      {/* Nhúng Widget tìm kiếm vào đây */}
      <SearchWidget />
    </div>
  );
}
