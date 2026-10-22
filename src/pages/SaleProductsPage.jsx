import React from "react";
import { products } from "../datas/productsData";
import ProductCard from "../components/ProductCard";

function SaleProductsPage() {
  const allSaleProducts = products.filter(
    (product) => product.isNew === false
  );

  return (
    <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 dir-rtl min-h-screen">
      <div className="flex items-center justify-between mb-8 border-b border-[#E5DCD3] pb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A3E3D]">
          همه محصولات تخفیف‌دار (۳۰٪ تخفیف)
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {allSaleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default SaleProductsPage;