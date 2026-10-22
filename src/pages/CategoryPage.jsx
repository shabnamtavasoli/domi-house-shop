import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../datas/productsData";
import ProductCard from "../components/ProductCard";
import { categories } from "../components/categoriesData";

function CategoryPage() {
  const { categoryName } = useParams();

  let decodedCategoryName = "";
  try {
    decodedCategoryName = categoryName
      ? decodeURIComponent(categoryName).trim()
      : "";
  } catch (error) {
    decodedCategoryName = categoryName ? categoryName.trim() : "";
  }

  const currentCategory = categories.find(
    (cat) =>
      cat.category.toLowerCase() === decodedCategoryName.toLowerCase() ||
      cat.title === decodedCategoryName,
  );

  const targetCategoryKey = currentCategory
    ? currentCategory.category.toLowerCase()
    : decodedCategoryName.toLowerCase();

  const filteredProducts = products.filter(
    (product) => product.category?.trim().toLowerCase() === targetCategoryKey,
  );

  const displayTitle = currentCategory
    ? currentCategory.title
    : decodedCategoryName;

  return (
    <main
      dir="rtl"
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen"
    >
      <header className="mb-8 border-b border-[#E5DCD3] pb-6 text-right">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#4A3E3D] mb-2">
          دسته‌بندی: {displayTitle}
        </h1>
        <p className="text-[#7A6E6D] text-xs sm:text-sm">
          نمایش تمامی محصولات مربوط به {displayTitle}
        </p>
      </header>

      {filteredProducts.length > 0 ? (
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <div className="text-center py-20 bg-[#F9F6F0] rounded-3xl border border-[#EFEAE1]">
          <h2 className="text-lg font-medium text-[#4A3E3D] mb-2">
            هیچ محصولی در دسته‌بندی «{displayTitle}» یافت نشد!
          </h2>
          <p className="text-[#7A6E6D] text-sm mb-6">
            لطفاً دسته‌بندی‌های دیگر را بررسی کنید.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#4A3E3D] text-[#F9F6F0] px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#382F2E] transition-colors"
          >
            مشاهده همه محصولات
          </Link>
        </div>
      )}
    </main>
  );
}

export default CategoryPage;