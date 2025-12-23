/**
 * User profile page
 * Display and edit user information
 */

"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function ProfilePage() {
  // TODO: Fetch user data from API
  const user = {
    name: "Nguyễn Văn A",
    email: "user@example.com",
    phone: "0123456789",
    dateOfBirth: "1990-01-01",
    address: "123 Đường ABC, Quận 1, TP.HCM",
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Thông tin tài khoản</h1>

      <Card className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <User size={40} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-gray-400" />
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-gray-400" />
            <span className="font-medium">Số điện thoại:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar size={20} className="text-gray-400" />
            <span className="font-medium">Ngày sinh:</span>
            <span>{user.dateOfBirth}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-gray-400" />
            <span className="font-medium">Địa chỉ:</span>
            <span>{user.address}</span>
          </div>
        </div>

        <Button className="w-full md:w-auto">Chỉnh sửa thông tin</Button>
      </Card>
    </div>
  );
}

