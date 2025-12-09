import { PromoCardProps } from "@/types/index";

export function PromoCard({ title, desc, badge, icon }: PromoCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
      <div>
        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{desc}</p>
        <span className="inline-block mt-1 px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded-full font-bold">
          {badge}
        </span>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
    </div>
  );
}
