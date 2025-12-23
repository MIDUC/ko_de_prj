/**
 * Booking lookup page
 * Find booking by booking number or email/phone
 */

"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FileText, Mail, Phone } from "lucide-react";

export default function BookingLookupPage() {
  const [bookingNumber, setBookingNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSearch = () => {
    // TODO: Implement booking lookup
    console.log({ bookingNumber, email, phone });
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Tìm Đặt Chỗ</h1>

      <Card className="p-6 space-y-6">
        <div>
          <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block flex items-center gap-2">
            <FileText size={16} />
            Mã đặt chỗ
          </label>
          <input
            type="text"
            value={bookingNumber}
            onChange={(e) => setBookingNumber(e.target.value)}
            placeholder="Nhập mã đặt chỗ"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="text-center text-gray-500">hoặc</div>

        <div>
          <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block flex items-center gap-2">
            <Mail size={16} />
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500 font-bold ml-1 uppercase mb-2 block flex items-center gap-2">
            <Phone size={16} />
            Số điện thoại
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0123456789"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <Button
          onClick={handleSearch}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12"
        >
          <Search className="mr-2" size={20} />
          Tìm kiếm
        </Button>
      </Card>
    </div>
  );
}

