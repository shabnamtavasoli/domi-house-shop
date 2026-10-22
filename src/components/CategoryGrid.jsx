import React from "react";
import { categories } from "./categoriesData";
import { Link } from "react-router-dom";

function CategoryGrid() {
  return (
    <section dir="rtl" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10 pt-5">
        <h2 className="relative inline-block text-xl sm:text-3xl font-bold text-[#4A3E3D] px-2 z-10">
          <span className="absolute left-0 bottom-0 w-full h-3.5 sm:h-4 bg-[#E3D7C5] rounded-full -z-10 transform -rotate-1 scale-105"></span>
          دسته‌بندی محصولات
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
        {categories.map((item) => (
          <Link
            key={item.id}
            to={`/category/${encodeURIComponent(item.category)}`}
            className="group flex flex-col items-center bg-[#F9F6F0] rounded-2xl p-3 border border-[#EFEAE1] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-full aspect-square overflow-hidden rounded-xl bg-white/50 p-1.5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <span className="mt-3 text-xs sm:text-sm font-medium text-[#4A3E3D] text-center leading-snug">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;