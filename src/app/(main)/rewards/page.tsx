/**
 * Rewards page
 * Display user's rewards points and history
 */

"use client";

import { Card } from "@/components/ui/card";
import { Gift, Star, TrendingUp, History } from "lucide-react";

export default function RewardsPage() {
  // TODO: Fetch rewards data from API
  const rewards = {
    points: 0,
    level: "bronze" as const,
    nextLevelPoints: 1000,
    totalSpent: 0,
    totalBookings: 0,
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Phần Thưởng</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <Gift className="text-blue-600" size={24} />
            <h2 className="font-bold">Điểm thưởng</h2>
          </div>
          <p className="text-3xl font-bold">{rewards.points.toLocaleString()}</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <Star className="text-yellow-500" size={24} />
            <h2 className="font-bold">Hạng thành viên</h2>
          </div>
          <p className="text-2xl font-bold capitalize">{rewards.level}</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="text-green-600" size={24} />
            <h2 className="font-bold">Tổng chi tiêu</h2>
          </div>
          <p className="text-3xl font-bold">{rewards.totalSpent.toLocaleString()} ₫</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <History size={24} />
          <h2 className="text-xl font-bold">Lịch sử tích điểm</h2>
        </div>
        <p className="text-gray-500">Chưa có lịch sử tích điểm</p>
        {/* TODO: Implement rewards history list */}
      </Card>
    </div>
  );
}

