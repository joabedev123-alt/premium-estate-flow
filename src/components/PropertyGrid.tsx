import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

interface PropertyGridProps {
  title: string;
  subtitle?: string;
  showPriceReduction?: boolean;
}

const PropertyGrid = ({ title, subtitle, showPriceReduction = false }: PropertyGridProps) => {
  const properties: Array<{
    image: string;
    price: string;
    originalPrice?: string;
    title: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    type: string;
    badge?: string;
    badgeVariant?: "default" | "destructive" | "outline" | "secondary";
  }> = [
    {
      image: property1,
      price: "R$ 850.000",
      originalPrice: showPriceReduction ? "R$ 920.000" : undefined,
      title: "Apartamento Moderno com Vista Panorâmica",
      location: "Itaim Bibi, São Paulo - SP",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      type: "Apartamento",
      badge: showPriceReduction ? "Preço Reduzido" : "Novo",
      badgeVariant: showPriceReduction ? "destructive" : "default",
    },
    {
      image: property2,
      price: "R$ 1.200.000",
      originalPrice: showPriceReduction ? "R$ 1.350.000" : undefined,
      title: "Casa Contemporânea com Jardim Amplo",
      location: "Vila Madalena, São Paulo - SP",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      type: "Casa",
      badge: showPriceReduction ? "Preço Reduzido" : undefined,
      badgeVariant: showPriceReduction ? "destructive" : "default",
    },
    {
      image: property3,
      price: "R$ 2.100.000",
      originalPrice: showPriceReduction ? "R$ 2.400.000" : undefined,
      title: "Cobertura Luxuosa com Vista para a Cidade",
      location: "Moema, São Paulo - SP",
      bedrooms: 4,
      bathrooms: 4,
      area: 350,
      type: "Cobertura",
      badge: showPriceReduction ? "Preço Reduzido" : "Destaque",
      badgeVariant: showPriceReduction ? "destructive" : "secondary",
    },
    {
      image: property1,
      price: "R$ 680.000",
      originalPrice: showPriceReduction ? "R$ 750.000" : undefined,
      title: "Apartamento Compacto e Bem Localizado",
      location: "Pinheiros, São Paulo - SP",
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      type: "Apartamento",
      badge: showPriceReduction ? "Preço Reduzido" : undefined,
      badgeVariant: showPriceReduction ? "destructive" : "default",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
