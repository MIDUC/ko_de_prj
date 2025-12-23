/**
 * Footer component
 * Site footer with links, company info, and social media
 */

"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Smartphone, Mail, Phone } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href={ROUTES.HOME} className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-blue-400">Kode</span>
                <span className="text-orange-500">.</span>
                <span className="text-blue-400">com</span>
              </span>
            </Link>
            <p className="text-sm mb-4">
              Du lịch dễ dàng khắp mọi nơi cùng KoDe.com
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.HOTEL} className="hover:text-blue-400 transition-colors">
                  Khách sạn & Chỗ nghỉ
                </Link>
              </li>
              <li>
                <Link href={ROUTES.FLIGHTS} className="hover:text-blue-400 transition-colors">
                  Vé Máy bay
                </Link>
              </li>
              <li>
                <Link href={ROUTES.TRAIN} className="hover:text-blue-400 transition-colors">
                  Tàu hỏa
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CAR} className="hover:text-blue-400 transition-colors">
                  Đưa Đón Sân Bay
                </Link>
              </li>
              <li>
                <Link href={ROUTES.TOUR} className="hover:text-blue-400 transition-colors">
                  Tour & Hoạt động
                </Link>
              </li>
              <li>
                <Link href={ROUTES.COMBO} className="hover:text-blue-400 transition-colors">
                  Combo Tiết Kiệm
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.BOOKING_LOOKUP} className="hover:text-blue-400 transition-colors">
                  Tìm Đặt Chỗ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Chăm sóc khách hàng
                </Link>
              </li>
              <li>
                <Link href={ROUTES.INSPIRATION} className="hover:text-blue-400 transition-colors">
                  Cảm Hứng Du Lịch
                </Link>
              </li>
              <li>
                <Link href={ROUTES.REWARDS} className="hover:text-blue-400 transition-colors">
                  Phần Thưởng
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Về chúng tôi</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Giới thiệu
                </a>
              </li>
            </ul>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>1900-xxxx</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@kode.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone size={16} />
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Tải ứng dụng
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} KoDe.com. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Thanh Toán An Toàn</span>
            <span>Hỗ trợ toàn cầu trong 30 giây</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

