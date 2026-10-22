import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../datas/blogsData";
import Slider from "./Slider";

const BLOG_ITEM_CLASS =
  "basis-full md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]";

function BlogSection() {
  return (
    <section dir="rtl" className="w-full my-16 py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DCD3]">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#4A3E3D]">
              مجله و وبلاگ
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6E6D] mt-1">
              آخرین مقالات و راهنماهای دکوراسیون و خانه
            </p>
          </div>
          <Link
            to="/blog"
            className="text-xs sm:text-sm font-medium text-[#4A3E3D] hover:text-[#6B5B5A] transition-colors flex items-center gap-1"
          >
            <span>مشاهده همه</span>
            <span>←</span>
          </Link>
        </div>

        <Slider
          items={blogs}
          itemClassName={BLOG_ITEM_CLASS}
          renderItem={(blog) => (
            <article className="h-full bg-[#F9F6F0] rounded-2xl overflow-hidden border border-[#EFEAE1] hover:shadow-md transition-all duration-300 flex flex-col group">
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
          )}
        />
      </div>
    </section>
  );
}

export default BlogSection;