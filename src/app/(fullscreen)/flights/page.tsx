import React from "react";
import { SearchWidget } from "./search-widget";
import { Plane, Tag, ShieldCheck, Clock, ArrowRight } from "lucide-react";

// --- 1. ĐỊNH NGHĨA KIỂU DỮ LIỆU (FIX LỖI 'ANY') ---
interface Flight {
  id: number;
  airline: string;
  code: string;
  from: string;
  to: string;
  departTime: string;
  arriveTime: string;
  price: number;
  logo: string;
}

// Data giả lập
const MOCK_FLIGHTS: Flight[] = [
  {
    id: 1,
    airline: "Vietnam Airlines",
    code: "VN213",
    from: "HAN",
    to: "SGN",
    departTime: "08:00",
    arriveTime: "10:10",
    price: 1500000,
    logo: "VN",
  },
  {
    id: 2,
    airline: "VietJet Air",
    code: "VJ112",
    from: "HAN",
    to: "SGN",
    departTime: "09:30",
    arriveTime: "11:40",
    price: 980000,
    logo: "VJ",
  },
];

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// --- 2. COMPONENT CHÍNH ---
export default async function FlightsPage({ searchParams }: Props) {
  const params = await searchParams;
  const fromCity = params.from as string;
  const toCity = params.to as string;

  // Logic: Nếu URL có ?from=...&to=... thì là đang tìm kiếm, ngược lại là trang chủ vé máy bay
  const isSearching = fromCity && toCity;

  // --- TRƯỜNG HỢP 1: GIAO DIỆN LANDING PAGE (GIỐNG ẢNH TRIP.COM BẠN GỬI) ---
  if (!isSearching) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Banner Section */}
        <div className="relative h-min-h-[400px] w-full bg-slate-900 flex flex-col justify-center pb-20">
          {/* Ảnh nền - Bạn nhớ tải ảnh về hoặc dùng link ảnh thật */}
          <div className="absolute inset-0 bg-[url('https://pages.trip.com/images/flight/flight_heading_bg_2.jpg')] bg-cover bg-center" />

          <div className="relative z-10 container mx-auto pt-16 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">
              Chuyến Bay <span className="text-yellow-400">.</span>
            </h1>
            {/* Widget Tìm kiếm */}
            <div className="relative shadow-2xl rounded-xl container mx-auto">
              <SearchWidget />
            </div>
          </div>
        </div>

        {/* Marketing Section - Giống ảnh mẫu */}
        <div className="container mx-auto px-4 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-blue-600">KODE.com</span> người bạn đường đáng
            tin cậy của bạn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <MarketingCard
              icon={<Tag className="text-orange-500 w-6 h-6" />}
              title="Tiết Kiệm & Nhận Thưởng"
              desc="Đăng ký thành viên để hưởng ưu đãi độc quyền và tích lũy Trip Coins."
            />
            <MarketingCard
              icon={<ShieldCheck className="text-blue-500 w-6 h-6" />}
              title="Chúng Tôi Hỗ Trợ Toàn Cầu"
              desc="Được 300 triệu du khách tin dùng. Hợp tác với hơn 600 hãng hàng không."
            />
            <MarketingCard
              icon={<Clock className="text-green-500 w-6 h-6" />}
              title="Phản Hồi Sau Khoảng 30 Giây"
              desc="Chúng tôi thường trả lời điện thoại trong vòng 30 giây."
            />
            <MarketingCard
              icon={<Plane className="text-purple-500 w-6 h-6" />}
              title="Ưu Đãi Tuyệt Vời Trên Ứng Dụng"
              desc="Đặt bằng ứng dụng để tiết kiệm tức thì. Tải ứng dụng Trip.com."
            />
          </div>
        </div>
      </div>
    );
  }

  // --- TRƯỜNG HỢP 2: KẾT QUẢ TÌM KIẾM ---
  const flights = MOCK_FLIGHTS.filter(
    (f) =>
      (fromCity === "" || f.from === fromCity) &&
      (toCity === "" || f.to === toCity)
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-blue-900 text-white pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold mb-2">Kết quả tìm kiếm</h1>
          <div className="flex items-center gap-2 text-blue-200">
            <span className="font-bold text-white">{fromCity}</span>
            <ArrowRight size={16} />
            <span className="font-bold text-white">{toCity}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 -mt-6 space-y-4">
        {flights.map((flight) => (
          <FlightCard key={flight.id} data={flight} />
        ))}
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

// 1. Thẻ Marketing (Style giống ảnh mẫu)
function MarketingCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow h-full">
      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-1">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// 2. Thẻ Vé máy bay (Fix lỗi 'any' bằng cách dùng interface Flight)
function FlightCard({ data }: { data: Flight }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
      <div>
        <div className="font-bold text-lg text-blue-900">{data.airline}</div>
        <div className="text-gray-500 text-sm">{data.code}</div>
      </div>
      <div className="text-right">
        <div className="text-xl font-bold text-blue-600">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(data.price)}
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded font-bold text-sm mt-1">
          Chọn
        </button>
      </div>
    </div>
  );
}
