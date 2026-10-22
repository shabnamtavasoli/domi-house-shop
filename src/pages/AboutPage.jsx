import React from "react";

function AboutPage() {
  return (
    <main className="max-w-[1000px] mx-auto px-4 sm:px-6 py-10 dir-rtl min-h-screen">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DCD3]">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-[#4A3E3D]">
            درباره دامی هاوس
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6E6D] mt-1">
            داستان ما، ارزش‌ها و مسیری که با عشق طی می‌کنیم
          </p>
        </div>
      </div>

      <div className="bg-[#F9F6F0] p-6 sm:p-10 rounded-3xl border border-[#EFEAE1] space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-[#8C7A6B] bg-[#EFE7DC] px-4 py-1.5 rounded-full inline-block">
            خونت رو با عشق بچین 🤍
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A3E3D] leading-snug">
            ما در «دامی هاوس» به آرامش و زیبایی خانه‌ی شما معنا می‌بخشیم
          </h2>
          <p className="text-xs sm:text-sm text-[#665A59] leading-relaxed">
            مجموعه دامی هاوس با هدف ارائه خاص‌ترین لوازم دکوراسیون، مبلمان
            مینیمال و وسایل کاربردی خانه شکل گرفته است تا فضایی گرم، مدرن و
            هماهنگ با سلیقه‌ی شما بسازد.
          </p>
        </div>

        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-[#F5F0EB]">
          <img
            src="/images/Banner_About_Us.jpg"
            alt="دکوراسیون داخلی دامی هاوس"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#F5F0EB] p-5 rounded-2xl border border-[#E9E0D5] space-y-2 text-center">
            <div className="text-xl font-bold text-[#4A3E3D]">🚚</div>
            <h3 className="font-bold text-sm sm:text-base text-[#4A3E3D]">
              ارسال سریع
            </h3>
            <p className="text-xs text-[#7A6E6D] leading-relaxed">
              تحویل سریع و امن سفارشات در کوتاه‌ترین زمان ممکن با بسته‌بندی
              استاندارد.
            </p>
          </div>

          <div className="bg-[#F5F0EB] p-5 rounded-2xl border border-[#E9E0D5] space-y-2 text-center">
            <div className="text-xl font-bold text-[#4A3E3D]">🛡️</div>
            <h3 className="font-bold text-sm sm:text-base text-[#4A3E3D]">
              تضمین کیفیت و اصالت
            </h3>
            <p className="text-xs text-[#7A6E6D] leading-relaxed">
              همکاری با بهترین برندها و تولیدکنندگان داخلی و خارجی با
              استانداردهای سخت‌گیرانه کیفی.
            </p>
          </div>

          <div className="bg-[#F5F0EB] p-5 rounded-2xl border border-[#E9E0D5] space-y-2 text-center">
            <div className="text-xl font-bold text-[#4A3E3D]">💬</div>
            <h3 className="font-bold text-sm sm:text-base text-[#4A3E3D]">
              پشتیبانی تخصصی
            </h3>
            <p className="text-xs text-[#7A6E6D] leading-relaxed">
              همراهی شما از لحظه انتخاب محصول تا چیدمان نهایی در کنار تیم مشاوره
              دکوراسیون.
            </p>
          </div>
        </div>

        <div className="border-t border-[#E5DCD3] pt-6 text-center space-y-2">
          <p className="text-xs sm:text-sm text-[#4A3E3D] font-medium">
            از اینکه «دامی هاوس» را برای زیبایی‌بخشیدن به خانه خود انتخاب
            کرده‌اید، به خود می‌بالیم.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;