"use client";

import { useUrlFilter } from "@/hooks/useUrlFilter";
import { ArrowDownWideNarrow, Clock, Tag } from "lucide-react";
import { cn } from "@/lib/utils"; // Hàm tiện ích của shadcn/ui hoặc clsx

const SORTS = [
  { id: "best", label: "Được đề xuất", icon: ArrowDownWideNarrow },
  { id: "price_asc", label: "Giá rẻ nhất", icon: Tag },
  { id: "duration_asc", label: "Bay nhanh nhất", icon: Clock },
  { id: "depart_asc", label: "Cất cánh sớm nhất", icon: Clock },
];

export default function SortBar() {
  const { updateFilter, searchParams } = useUrlFilter();
  const currentSort = searchParams.get("sort") || "best";

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-4 flex overflow-hidden divide-x divide-gray-100">
      {SORTS.map((item) => {
        const isActive = currentSort === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => updateFilter("sort", item.id)}
            className={cn(
              "flex-1 flex flex-col items-center justify-center py-3 px-2 transition-colors hover:bg-gray-50",
              isActive
                ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            )}
          >
            <div className="flex items-center gap-1.5 mb-1">
              {isActive && <Icon size={14} />}
              <span
                className={cn("text-sm font-medium", isActive && "font-bold")}
              >
                {item.label}
              </span>
            </div>
            {/* Hiển thị giá mẫu nếu cần */}
            {isActive && (
              <span className="text-xs text-blue-600 font-semibold">
                110 US$
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
