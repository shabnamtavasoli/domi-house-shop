import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import heroNewBg from "../assets/hero-new.jpg";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section dir="rtl" className="relative w-full overflow-hidden">
      
      <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] md:hidden">
        <img
          src={heroNewBg}
          alt="بنر لوازم خانگی"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:pb-10 text-center space-y-3">
          <span className="inline-block bg-[#EFEAE1]/90 text-[#4A3E3D] text-xs sm:text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            Domi House
          </span>
          <h1 className="text-xl sm:text-3xl font-bold text-[#4A3E3D] leading-snug">
            زیبایی و سادگی را <br /> به خانه خود دعوت کنید
          </h1>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#4A3E3D] text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-md"
          >
            <span>مشاهده محصولات</span>
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>

      <div className="relative hidden md:block w-full aspect-[16/7] max-h-[800px]">
        <img
          src={heroBg}
          alt="بنر لوازم خانگی"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute top-1/2 -translate-y-1/2 right-[6%] w-[38%] max-w-md space-y-3 lg:space-y-5 text-right">
          <span className="inline-block bg-[#EFEAE1]/80 text-[#4A3E3D] text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            Domi House
          </span>
          <h1 className="text-2xl lg:text-4xl font-bold text-[#4A3E3D] leading-snug">
            زیبایی و سادگی را <br /> به خانه خود دعوت کنید
          </h1>
          <p className="hidden lg:block text-[#6B5E5D] text-base leading-relaxed">
            طراحی‌های مینیمال با رنگ‌های نود و گرم برای فضایی آرامش‌بخش.
            جدیدترین ظروف و لوازم آشپزخانه را بررسی کنید.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#4A3E3D] hover:bg-[#382F2E] text-white px-6 py-3 rounded-xl text-sm font-medium transition-all shadow-md"
          >
            <span>مشاهده محصولات</span>
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;