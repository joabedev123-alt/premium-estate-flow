import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LifestyleSection from "@/components/LifestyleSection";
import LocationSearch from "@/components/LocationSearch";
import PropertyGrid from "@/components/PropertyGrid";
import LaunchCarousel from "@/components/LaunchCarousel";
import NeighborhoodList from "@/components/NeighborhoodList";
import StatesSection from "@/components/StatesSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LifestyleSection />
        <LocationSearch />
        <PropertyGrid 
          title="Imóveis perto de você"
          subtitle="Descubra as melhores opções na sua região"
        />
        <LaunchCarousel />
        <NeighborhoodList />
        <StatesSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
