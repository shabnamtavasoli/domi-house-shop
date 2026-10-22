import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-md bg-[#F9F6F0] h-full shadow-2xl flex flex-col dir-rtl z-10">
        
        <div className="flex items-center justify-between p-5 border-b border-[#EFEAE1] bg-[#F5F0EB]">
          <div className="flex items-center gap-2 text-[#4A3E3D]">
            <ShoppingBag size={22} />
            <h2 className="text-lg font-bold">سبد خرید شما</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EAE2D8] text-[#4A3E3D] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => {
              const prod = item.product || {};
              const variant = item.selectedVariant || {};

              const productImage =
                variant.image ||
                prod.image ||
                (prod.variants && prod.variants[0]?.image) ||
                "";

              const productTitle = prod.title || prod.name || "محصول بدون نام";

              const variantColorName = variant.color || variant.name || variant.title || "";

              const rawPrice =
                variant.price ||
                prod.price ||
                (prod.variants && prod.variants[0]?.price) ||
                0;

              const numericPrice = Number(
                rawPrice.toString().replace(/,/g, "").trim()
              ) || 0;

              const isDiscounted = prod.isNew === false;
              const finalItemPrice = isDiscounted
                ? Math.round(numericPrice * 0.7)
                : numericPrice;

              return (
                <div
                  key={item.cartItemId}
                  className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-[#EFEAE1] shadow-xs"
                >
                  <div className="w-20 h-20 rounded-xl bg-[#EFE7DC] overflow-hidden flex-shrink-0">
                    {productImage ? (
                      <img
                        src={productImage}
                        alt={productTitle}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-[#A09388]">
                        بدون تصویر
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-1">
                    <h3 className="text-sm font-bold text-[#4A3E3D] line-clamp-1">
                      {productTitle}
                    </h3>

                    {variantColorName && (
                      <p className="text-[11px] text-[#7A6E6D] font-medium flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full inline-block border border-gray-300" style={{ backgroundColor: variant.code || variant.colorCode || '#ccc' }}></span>
                        رنگ: {variantColorName}
                      </p>
                    )}
                    
                    <p className="text-xs text-[#8C7A6B] font-medium pt-0.5">
                      {finalItemPrice.toLocaleString("fa-IR")}{" "}
                      <span className="text-[10px]">تومان</span>
                    </p>

                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex items-center border border-[#EFEAE1] rounded-lg bg-[#F9F6F0]">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2 py-1 text-[#4A3E3D] hover:text-[#D8C3A5] text-xs font-bold cursor-pointer"
                        >
                          <Plus size={14} />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#4A3E3D]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2 py-1 text-[#4A3E3D] hover:text-[#D8C3A5] text-xs font-bold cursor-pointer"
                        >
                          <Minus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-[#C86D51] hover:text-red-600 p-1 transition-colors cursor-pointer mr-auto"
                        title="حذف از سبد"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
              <ShoppingBag size={48} className="text-[#C5B8AB]" />
              <p className="text-sm text-[#7A6E6D] font-medium">
                سبد خرید شما در حال حاضر خالی است!
              </p>
            </div>
          )}
        </div>

        {cartItems && cartItems.length > 0 && (
          <div className="p-5 border-t border-[#EFEAE1] bg-[#F5F0EB] space-y-4">
            <div className="flex items-center justify-between text-[#4A3E3D]">
              <span className="text-sm font-medium">مجموع کل:</span>
              <span className="text-base font-bold">
                {Number(totalPrice || 0).toLocaleString("fa-IR")}{" "}
                <span className="text-xs font-normal">تومان</span>
              </span>
            </div>

            <Link
              to="/checkout"
              onClick={onClose}
              className="block w-full bg-[#7A685D] hover:bg-[#65554B] text-white text-center py-3 rounded-xl text-sm font-bold transition-all shadow-sm"
            >
              ادامه و تسویه حساب
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

export default CartDrawer;