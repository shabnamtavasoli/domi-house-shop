import React from "react";
import HeroBanner from "../components/HeroBanner";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedBanners from "../components/FeaturedBanners";
import NewArrivals from "../components/NewArrivals";
import SaleSection from "../components/SaleSection";
import BlogSection from "../components/BlogSection";

function Home() {
  return (
    <main>
      <HeroBanner />
      <CategoryGrid />
      <FeaturedBanners />
      <NewArrivals />
      <SaleSection />
      <BlogSection />
    </main>
  );
}

export default Home;