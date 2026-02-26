import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesBar from "@/components/home/FeaturesBar";
import ExploreSection from "@/components/home/ExploreSection";
import BestSellers from "@/components/home/BestSellers";
import CategoriesSection from "@/components/home/CategoriesSection";
import OffersSection from "@/components/home/OffersSection";
import NewArrivals from "@/components/home/NewArrivals";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ArticlesSection from "@/components/home/ArticlesSection";

const Index = () => (
  <>
    <AnnouncementBar />
    <Header />
    <main>
      <HeroSection />
      <FeaturesBar />
      <ExploreSection />
      <BestSellers />
      <CategoriesSection />
      <OffersSection />
      <NewArrivals />
      <TestimonialsSection />
      <ArticlesSection />
    </main>
    <Footer />
  </>
);

export default Index;
