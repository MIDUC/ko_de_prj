/**
 * Bookings history page
 * Display user's booking history
 */

"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, DollarSign, Eye } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export default function BookingsPage() {
  // TODO: Fetch bookings from API
  const bookings: unknown[] = [];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Lịch sử đặt chỗ</h1>

      {bookings.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-gray-500 mb-4">Bạn chưa có đặt chỗ nào</p>
          <Link href={ROUTES.HOME}>
            <Button>Đặt chỗ ngay</Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={String(booking)} className="p-6">
              {/* TODO: Implement booking card */}
              <p>Booking item</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

