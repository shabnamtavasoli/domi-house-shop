import React from "react";
import { Link } from "react-router-dom";
import { products } from "../datas/productsData";
import ProductCard from "./ProductCard";
import Slider from "./Slider";

function NewArrivals() {
  const newProducts = products.filter((product) => product.isNew === true);
  const homeProducts = newProducts.slice(0, 5);

  return (
    <section dir="rtl" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10 pt-5">
        <h2 className="relative inline-block text-xl sm:text-3xl font-bold text-[#4A3E3D] px-2 z-10">
          <span className="absolute left-0 bottom-0 w-full h-3.5 sm:h-4 bg-[#E3D7C5] rounded-full -z-10 -rotate-1 scale-105"></span>
          جدیدترین محصولات
        </h2>
      </div>

      <Slider
        items={homeProducts}
        renderItem={(product) => <ProductCard product={product} />}
      />

      {newProducts.length > 5 && (
        <div className="flex justify-center mt-8">
          <Link
            to="/new-arrivals"
            className="bg-[#F5F0EB] hover:bg-[#EFE7DC] text-[#4A3E3D] text-xs sm:text-sm font-medium px-8 py-3 rounded-full border border-[#E5DCD3] transition-all duration-300 shadow-sm inline-block text-center"
          >
            مشاهده محصولات بیشتر
          </Link>
        </div>
      )}
    </section>
  );
}

export default NewArrivals;