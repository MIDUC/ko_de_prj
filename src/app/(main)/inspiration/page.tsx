/**
 * Inspiration/Blog page
 * Travel inspiration articles and blog posts
 */

"use client";

import { Card } from "@/components/ui/card";
import { Calendar, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function InspirationPage() {
  // TODO: Fetch articles from API
  const articles: unknown[] = [];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Cảm Hứng Du Lịch</h1>

      {articles.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-gray-500">Chưa có bài viết nào</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={String(article)} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* TODO: Implement article card */}
              <div className="p-4">
                <h3 className="font-bold mb-2">Article Title</h3>
                <p className="text-sm text-gray-500 mb-4">Article description...</p>
                <Link
                  href={ROUTES.INSPIRATION_DETAIL("slug")}
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  Đọc thêm <ArrowRight size={16} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

