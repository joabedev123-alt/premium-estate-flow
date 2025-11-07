import { motion } from "framer-motion";
import { Heart, MessageSquare, MapPin, Bed, Bath, Car, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PropertyCardProps {
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
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

const PropertyCard = ({
  image,
  price,
  originalPrice,
  title,
  location,
  bedrooms,
  bathrooms,
  area,
  type,
  badge,
  badgeVariant = "default",
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all border border-border"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {badge && (
            <Badge variant={badgeVariant} className="shadow-lg">
              {badge}
            </Badge>
          )}
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {type}
          </Badge>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-foreground"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Price */}
        <div>
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through mb-1">
              {originalPrice}
            </p>
          )}
          <p className="text-2xl font-heading font-bold text-primary">
            {price}
          </p>
        </div>

        {/* Title & Location */}
        <div>
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <p className="text-sm line-clamp-1">{location}</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="w-4 h-4" />
            <span>{area}m²</span>
          </div>
        </div>

        {/* Action Button */}
        <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
          <MessageSquare className="w-4 h-4 mr-2" />
          Mensagem
        </Button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
