"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useUrlFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Hàm này giúp update 1 tham số mà giữ nguyên các tham số khác
  // Ví dụ: đang lọc ?price=100 -> updateFilter('sort', 'fast') -> ?price=100&sort=fast
  const updateFilter = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === null || value === "") {
        params.delete(key); // Xóa bộ lọc nếu không có giá trị
      } else {
        params.set(key, value); // Đặt giá trị mới
      }

      // push router mà không reload trang (scroll: false giữ vị trí cuộn)
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  // Hàm kiểm tra xem giá trị có đang được chọn không (cho Checkbox)
  const isSelected = (key: string, value: string) => {
    const current = searchParams.get(key);
    if (!current) return false;
    // Xử lý trường hợp đa chọn (VD: airline=VJ,VN)
    return current.split(",").includes(value);
  };

  // Hàm toggle (bật/tắt) cho checkbox (Hỗ trợ chọn nhiều)
  const toggleFilter = (key: string, value: string) => {
    const current = searchParams.get(key);
    let newValues = current ? current.split(",") : [];

    if (newValues.includes(value)) {
      newValues = newValues.filter((v) => v !== value); // Bỏ chọn
    } else {
      newValues.push(value); // Chọn thêm
    }

    updateFilter(key, newValues.join(","));
  };

  return { updateFilter, toggleFilter, isSelected, searchParams };
}
