import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const productImage =
    product.image || (product.variants && product.variants[0]?.image);

  const productPrice =
    product.price || (product.variants && product.variants[0]?.price);

  const numericPrice = Number(
    productPrice?.toString().replace(/,/g, "").trim()
  );

  const isDiscounted = product.isNew === false;
  const discountPercent = 30;

  const discountedPrice =
    isDiscounted && !isNaN(numericPrice)
      ? Math.round(numericPrice * (1 - discountPercent / 100))
      : numericPrice;

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-[#F5F0EB] rounded-2xl p-3 flex flex-col justify-between transition-all duration-300 hover:shadow-md dir-rtl group block relative"
    >
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#EFE7DC] mb-3 relative">
        <img
          src={productImage}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {isDiscounted && (
          <span className="absolute top-2 right-2 bg-[#A85842] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10">
            ٪۳۰ تخفیف
          </span>
        )}

        {product.isNew && (
          <span className="absolute top-2 right-2 bg-[#4A3E3D] text-white text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm z-10">
            جدید
          </span>
        )}
      </div>

      <div className="flex flex-col items-center text-center space-y-1.5">
        <h3 className="text-[#4A3E3D] text-xs sm:text-sm font-medium line-clamp-1">
          {product.title}
        </h3>

        <div className="flex flex-col items-center justify-center">
          {isDiscounted && !isNaN(numericPrice) ? (
            <>
              <span className="text-[11px] text-[#A09590] line-through decoration-[#A85842] decoration-1">
                {numericPrice.toLocaleString("fa-IR")}
              </span>

              <span className="text-[#A85842] font-bold text-xs sm:text-sm">
                {discountedPrice.toLocaleString("fa-IR")}{" "}
                <span className="text-[10px] font-normal text-[#7A6E6D]">تومان</span>
              </span>
            </>
          ) : (
            <span className="text-[#4A3E3D] font-bold text-xs sm:text-sm">
              {!isNaN(numericPrice)
                ? numericPrice.toLocaleString("fa-IR")
                : productPrice}{" "}
              <span className="text-[10px] font-normal text-[#7A6E6D]">تومان</span>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;