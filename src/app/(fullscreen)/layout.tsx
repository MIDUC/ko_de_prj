import { SiteHeader } from "@/components/layout/site-header"; // Header chung
import { MobileNav } from "@/components/layout/mobile-nav"; // Menu Mobile

export default function FullscreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Ở Layout này:
        1. KHÔNG CÓ Sidebar (AppSidebar) -> Giúp nội dung tràn full màn hình.
        2. Vẫn giữ Header và MobileNav để điều hướng.
      */}

      <SiteHeader />

      {/* Phần nội dung chính (Page.tsx sẽ được render vào đây) */}
      <main className="flex-1 w-full">{children}</main>

      {/* Menu dưới đáy chỉ hiện trên Mobile */}
      <MobileNav />
    </div>
  );
}
