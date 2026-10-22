import React from "react";
import { Link } from "react-router-dom";
import { products } from "../datas/productsData";
import ProductCard from "./ProductCard";
import Slider from "./Slider";

function SaleSection() {
  const saleProducts = products
    .filter((product) => product.isNew === false)
    .slice(0, 5);

  return (
    <section dir="rtl" className="relative w-full my-12 sm:my-16 bg-[#F4ECE1] py-12">
      <div
        aria-hidden="true"
        className="absolute left-0 w-full bottom-[calc(100%-1px)] overflow-hidden leading-none pointer-events-none"
      >
        <svg className="block w-full h-[40px] sm:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,45 C650,120 900,10 1200,50 L1200,120 L0,120 Z" fill="#F4ECE1" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="relative inline-block text-xl sm:text-3xl font-bold text-[#4A3E3D] px-2 z-10">
            <span className="absolute left-0 bottom-0 w-full h-3.5 sm:h-4 bg-[#DCC3A1] rounded-full -z-10 -rotate-1 scale-105"></span>
            محصولات تخفیف دار
          </h2>
        </div>

        <Slider
          items={saleProducts}
          renderItem={(product) => <ProductCard product={product} />}
        />

        <div className="text-center mt-8">
          <Link
            to="/sale-products"
            className="inline-block bg-[#6B5B5A] hover:bg-[#574A49] text-[#FDFBF7] text-xs sm:text-sm font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            مشاهده محصولات بیشتر
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute left-0 w-full top-[calc(100%-1px)] overflow-hidden leading-none pointer-events-none"
      >
        <svg className="block w-full h-[40px] sm:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,70 C200,10 400,110 600,40 C800,-30 1000,80 1200,20 L1200,0 L0,0 Z" fill="#F4ECE1" />
        </svg>
      </div>
    </section>
  );
}

export default SaleSection;