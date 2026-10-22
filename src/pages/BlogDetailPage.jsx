import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../datas/blogsData";

function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-20 text-center dir-rtl">
        <h2 className="text-xl font-bold text-[#4A3E3D] mb-4">
          مقاله مورد نظر یافت نشد!
        </h2>
        <button
          onClick={() => navigate("/blog")}
          className="bg-[#F5F0EB] hover:bg-[#EFE7DC] text-[#4A3E3D] px-6 py-2.5 rounded-full border border-[#E5DCD3] transition-all"
        >
          بازگشت به لیست مقالات
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 dir-rtl">
      <article className="bg-[#F9F6F0] p-6 sm:p-10 rounded-3xl border border-[#EFEAE1] space-y-6">
        <div>
          <div className="flex items-center gap-4 text-xs text-[#7A6E6D] mb-3">
            <span>نویسنده: {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>زمان مطالعه: {blog.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-[#4A3E3D] leading-snug">
            {blog.title}
          </h1>
        </div>

        <div className="w-full aspect-16/9 rounded-2xl overflow-hidden bg-[#F5F0EB]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-sm sm:text-base text-[#4A3E3D] leading-loose whitespace-pre-line pt-4 border-t border-[#E5DCD3]">
          {blog.content}
        </div>
      </article>
    </main>
  );
}

export default BlogDetailPage;