import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Store, ShoppingBag, User } from "lucide-react";
import { useCart } from "../context/CartContext";

function MobileBottomNav({ onOpenCart, onOpenAuth }) {
  const { totalCartCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#F9F6F0]/95 backdrop-blur-md border-t border-[#EFEAE1] px-4 py-2.5 flex items-center justify-around md:hidden dir-rtl shadow-lg">
      
      <Link
        to="/"
        className={`flex flex-col items-center gap-1 transition-colors ${
          isActive("/") ? "text-[#4A3E3D]" : "text-[#7A6E6D] hover:text-[#4A3E3D]"
        }`}
      >
        <Home size={22} />
        <span className="text-[10px] font-medium">خانه</span>
      </Link>

      <Link
        to="/products"
        className={`flex flex-col items-center gap-1 transition-colors ${
          isActive("/products") ? "text-[#4A3E3D]" : "text-[#7A6E6D] hover:text-[#4A3E3D]"
        }`}
      >
        <Store size={22} />
        <span className="text-[10px] font-medium">فروشگاه</span>
      </Link>

      <button
        onClick={onOpenCart}
        className="relative flex flex-col items-center gap-1 text-[#7A6E6D] hover:text-[#4A3E3D] transition-colors cursor-pointer"
      >
        <div className="relative">
          <ShoppingBag size={22} />
          {totalCartCount > 0 && (
            <span className="absolute -top-2 -right-2.5 bg-[#7A685D] text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold shadow-sm">
              {totalCartCount}
            </span>
          )}
        </div>
        <span className="text-[10px] font-medium">سبد خرید</span>
      </button>

      <button
        onClick={onOpenAuth}
        className="flex flex-col items-center gap-1 text-[#7A6E6D] hover:text-[#4A3E3D] transition-colors cursor-pointer"
      >
        <User size={22} />
        <span className="text-[10px] font-medium">ورود</span>
      </button>

    </div>
  );
}

export default MobileBottomNav;