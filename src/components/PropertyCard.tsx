import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageSquare, MapPin, Bed, Bath, Car, Ruler, Home, Building2, DollarSign, CheckCircle2, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

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
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const displayImages = images && images.length > 0 ? images : [image];
  const coverImage = displayImages[0];
  const hasMultipleImages = displayImages.length > 1;
  
  // Limite de caracteres para prévia da descrição
  const descriptionPreviewLength = 150;
  const shouldShowExpandButton = detailedInfo?.description && detailedInfo.description.length > descriptionPreviewLength;
  const descriptionPreview = detailedInfo?.description ? detailedInfo.description.substring(0, descriptionPreviewLength) + "..." : "";

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const openModal = (index: number = 0) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  // Navegação por teclado no modal
  useEffect(() => {
    if (!isImageModalOpen) return;
    
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsImageModalOpen(false);
      } else if (e.key === "ArrowLeft" && hasMultipleImages) {
        setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
      } else if (e.key === "ArrowRight" && hasMultipleImages) {
        setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
      }
    };
    
    document.addEventListener("keydown", handleKeyboard);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "unset";
    };
  }, [isImageModalOpen, hasMultipleImages, displayImages.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all border border-border flex flex-col h-full"
    >
      {/* Image Container - Cover Photo */}
      <div 
        className="relative h-48 sm:h-56 flex items-center justify-center overflow-hidden cursor-pointer group"
        onClick={() => openModal(0)}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={coverImage}
            alt={title}
            className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {hasMultipleImages && (
          <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1.5 z-10">
            <Images className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">{displayImages.length}</span>
          </div>
        )}
        
        {/* Badges */}
        <div 
          className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2 z-10"
          onClick={(e) => e.stopPropagation()}
        >
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
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
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
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex flex-col flex-1">
          {/* Price */}
          <div className="mb-3 sm:mb-4">
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
          <div className="flex-1 mb-2">
            <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
              {title}
            </h3>
            <div className="flex items-center text-muted-foreground mb-0">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              <p className="text-xs sm:text-sm line-clamp-1">{location}</p>
            </div>
          </div>

          {/* Features */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mt-1">
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
        </div>

        {/* Action Button - Alinhado ao final com altura fixa */}
        <div className="mt-auto pt-3 sm:pt-4">
          <Button 
            className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 active:opacity-80 text-sm sm:text-base py-2.5 sm:py-3 touch-manipulation min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
            onClick={() => window.open("https://wa.me/5521978893967", "_blank")}
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
            Mensagem
          </Button>
        </div>
      </div>

        {/* Detailed Information - Only shown when detailedInfo exists */}
        {detailedInfo && (
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 border-t border-border space-y-6">
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

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsImageModalOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 z-[60] w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 backdrop-blur-sm flex items-center justify-center transition-colors"
                aria-label="Fechar galeria"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
                {/* Previous Button */}
                {hasMultipleImages && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 z-[60] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/20 hover:bg-background/30 backdrop-blur-sm flex items-center justify-center transition-colors touch-manipulation"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </button>
                )}

                {/* Current Image */}
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  src={displayImages[currentImageIndex]}
                  alt={`${title} - Imagem ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Next Button */}
                {hasMultipleImages && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 z-[60] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/20 hover:bg-background/30 backdrop-blur-sm flex items-center justify-center transition-colors touch-manipulation"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </button>
                )}

                {/* Image Counter */}
                {hasMultipleImages && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/20 backdrop-blur-sm rounded-lg px-4 py-2 z-[60]">
                    <span className="text-sm sm:text-base text-white font-medium">
                      {currentImageIndex + 1} / {displayImages.length}
                    </span>
                  </div>
                )}

                {/* Thumbnails */}
                {hasMultipleImages && displayImages.length > 1 && (
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 z-[60]">
                    {displayImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? "border-primary scale-110"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PropertyCard;
