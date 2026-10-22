import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../datas/blogsData";

function BlogListPage() {
  return (
    <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 dir-rtl min-h-screen">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DCD3]">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-[#4A3E3D]">
            وبلاگ و مقالات
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6E6D] mt-1">
            جدیدترین راهنماها و مقالات دکوراسیون و چیدمان
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-[#F9F6F0] rounded-2xl overflow-hidden border border-[#EFEAE1] hover:shadow-md transition-all duration-300 flex flex-col group"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F0EB]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#A09590]">
                  <span>{blog.date}</span>
                  <span>{blog.readTime} مطالعه</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#4A3E3D] group-hover:text-[#6B5B5A] transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665A59] line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <Link
                to={`/blog/${blog.id}`}
                className="inline-flex items-center text-xs font-semibold text-[#6B5B5A] hover:text-[#4A3E3D] transition-colors"
              >
                ادامه مطلب ←
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default BlogListPage;