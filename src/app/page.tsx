"use client"; // Bắt buộc: Vì dùng useState, useRouter

import { useState } from "react";
import Link from "next/link"; // Thay thế Link của Tanstack
import { useRouter } from "next/navigation"; // Thay thế useNavigate
import { useTranslation } from "react-i18next";
import {
  Search,
  ClipboardCheck,
  Anchor,
  Box,
  Flag,
  Settings,
  ChevronRight,
} from "lucide-react";

// Trong Next.js App Router, không dùng createFileRoute.
// File này nên được đặt tên là `page.tsx` trong thư mục `app/`.

export default function HomePage() {
  const { t } = useTranslation();
  const router = useRouter(); // Hook điều hướng của Next.js
  const [ticketInput, setTicketInput] = useState("");

  // Xử lý tìm kiếm Ticket nhanh
  const handleSearchTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticketInput.trim()) {
      // Next.js: Điều hướng bằng string URL
      // Route tương ứng sẽ là: app/tickets/[ticketId]/page.tsx
      router.push(`/tickets/${ticketInput}`);
    }
  };

  const menuItems = [
    {
      title: t("dashboard.menu.inspections", "Inspections & Parts"),
      description: t(
        "dashboard.desc.inspections",
        "Manage ticket inspections and required parts"
      ),
      icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
      href: "/tickets",
      color: "bg-blue-50",
    },
    {
      title: t("dashboard.menu.ports", "Ports Management"),
      description: t(
        "dashboard.desc.ports",
        "View and manage port information"
      ),
      icon: <Anchor className="w-6 h-6 text-teal-600" />,
      href: "/masters/ports",
      color: "bg-teal-50",
    },
    {
      title: t("dashboard.menu.products", "Products"),
      description: t(
        "dashboard.desc.products",
        "JRC Product catalog and specifications"
      ),
      icon: <Box className="w-6 h-6 text-indigo-600" />,
      href: "/masters/products",
      color: "bg-indigo-50",
    },
    {
      title: t("dashboard.menu.flags", "Flags / Countries"),
      description: t("dashboard.desc.flags", "Manage country codes and flags"),
      icon: <Flag className="w-6 h-6 text-orange-600" />,
      href: "/masters/flags",
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-10 pb-24">
      {/* pb-24 để tránh nội dung bị che bởi thanh điều hướng dưới (nếu có) trên mobile */}

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {t("dashboard.welcome", "Welcome back, Engineer")}
          </h1>
          <p className="text-gray-500">
            {t(
              "dashboard.subtitle",
              "Manage marine maintenance, inspections, and master data."
            )}
          </p>
        </div>

        {/* Quick Ticket Search Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl">
          <label
            htmlFor="ticket-search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {t("dashboard.quick_search", "Quick Ticket Lookup")}
          </label>
          <form
            onSubmit={handleSearchTicket}
            className="relative flex items-center"
          >
            <input
              id="ticket-search"
              type="text"
              className="block w-full rounded-lg border-gray-300 pl-10 pr-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 hover:bg-white transition-colors border outline-none"
              placeholder={t(
                "dashboard.search_placeholder",
                "Enter Ticket Number (e.g., 12345)..."
              )}
              value={ticketInput}
              onChange={(e) => setTicketInput(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors cursor-pointer"
            >
              {t("common.search", "Go")}
            </button>
          </form>
        </div>

        {/* Dashboard Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href} // Next.js dùng href, không dùng to
              className="group relative flex flex-col justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 cursor-pointer"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm font-medium text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                {t("common.open", "Open Module")}
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}

          {/* Settings / System Card */}
          <Link
            href="/settings" // Next.js dùng href
            className="group flex flex-col justify-center items-center p-6 rounded-2xl border border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          >
            <Settings className="h-8 w-8 text-gray-400 group-hover:text-gray-600 mb-2" />
            <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
              {t("dashboard.menu.system", "System Settings")}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
