import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LifestyleSection from "@/components/LifestyleSection";
import PromoBanner from "@/components/PromoBanner";
import LocationSearch from "@/components/LocationSearch";
import PropertyGrid from "@/components/PropertyGrid";
import LaunchCarousel from "@/components/LaunchCarousel";
import NeighborhoodList from "@/components/NeighborhoodList";
import BlogSection from "@/components/BlogSection";
import StatesSection from "@/components/StatesSection";
import PopularSearches from "@/components/PopularSearches";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LifestyleSection />
        <PromoBanner />
        <LocationSearch />
        <PropertyGrid 
          title="Imóveis perto de você"
          subtitle="Descubra as melhores opções na sua região"
        />
        <PropertyGrid 
          title="Imóveis com preço reduzido"
          subtitle="Aproveite as melhores oportunidades"
          showPriceReduction={true}
        />
        <LaunchCarousel />
        <NeighborhoodList />
        <BlogSection />
        <StatesSection />
        <PopularSearches />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
