import React from "react";
import { Tag } from "lucide-react";

interface PromoCardProps {
  badge: string;
  title: string;
  sub: string;
  imgColor: string; // Ví dụ: "bg-blue-100"
  btnText: string;
  icon?: React.ReactNode; // Optional: Có thể truyền hoặc không
}

export function PromoCard({
  badge,
  title,
  sub,
  imgColor,
  btnText,
  icon,
}: PromoCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:border-blue-200 transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="inline-block bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-sm mb-2 border border-red-100">
            {badge}
          </span>
          <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gray-500">{sub}</p>
        </div>
        <div
          className={`w-10 h-10 rounded-full ${imgColor} flex items-center justify-center shrink-0`}
        >
          {icon ? icon : <Tag size={16} className="text-gray-600 opacity-50" />}
        </div>
      </div>
      <button className="w-full py-2 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
        {btnText}
      </button>
    </div>
  );
}
