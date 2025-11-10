import { motion } from "framer-motion";
import { Heart, MessageSquare, MapPin, Bed, Bath, Car, Ruler, Home, Building2, DollarSign, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PropertyCardProps {
  image: string;
  images?: string[];
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
  detailedInfo?: {
    description: string;
    builtArea?: number;
    totalArea?: number;
    investmentValue?: string;
    iptu?: string;
    units?: Array<{
      name: string;
      features: string[];
    }>;
    externalArea?: string[];
    highlights?: string[];
    conclusion?: string;
  };
}

const PropertyCard = ({
  image,
  images,
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
  detailedInfo,
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const displayImages = images && images.length > 0 ? images : [image];
  
  // Limite de caracteres para prévia da descrição
  const descriptionPreviewLength = 150;
  const shouldShowExpandButton = detailedInfo?.description && detailedInfo.description.length > descriptionPreviewLength;
  const descriptionPreview = detailedInfo?.description ? detailedInfo.description.substring(0, descriptionPreviewLength) + "..." : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all border border-border flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 bg-muted/50 flex items-center justify-center overflow-hidden">
        {displayImages.length > 1 ? (
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full -ml-0">
              {displayImages.map((img, index) => (
                <CarouselItem key={index} className="h-full pl-0 basis-full flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center bg-muted/30 p-2 sm:p-0">
                    <img
                      src={img}
                      alt={`${title} - Imagem ${index + 1}`}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 sm:left-2 h-7 w-7 sm:h-8 sm:w-8 bg-background/90 hover:bg-background/95 border-0 shadow-lg z-20" />
            <CarouselNext className="right-1 sm:right-2 h-7 w-7 sm:h-8 sm:w-8 bg-background/90 hover:bg-background/95 border-0 shadow-lg z-20" />
          </Carousel>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted/30 p-2 sm:p-0">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2 z-10">
          {badge && (
            <Badge variant={badgeVariant} className="shadow-lg text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1">
              {badge}
            </Badge>
          )}
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1">
            {type}
          </Badge>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center active:scale-95 hover:scale-110 transition-transform shadow-lg z-10 touch-manipulation"
          aria-label="Adicionar aos favoritos"
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-foreground"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-1 min-h-[200px]">
        {/* Price */}
        <div>
          {originalPrice && (
            <p className="text-xs sm:text-sm text-muted-foreground line-through mb-0.5 sm:mb-1">
              {originalPrice}
            </p>
          )}
          <p className="text-xl sm:text-2xl font-heading font-bold text-primary">
            {price}
          </p>
        </div>

        {/* Title & Location */}
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
            <p className="text-xs sm:text-sm line-clamp-1">{location}</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{area}m²</span>
          </div>
        </div>

        {/* Action Button - Alinhado ao final com altura fixa */}
        <div className="mt-auto pt-2">
          <Button 
            className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 active:opacity-80 text-sm sm:text-base py-2.5 sm:py-3 touch-manipulation min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
            onClick={() => window.open("https://wa.me/5521978893967", "_blank")}
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
            Mensagem
          </Button>
        </div>

        {/* Detailed Information - Only shown when detailedInfo exists and has images (carousel) */}
        {detailedInfo && displayImages.length > 1 && (
          <div className="mt-4 pt-4 border-t border-border space-y-6">
            {/* Description with Expand/Collapse */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isDescriptionExpanded || !shouldShowExpandButton
                  ? detailedInfo.description
                  : descriptionPreview}
              </p>
              {shouldShowExpandButton && (
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {isDescriptionExpanded ? (
                    <>
                      <span>Ler menos</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Ler mais</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}

              {/* All sections inside "Ler mais" */}
              {isDescriptionExpanded && (
                <div className="space-y-6 mt-6">
                  {/* Property Information */}
                  {(detailedInfo.builtArea || detailedInfo.totalArea || detailedInfo.investmentValue || detailedInfo.iptu) && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Informações do Imóvel:
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                        {detailedInfo.builtArea && (
                          <li className="flex items-center gap-2">
                            <Ruler className="w-3 h-3" />
                            <span>Área construída: <strong className="text-foreground">{detailedInfo.builtArea} m²</strong></span>
                          </li>
                        )}
                        {detailedInfo.totalArea && (
                          <li className="flex items-center gap-2">
                            <Ruler className="w-3 h-3" />
                            <span>Área total do terreno: <strong className="text-foreground">{detailedInfo.totalArea} m²</strong></span>
                          </li>
                        )}
                        {detailedInfo.investmentValue && (
                          <li className="flex items-center gap-2">
                            <DollarSign className="w-3 h-3" />
                            <span>Valor do investimento: <strong className="text-foreground">{detailedInfo.investmentValue}</strong></span>
                          </li>
                        )}
                        {detailedInfo.iptu && (
                          <li className="flex items-center gap-2">
                            <DollarSign className="w-3 h-3" />
                            <span>IPTU anual: <strong className="text-foreground">{detailedInfo.iptu}</strong></span>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Units Configuration */}
                  {detailedInfo.units && detailedInfo.units.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Configuração das Unidades:
                      </h4>
                      <div className="space-y-3 ml-6">
                        {detailedInfo.units.map((unit, index) => (
                          <div key={index} className="space-y-1">
                            <p className="text-sm font-medium text-foreground">{unit.name}</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                              {unit.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* External Area */}
                  {detailedInfo.externalArea && detailedInfo.externalArea.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Área Externa:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                        {detailedInfo.externalArea.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlights */}
                  {detailedInfo.highlights && detailedInfo.highlights.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Diferenciais:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                        {detailedInfo.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Conclusion */}
                  {detailedInfo.conclusion && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold">Conclusão:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed italic ml-6">
                        {detailedInfo.conclusion}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PropertyCard;
