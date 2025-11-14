import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Bed, Bath, Ruler, MessageSquare, Images, Building2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHouseById } from "@/data/housesData";
import { useEffect } from "react";

const HouseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const house = id ? getHouseById(id) : null;

  // Scroll para o topo quando a página abrir
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!house) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Casa não encontrada</h1>
          <Button onClick={() => navigate("/")}>Voltar para a página inicial</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Botão Voltar */}
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm sm:text-base touch-manipulation"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Voltar
          </Button>
        </div>

        {/* Galeria de Imagens - Rolável */}
        <section className="container mx-auto px-3 sm:px-4 pb-6 sm:pb-8">
          <div className="space-y-6 sm:space-y-8">
            {/* Imagem Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-muted/30 flex items-center justify-center min-h-[250px] sm:min-h-[350px] lg:min-h-[400px]"
            >
              <img
                src={house.image}
                alt={house.title}
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh] object-contain"
              />
            </motion.div>

            {/* Grid de Todas as Imagens */}
            {house.images && house.images.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Images className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Todas as Fotos ({house.images.length + 1})</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  {/* Primeira imagem (principal) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-lg group cursor-pointer touch-manipulation"
                  >
                    <img
                      src={house.image}
                      alt={`${house.title} - Foto principal`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-100"
                    />
                  </motion.div>
                  
                  {/* Restante das imagens */}
                  {house.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-lg group cursor-pointer touch-manipulation"
                    >
                      <img
                        src={img}
                        alt={`${house.title} - Foto ${index + 2}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-100"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Informações da Casa */}
        <section className="container mx-auto px-3 sm:px-4 pb-8 sm:pb-10 lg:pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-border">
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                {house.badge && (
                  <Badge variant={house.badgeVariant || "default"} className="mb-2 sm:mb-3 text-xs sm:text-sm">
                    {house.badge}
                  </Badge>
                )}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-2 leading-tight">
                  {house.title}
                </h1>
                <div className="flex items-center text-muted-foreground mb-3 sm:mb-4">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm md:text-base line-clamp-2">{house.location}</p>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary">
                  {house.price}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
                {house.bedrooms > 0 && (
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span>{house.bedrooms} {house.bedrooms === 1 ? 'Quarto' : 'Quartos'}</span>
                  </div>
                )}
                {house.bathrooms > 0 && (
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span>{house.bathrooms} {house.bathrooms === 1 ? 'Banheiro' : 'Banheiros'}</span>
                  </div>
                )}
                {house.area > 0 && (
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Ruler className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span>{house.area} m²</span>
                  </div>
                )}
              </div>

              {/* Informações do Imóvel */}
              {(house.builtArea || house.totalArea || house.investmentValue || house.iptu) && (
                <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>Informações do Imóvel</span>
                  </h2>
                  <ul className="space-y-2 sm:space-y-3">
                    {house.builtArea && (
                      <li className="flex items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-muted-foreground">
                        <Ruler className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span>Área construída: <strong className="text-foreground ml-1">{house.builtArea} m²</strong></span>
                      </li>
                    )}
                    {house.totalArea && (
                      <li className="flex items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-muted-foreground">
                        <Ruler className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="break-words">Área total do terreno: <strong className="text-foreground ml-1">{typeof house.totalArea === 'number' ? house.totalArea.toFixed(2) : house.totalArea} m²</strong></span>
                      </li>
                    )}
                    {house.investmentValue && (
                      <li className="flex items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-muted-foreground">
                        <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="break-words">Valor do investimento: <strong className="text-foreground ml-1">{house.investmentValue}</strong></span>
                      </li>
                    )}
                    {house.iptu && (
                      <li className="flex items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-muted-foreground">
                        <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="break-words">IPTU anual: <strong className="text-foreground ml-1">{house.iptu}</strong></span>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Descrição */}
              {house.description && (
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Sobre o Imóvel</h2>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 sm:space-y-4">
                    {house.description.split('\n\n').map((paragraph, index) => {
                      const trimmed = paragraph.trim();
                      if (!trimmed) return null;
                      
                      // Se é um título de seção (contém : no início e não começa com •)
                      if (trimmed.includes(':') && !trimmed.startsWith('•')) {
                        const lines = trimmed.split('\n');
                        const firstLine = lines[0];
                        const restLines = lines.slice(1).filter(l => l.trim());
                        
                        return (
                          <div key={index} className="space-y-1.5 sm:space-y-2">
                            <h3 className="text-base sm:text-lg font-semibold text-foreground">{firstLine}</h3>
                            {restLines.length > 0 && (
                              <ul className="list-none space-y-1 sm:space-y-1.5 ml-3 sm:ml-4">
                                {restLines.map((line, lineIndex) => {
                                  const cleanLine = line.trim();
                                  if (cleanLine.startsWith('•')) {
                                    return (
                                      <li key={lineIndex} className="flex items-start gap-1.5 sm:gap-2">
                                        <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                                        <span className="break-words">{cleanLine.substring(1).trim()}</span>
                                      </li>
                                    );
                                  }
                                  return cleanLine ? (
                                    <li key={lineIndex} className="ml-3 sm:ml-4 break-words">{cleanLine}</li>
                                  ) : null;
                                })}
                              </ul>
                            )}
                          </div>
                        );
                      }
                      
                      // Parágrafo normal
                      return (
                        <p key={index} className="whitespace-pre-line break-words">
                          {trimmed}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Botão de Contato */}
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 active:opacity-80 text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8 min-h-[44px] sm:min-h-[48px] touch-manipulation flex items-center justify-center"
                onClick={() => window.open("https://wa.me/5521978893967", "_blank")}
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                Falar com Corretor
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HouseDetail;

