import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Import font
import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import { ThemeProvider } from "@/components/theme-provider";

// QUAN TRỌNG: Phải khai báo biến font ở đây thì bên dưới mới dùng được
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KODE Project",
  description: "Next.js 15 Professional Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // Bây giờ biến geistSans và geistMono đã tồn tại để dùng
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
