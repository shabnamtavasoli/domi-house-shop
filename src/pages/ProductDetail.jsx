import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../datas/productsData";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [isAdded, setIsAdded] = useState(false);

  const product = products.find((p) => p.id === parseInt(id) || p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (product) {
      if (product.variants && product.variants.length > 0) {
        setSelectedVariant(product.variants[0]);
        setSelectedImage(product.variants[0].image || product.image);
      } else {
        setSelectedImage(product.image || (product.images && product.images[0]));
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-20 text-center dir-rtl">
        <h2 className="text-xl font-bold text-[#4A3E3D] mb-4">محصول مورد نظر یافت نشد!</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#F5F0EB] hover:bg-[#EFE7DC] text-[#4A3E3D] px-6 py-2.5 rounded-full border border-[#E5DCD3] transition-all cursor-pointer"
        >
          بازگشت
        </button>
      </div>
    );
  }

  const allImages = product.images
    ? product.images
    : product.variants
    ? Array.from(new Set(product.variants.map((v) => v.image).filter(Boolean)))
    : [product.image];

  const currentIndex = allImages.indexOf(selectedImage) !== -1 ? allImages.indexOf(selectedImage) : 0;

  const handleNextImage = () => {
    if (allImages.length <= 1) return;
    const nextIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (allImages.length <= 1) return;
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[prevIndex]);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextImage();
    } else if (isRightSwipe) {
      handlePrevImage();
    }
  };

  const currentPrice = selectedVariant?.price || product.price;
  const numericPrice = Number(currentPrice?.toString().replace(/,/g, "").trim());

  const isDiscounted = product.isNew === false;
  const discountPercent = 30;
  const discountedPrice = isDiscounted && !isNaN(numericPrice)
    ? Math.round(numericPrice * (1 - discountPercent / 100))
    : numericPrice;

  const handleColorChange = (variant) => {
    setSelectedVariant(variant);
    if (variant.image) {
      setSelectedImage(variant.image);
    }
  };

  const handleSelectChange = (e) => {
    const variantIndex = e.target.value;
    const variant = product.variants[variantIndex];
    if (variant) {
      setSelectedVariant(variant);
      if (variant.image) setSelectedImage(variant.image);
    }
  };

  const handleAddToCart = () => {
    const finalProductToAdd = {
      ...product,
      price: discountedPrice,
    };
    addToCart(finalProductToAdd, selectedVariant);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 dir-rtl min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="flex flex-col space-y-4">
          <div
            className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F5F0EB] border border-[#EFEAE1] shadow-sm flex items-center justify-center group select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={selectedImage || product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {isDiscounted && (
              <span className="absolute top-4 right-4 bg-[#A85842] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-md z-10">
                ٪۳۰ تخفیف
              </span>
            )}

            {product.isNew && (
              <span className="absolute top-4 right-4 bg-[#4A3E3D] text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full shadow-md z-10">
                جدید
              </span>
            )}

            {allImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FDFBF7]/90 hover:bg-[#FDFBF7] text-[#4A3E3D] w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all border border-[#E5DCD3] opacity-90 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer z-10"
                  aria-label="عکس بعدی"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FDFBF7]/90 hover:bg-[#FDFBF7] text-[#4A3E3D] w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all border border-[#E5DCD3] opacity-90 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer z-10"
                  aria-label="عکس قبلی"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#4A3E3D]/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-xs">
                  {currentIndex + 1} / {allImages.length}
                </div>
              </>
            )}
          </div>

          {allImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {allImages.map((imgUrl, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-[#F5F0EB] cursor-pointer ${
                    selectedImage === imgUrl
                      ? "border-[#4A3E3D] scale-105 shadow-sm"
                      : "border-[#EFEAE1] opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-6 bg-[#F9F6F0] p-6 sm:p-8 rounded-3xl border border-[#EFEAE1]">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-[#4A3E3D] mb-3 leading-snug">
              {product.title}
            </h1>
            {product.category && (
              <span className="inline-block text-xs text-[#7A6E6D] bg-[#EFE7DC] px-3 py-1 rounded-full">
                دسته‌بندی: {product.category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 py-3 border-y border-[#E5DCD3]">
            {isDiscounted && !isNaN(numericPrice) ? (
              <div className="flex flex-col">
                <span className="text-sm text-[#A09590] line-through decoration-[#A85842]">
                  {numericPrice.toLocaleString("fa-IR")} تومان
                </span>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-[#A85842]">
                    {discountedPrice.toLocaleString("fa-IR")}
                  </span>
                  <span className="text-sm font-normal text-[#7A6E6D]">تومان</span>
                </div>
              </div>
            ) : (
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-[#4A3E3D]">
                  {!isNaN(numericPrice) ? numericPrice.toLocaleString("fa-IR") : currentPrice}
                </span>
                <span className="text-sm font-normal text-[#7A6E6D]">تومان</span>
              </div>
            )}
          </div>

          {product.description && (
            <p className="text-xs sm:text-sm text-[#665A59] leading-relaxed">
              {product.description}
            </p>
          )}

          {product.variants && product.variants.some((v) => v.color || v.colorCode) && (
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-medium text-[#4A3E3D] block">
                انتخاب رنگ:
              </label>
              <div className="flex items-center gap-3">
                {product.variants.map((variant, idx) => {
                  const isSelected = selectedVariant === variant;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleColorChange(variant)}
                      className={`relative w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                        isSelected
                          ? "border-[#4A3E3D] scale-110 shadow-sm"
                          : "border-transparent opacity-80 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: variant.colorCode || "#CCC" }}
                      title={variant.color}
                    >
                      {isSelected && (
                        <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {product.variants && product.variants.some((v) => v.code || v.material || v.type) && (
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-medium text-[#4A3E3D] block">
                انتخاب نوع / کد محصول:
              </label>
              <select
                onChange={handleSelectChange}
                value={product.variants.indexOf(selectedVariant)}
                className="w-full bg-[#F5F0EB] text-[#4A3E3D] text-xs sm:text-sm border border-[#E5DCD3] rounded-xl px-4 py-3 outline-none focus:border-[#4A3E3D] transition-all cursor-pointer"
              >
                {product.variants.map((variant, idx) => (
                  <option key={idx} value={idx}>
                    {variant.material || variant.code || variant.type || `مدل ${idx + 1}`}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className={`w-full text-sm font-medium py-3.5 rounded-2xl shadow-sm transition-all duration-300 mt-4 cursor-pointer ${
              isAdded
                ? "bg-[#688B58] text-white"
                : "bg-[#4A3E3D] hover:bg-[#362D2C] text-white"
            }`}
          >
            {isAdded ? "به سبد خرید اضافه شد ✓" : "افزودن به سبد خرید"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;