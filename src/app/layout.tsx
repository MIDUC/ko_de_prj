// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./provider"; // Đảm bảo đường dẫn đúng tới file provider.tsx của bạn

export const metadata: Metadata = {
  title: "KoDe - Đặt vé máy bay & khách sạn giá rẻ",
  description: "Đặt vé máy bay, phòng khách sạn giá rẻ",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0086F0",
};

// Layout này BẮT BUỘC phải có <html> và <body>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className="antialiased pb-20 md:pb-0" // pb-20 để tránh bottom nav che nội dung trên mobile
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
