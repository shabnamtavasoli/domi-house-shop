import React from "react";
import { products } from "../datas/productsData";
import ProductCard from "../components/ProductCard";

function AllProductsPage() {
  return (
    <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 dir-rtl min-h-screen">
      <div className="mb-8 border-b border-[#E5DCD3] pb-6 text-right">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#4A3E3D] mb-2">
          همه محصولات
        </h1>
        <p className="text-[#7A6E6D] text-xs sm:text-sm">
          مجموعه کامل تمام ظروف، لوازم آشپزخانه و دکوراسیون خانگی
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default AllProductsPage;