import React from "react";
import { Link } from "react-router-dom";
import { featuredBanners } from "./categoriesData";

function FeaturedBanners() {
  return (
    <section dir="rtl" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h2 className="relative inline-block text-xl sm:text-3xl font-bold text-[#4A3E3D] px-2 z-10">
          <span className="absolute left-0 bottom-0 w-full h-3.5 sm:h-4 bg-[#E3D7C5] rounded-full -z-10 transform -rotate-1 scale-105"></span>
          پیشنهادات ویژه
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {featuredBanners.map((banner) => (
          <Link
            key={banner.id}
            to={banner.link}
            className="group relative block w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#EFEAE1]"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute left-[4%] top-1/2 -translate-y-1/2 w-[46%] flex flex-col items-center text-center gap-2 sm:gap-3">
              <h3 className="text-sm sm:text-lg lg:text-xl font-medium text-[#4A3E3D] leading-snug">
                {banner.title}
              </h3>

              <span className="inline-flex items-center gap-1.5 bg-[#C2B29D]/85 group-hover:bg-[#4A3E3D] text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm transition-colors duration-300 shadow-sm">
                <span>مشاهده کالکشن</span>
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                  ›
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedBanners;