import { ServiceTabProps } from "@/types/index";

export function ServiceTab({ icon, label, active, onClick }: ServiceTabProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
        active
          ? "bg-blue-600 text-white shadow-sm"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <div className={active ? "text-white" : "text-gray-500"}>{icon}</div>
      <span>{label}</span>
    </button>
  );
}
