import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logomain from "../assets/logomain.png";
import { Search, User, ShoppingBag, ChevronDown, X, Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import { products } from "../datas/productsData";
import AuthModal from "./AuthModal";

function Navbar() {
  const { totalCartCount } = useCart();
  const navigate = useNavigate();

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);

  const categoriesList = [
    { id: 1, title: "لوازم برقی آشپزخانه", path: "لوازم برقی آشپزخانه" },
    { id: 2, title: "ظروف پذیرایی", path: "ظروف پذیرایی" },
    { id: 3, title: "روشنایی و لوستر", path: "روشنایی و لوستر" },
    { id: 4, title: "مبلمان و صندلی", path: "مبلمان و صندلی" },
    { id: 5, title: "کالای خواب", path: "کالای خواب" },
    { id: 6, title: "دکوراتیو", path: "دکوراتیو" },
    { id: 7, title: "ملزومات آشپزخانه", path: "ملزومات آشپزخانه" },
    { id: 8, title: "فرش و موکت", path: "فرش و موکت" },
    { id: 9, title: "ست سرویس بهداشتی", path: "ست سرویس بهداشتی" },
    { id: 10, title: "منسوجات", path: "منسوجات" },
  ];

  const searchResults =
    searchQuery.trim() === ""
      ? []
      : products.filter((item) =>
          item.title?.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-16 py-2 bg-[#F9F6F0]/95 border-b border-[#EFEAE1] sticky top-0 z-40 backdrop-blur-md dir-rtl">
        
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1.5 text-[#4A3E3D] hover:text-[#D8C3A5] transition-colors cursor-pointer"
            aria-label="باز کردن منو"
          >
            <Menu size={28} />
          </button>
        </div>

        <div className="flex items-center gap-2 p-0 m-0">
          <Link to="/">
            <img
              src={logomain}
              alt="لوگوی فروشگاه"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-6 text-[#4A3E3D] font-medium text-base">
          <li>
            <Link to="/" className="hover:text-[#D8C3A5] transition-colors">
              صفحه اصلی
            </Link>
          </li>

          <li className="relative group cursor-pointer py-2">
            <div className="flex items-center gap-1 hover:text-[#D8C3A5] transition-colors">
              <span>محصولات</span>
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </div>

            <div className="absolute right-0 top-full hidden group-hover:block w-56 pt-2 z-50">
              <div className="bg-[#FDFBF7] border border-[#EFEAE1] rounded-xl shadow-lg py-2">
                <ul className="flex flex-col gap-1">
                  {categoriesList.map((category) => (
                    <li key={category.id}>
                      <Link
                        to={`/category/${encodeURIComponent(category.path)}`}
                        className="block px-4 py-2 text-sm text-[#4A3E3D] hover:bg-[#F9F6F0] hover:text-[#D8C3A5] transition-colors rounded-lg mx-1"
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          <li>
            <Link to="/sale-products" className="hover:text-[#D8C3A5] transition-colors">
              محصولات تخفیفی
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#D8C3A5] transition-colors">
              درباره ما
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-[#D8C3A5] transition-colors">
              سوالات متداول
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#D8C3A5] transition-colors">
              وبلاگ
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 sm:gap-5 text-[#4A3E3D]">
          
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-[#D8C3A5] transition-colors cursor-pointer flex items-center pt-1"
              title="جستجو"
            >
              <Search size={24} className="sm:w-[27px] sm:h-[27px]" />
            </button>

            {isSearchOpen && (
              <div className="absolute left-0 mt-3 w-72 sm:w-80 bg-white border border-[#EFEAE1] rounded-2xl shadow-xl p-3 z-50 dir-rtl">
                <div className="flex items-center justify-between border-b border-[#EFEAE1] pb-2 mb-2">
                  <span className="text-xs font-bold text-[#4A3E3D]">جستجوی محصول</span>
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                <input
                  type="text"
                  placeholder="نام محصول (مثل تابلو...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F9F6F0] border border-[#EFEAE1] rounded-xl focus:outline-none focus:border-[#7A685D] text-[#4A3E3D]"
                />

                {searchQuery.trim() !== "" && (
                  <div className="mt-2 max-h-60 overflow-y-auto space-y-1.5">
                    {searchResults.length > 0 ? (
                      searchResults.map((prod) => (
                        <Link
                          key={prod.id}
                          to={`/product/${prod.id}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center gap-2 p-2 hover:bg-[#F9F6F0] rounded-xl transition-colors block"
                        >
                          <img
                            src={prod.image || (prod.variants && prod.variants[0]?.image)}
                            alt={prod.title}
                            className="w-10 h-10 object-cover rounded-lg bg-[#EFE7DC]"
                          />
                          <div className="flex-1 overflow-hidden">
                            <h4 className="text-xs font-bold text-[#4A3E3D] truncate">
                              {prod.title}
                            </h4>
                            <p className="text-[10px] text-[#7A6E6D]">
                              {prod.price} تومان
                            </p>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-center text-xs text-[#7A6E6D] py-4">
                        محصولی با این نام یافت نشد!
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsAuthOpen(true)}
            className="hover:text-[#D8C3A5] transition-colors cursor-pointer"
            title="ورود / حساب کاربری"
          >
            <User size={24} className="sm:w-[27px] sm:h-[27px]" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-[#D8C3A5] transition-colors cursor-pointer"
            title="سبد خرید"
          >
            <ShoppingBag size={24} className="sm:w-[27px] sm:h-[27px]" />
            {totalCartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#7A685D] text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-start lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="relative w-4/5 max-w-xs bg-[#F9F6F0] h-full shadow-2xl flex flex-col dir-rtl z-10 p-5 space-y-6 overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-[#EFEAE1] pb-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logomain} alt="لوگو" className="h-16 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#EAE2D8] text-[#4A3E3D] transition-colors cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            <ul className="flex flex-col gap-4 text-[#4A3E3D] font-medium text-sm">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 hover:text-[#D8C3A5] transition-colors"
                >
                  صفحه اصلی
                </Link>
              </li>

              <li className="border-y border-[#EFEAE1] py-2">
                <button
                  onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}
                  className="w-full flex items-center justify-between py-1 text-[#4A3E3D] hover:text-[#D8C3A5] transition-colors cursor-pointer"
                >
                  <span>محصولات</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isMobileCategoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileCategoriesOpen && (
                  <ul className="flex flex-col gap-2 mt-2 pr-4 text-xs space-y-1">
                    {categoriesList.map((category) => (
                      <li key={category.id}>
                        <Link
                          to={`/category/${encodeURIComponent(category.path)}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1.5 text-[#7A6E6D] hover:text-[#4A3E3D] transition-colors"
                        >
                          {category.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/sale-products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 hover:text-[#D8C3A5] transition-colors"
                >
                  محصولات تخفیفی
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 hover:text-[#D8C3A5] transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 hover:text-[#D8C3A5] transition-colors"
                >
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 hover:text-[#D8C3A5] transition-colors"
                >
                  وبلاگ
                </Link>
              </li>
            </ul>

          </div>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}

export default Navbar;