import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Building2, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import launch1 from "@/assets/launch-1.jpg";
import horizonteVerdeVideo from "@/assets/iamgens01/imagen03/imagen04/imagen05/WhatsApp Video 2025-11-08 at 00.02.25.mp4";
import parqueAguasImage from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/WhatsApp Image 2025-11-08 at 00.12.00.jpeg";

const launches = [
  {
    image: launch1,
    video: horizonteVerdeVideo,
    name: "Casa de alto padrão",
    location: "RIO DE JANEIRO",
    status: "Em construção",
    units: "130 m² construídos",
    delivery: "450 m² de terreno",
    description: "55 minutos da capital Rio de Janeiro",
    detailedInfo: {
      description: "Casa de alto padrão medindo 130 metros de área construída em terreno com 450 metros quadrados. Tudo isso em uma cidade linda e acolhedora além de estar a menos de 55 minutos da capital Rio de Janeiro e com uma excelente vizinhança, próximo a linda cachoeira!",
      units: [
        {
          name: "A casa é composta por:",
          features: [
            "Dois dormitórios sendo uma bela suíte",
            "Sala de estar",
            "Sala de jantar",
            "Cozinha americana",
            "Lavanderia",
            "Banheiro social",
            "Varanda"
          ]
        }
      ],
      externalArea: [
        "Área externa",
        "Salão de jogos",
        "Área gourmet",
        "Piscina",
        "Quintal gramado",
        "Garagem coberta",
        "Garagem sem cobertura",
        "Jardim na frente da casa"
      ],
      highlights: [
        "130 m² de área construída",
        "450 m² de terreno",
        "Localizada em uma cidade linda e acolhedora",
        "A menos de 55 minutos da capital Rio de Janeiro",
        "Excelente vizinhança",
        "Próximo a linda cachoeira",
        "Salão de jogos",
        "Área gourmet",
        "Piscina",
        "Quintal gramado"
      ],
      conclusion: "Tudo isso em uma cidade linda e acolhedora além de estar a menos de 55 minutos da capital Rio de Janeiro e com uma excelente vizinhança, próximo a linda cachoeira!"
    },
  },
  {
    image: parqueAguasImage,
    name: "Condomínio Parque das Águas",
    location: "RIO DE JANEIRO - Município de Guapimirim",
    status: "Pré-lançamento",
    units: "300 m² construídos",
    delivery: "800 m² de terreno",
  },
];

const LaunchCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % launches.length);
    setIsDetailsExpanded(false); // Reset details when changing slides
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + launches.length) % launches.length);
    setIsDetailsExpanded(false); // Reset details when changing slides
  };

  const currentLaunch = launches[currentIndex];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 px-2 sm:px-0"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold mb-2 sm:mb-3">
            Lançamentos Próximos a Você
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Conheça os empreendimentos mais recentes da sua região
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto px-2 sm:px-0">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-border">
                <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 items-stretch">
                  {/* Image/Video */}
                  <div className="relative h-48 sm:h-56 lg:h-auto lg:min-h-[300px] bg-muted/50 flex items-center justify-center overflow-hidden">
                    {currentLaunch.video ? (
                      <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                        <video
                          src={currentLaunch.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted/30 p-2 sm:p-4">
                        <img
                          src={currentLaunch.image}
                          alt={currentLaunch.name}
                          className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none" />
                    <Badge className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-secondary text-secondary-foreground z-10 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                      {currentLaunch.status}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 lg:p-5 flex flex-col justify-between">
                    <div className="space-y-2 sm:space-y-3 flex-1">
                      <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-accent mb-1">
                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-heading font-bold mb-1 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                          {currentLaunch.name}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-1">
                          <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span className="text-xs sm:text-sm line-clamp-1">{currentLaunch.location}</span>
                        </div>
                        {currentLaunch.description && (
                          <p className="text-xs text-muted-foreground mb-2 sm:mb-3 line-clamp-2">
                            {currentLaunch.description}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-muted rounded-lg p-2 sm:p-2.5">
                          <p className="text-xs text-muted-foreground mb-0.5">Área Construída</p>
                          <p className="font-semibold text-xs line-clamp-1">{currentLaunch.units}</p>
                        </div>
                        <div className="bg-muted rounded-lg p-2 sm:p-2.5">
                          <p className="text-xs text-muted-foreground mb-0.5">Terreno</p>
                          <p className="font-semibold text-xs line-clamp-1">{currentLaunch.delivery}</p>
                        </div>
                      </div>
                    </div>

                    {currentLaunch.detailedInfo && (
                      <div className="mt-3 sm:mt-4">
                        <Button 
                          size="sm" 
                          onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
                          className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 active:opacity-80 text-xs sm:text-sm flex items-center justify-center gap-2 py-2 sm:py-2.5 touch-manipulation"
                        >
                          {isDetailsExpanded ? (
                            <>
                              Ocultar Detalhes
                              <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </>
                          ) : (
                            <>
                              Ver Detalhes
                              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Detailed Information Section */}
                {currentLaunch.detailedInfo && isDetailsExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border bg-muted/30"
                  >
                    <div className="p-4 lg:p-5 space-y-4">
                      {/* Description */}
                      {currentLaunch.detailedInfo.description && (
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {currentLaunch.detailedInfo.description}
                          </p>
                        </div>
                      )}

                      {/* Units */}
                      {currentLaunch.detailedInfo.units && currentLaunch.detailedInfo.units.length > 0 && (
                        <div className="space-y-3">
                          {currentLaunch.detailedInfo.units.map((unit, index) => (
                            <div key={index} className="space-y-2">
                              <h4 className="text-sm font-semibold">{unit.name}</h4>
                              <ul className="space-y-1 ml-4">
                                {unit.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* External Area */}
                      {currentLaunch.detailedInfo.externalArea && currentLaunch.detailedInfo.externalArea.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Área Externa:</h4>
                          <ul className="space-y-1 ml-4">
                            {currentLaunch.detailedInfo.externalArea.map((area, index) => (
                              <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Highlights */}
                      {currentLaunch.detailedInfo.highlights && currentLaunch.detailedInfo.highlights.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Destaques:</h4>
                          <ul className="space-y-1 ml-4">
                            {currentLaunch.detailedInfo.highlights.map((highlight, index) => (
                              <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Conclusion */}
                      {currentLaunch.detailedInfo.conclusion && (
                        <div className="space-y-2 pt-2 border-t border-border/50">
                          <p className="text-xs text-muted-foreground leading-relaxed italic">
                            {currentLaunch.detailedInfo.conclusion}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-5 lg:mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full touch-manipulation active:scale-95"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-1.5 sm:gap-2">
              {launches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsDetailsExpanded(false);
                  }}
                  className={`h-2.5 sm:h-3 rounded-full transition-all touch-manipulation ${
                    index === currentIndex
                      ? "bg-primary w-6 sm:w-8"
                      : "bg-border hover:bg-primary/50 active:bg-primary/70 w-2.5 sm:w-3"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full touch-manipulation active:scale-95"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchCarousel;
