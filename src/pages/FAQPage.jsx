import React, { useState } from "react";
import { faqData } from "../datas/faqData";

function FAQPage() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 dir-rtl">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DCD3]">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-[#4A3E3D]">
            سوالات متداول
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6E6D] mt-1">
            پاسخ به پرتکرارترین سوالات شما درباره خرید و خدمات
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="bg-[#F9F6F0] border border-[#EFEAE1] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full px-6 py-4 text-right flex items-center justify-between font-bold text-sm sm:text-base text-[#4A3E3D] cursor-pointer"
              >
                <span>{item.question}</span>
                <span className={`transform transition-transform duration-300 text-[#7A6E6D] ${isOpen ? "rotate-180" : ""}`}>
                  ↓
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-xs sm:text-sm text-[#665A59] leading-relaxed border-t border-[#EFEAE1] pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default FAQPage;