import HeroSection from "../../Section/Hero Page Section/HeroSetion";
import FlashSaleSectiion from "../../Section/Flash Sale Section/FlashSaleSection";
import BannerSection from "../../Section/Banner Promo Section/BannerSection";
import ProductsSection from "../../Section/Product Section/Prodcut";
import Category from "../../Section/Category Section/Category";
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <BannerSection />
      <FlashSaleSectiion />
      <Category />
      <ProductsSection />
    </div>
  );
};

export default Homepage;
