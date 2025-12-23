/**
 * Main layout component
 * Layout for main pages with header, sidebar, and footer
 */

"use client";

import React from "react";
import Sidebar from "@/components/features/home/Sidebar";
import Header from "@/components/layout/home/header";
import MobileNav from "@/components/common/MobileNav";
import Footer from "@/components/layout/footer";
import { useSidebarStore } from "@/store/use-sidebar-store";
import { cn } from "@/lib/utils";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebarStore();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200">
        <Header />
      </div>

      {/* Sidebar - Fixed on left */}
      <aside
        className={cn(
          "bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 z-40 overflow-y-auto transition-all duration-300 ease-in-out scrollbar-hide",
          isOpen ? "w-64" : "w-20 -translate-x-full md:translate-x-0 md:w-20"
        )}
      >
        <Sidebar />
      </aside>

      {/* Main content */}
      <main
        className={cn(
          "pt-16 min-h-screen w-full transition-all duration-300 ease-in-out flex-1",
          isOpen ? "md:pl-64" : "md:pl-20"
        )}
      >
        <div className="p-4 md:p-6">{children}</div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom Nav (Mobile only) */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
