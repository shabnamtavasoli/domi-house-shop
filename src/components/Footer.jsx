import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  const socialLinks = {
    instagram: "https://instagram.com",
    telegram: "https://t.me",
    whatsapp: "https://wa.me",
  };

  return (
    <footer className="w-full bg-[#7A685D] text-[#F9F6F0] dir-rtl relative pt-20 pb-8 mt-20">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full pointer-events-none">
        <svg
          className="relative block w-full h-[40px] sm:h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
            fill="#7A685D"
          ></path>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-[#927F73]">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#FFFFFF] tracking-wide">
              دسترسی سریع
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F0E6DE]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  to="/sale-products"
                  className="hover:text-white transition-colors"
                >
                  محصولات تخفیف‌دار
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  وبلاگ و مقالات
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#FFFFFF] tracking-wide">
              تماس با ما
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#F0E6DE] leading-relaxed">
              <p>تلفن پشتیبانی: ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p>ایمیل: support@domihouse.com</p>
              <p>آدرس: تهران، خیابان نلسون ماندلا </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#65554B] hover:bg-[#EADBC8] text-[#F9F6F0] hover:text-[#4A3E3D] flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="اینستاگرام"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#65554B] hover:bg-[#EADBC8] text-[#F9F6F0] hover:text-[#4A3E3D] flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="تلگرام"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#65554B] hover:bg-[#EADBC8] text-[#F9F6F0] hover:text-[#4A3E3D] flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="واتساپ"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#FFFFFF] tracking-wide">
              نمادهای اعتماد و پرداخت
            </h3>
            <p className="text-xs text-[#F0E6DE] leading-relaxed">
              با خیال راحت خرید کنید؛ تمامی تراکنش‌ها امن و رمزنگاری شده هستند.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://enamad.ir" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 bg-[#F5F0EB] rounded-xl  flex items-center overflow-hidden justify-center shadow-sm hover:scale-105 transition-all"
                title="نماد اعتماد الکترونیکی"
              >
                <img
                  src="/images/enamad.png"
                  alt="نماد اعتماد الکترونیکی"
                  className="w-full h-full object-cover"
                />
              </a>

              <a
                href="https://zibal.ir/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 bg-[#F5F0EB] rounded-xl  flex items-center overflow-hidden justify-center shadow-sm hover:scale-105 transition-all"
                title="درگاه پرداخت امن"
              >
                <img
                  src="/images/zibal.png"
                  alt="درگاه پرداخت امن"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#E2D5CC] gap-3 text-center sm:text-right">
          <p>
            © تمامی حقوق برای این سایت محفوظ است. کپی‌برداری غیرقانونی پیگرد
            قانونی دارد.
          </p>
          <p className="font-medium text-[#F9F6F0]">
            طراحی و توسعه توسط{" "}
            <span className="text-white font-bold">شبنم توسلی</span> 🤍
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
