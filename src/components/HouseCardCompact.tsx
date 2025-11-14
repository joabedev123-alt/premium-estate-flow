import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Ruler, Images } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface HouseCardCompactProps {
  id: string;
  image: string;
  images?: string[];
  price: string;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

const HouseCardCompact = ({
  id,
  image,
  images,
  price,
  title,
  location,
  bedrooms,
  bathrooms,
  area,
  badge,
  badgeVariant = "default",
}: HouseCardCompactProps) => {
  const navigate = useNavigate();
  const hasMultipleImages = images && images.length > 0;

  const handleClick = () => {
    navigate(`/casa/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="group bg-card rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-border cursor-pointer flex flex-col h-full touch-manipulation"
    >
      {/* Image Container - Compacto */}
      <div className="relative h-36 sm:h-40 md:h-44 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 flex flex-wrap gap-1 z-10" onClick={(e) => e.stopPropagation()}>
          {badge && (
            <Badge variant={badgeVariant} className="shadow-lg text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5">
              {badge}
            </Badge>
          )}
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5">
            Casa
          </Badge>
        </div>

        {/* Contador de imagens */}
        {hasMultipleImages && (
          <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-background/90 backdrop-blur-sm rounded px-1.5 sm:px-2 py-0.5 sm:py-1 flex items-center gap-1 z-10">
            <Images className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="text-[10px] sm:text-xs font-medium">{images!.length + 1}</span>
          </div>
        )}
      </div>

      {/* Content - Compacto */}
      <div className="p-2.5 sm:p-3 md:p-4 flex flex-col flex-1">
        {/* Price */}
        <div className="mb-1.5 sm:mb-2">
          <p className="text-base sm:text-lg md:text-xl font-heading font-bold text-primary line-clamp-1">
            {price}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-1.5 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] flex-1">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-muted-foreground mb-1.5 sm:mb-2">
          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1 flex-shrink-0" />
          <p className="text-[10px] sm:text-xs line-clamp-1">{location}</p>
        </div>

        {/* Features - Compacto */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs text-muted-foreground mt-auto pt-1.5 sm:pt-2 border-t border-border">
          {bedrooms > 0 && (
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Bed className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>{bedrooms}</span>
            </div>
          )}
          {bathrooms > 0 && (
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Bath className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>{bathrooms}</span>
            </div>
          )}
          {area > 0 && (
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Ruler className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>{area}m²</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HouseCardCompact;

