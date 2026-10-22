import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import AllProductsPage from "./pages/AllProductsPage";
import CategoryPage from "./pages/CategoryPage";
import SaleProductsPage from "./pages/SaleProductsPage";
import BlogListPage from "./pages/BlogListPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import CartDrawer from "./components/CartDrawer";
import AuthModal from "./components/AuthModal";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FDFBF7] pb-16 md:pb-0 relative">
          
          <Navbar 
            onOpenCart={() => setIsCartOpen(true)} 
            onOpenAuth={() => setIsAuthOpen(true)} 
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/sale-products" element={<SaleProductsPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>

          <Footer />

          <MobileBottomNav 
            onOpenCart={() => setIsCartOpen(true)} 
            onOpenAuth={() => setIsAuthOpen(true)} 
          />

          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

        </div>
      </Router>
    </CartProvider>
  );
}

export default App;