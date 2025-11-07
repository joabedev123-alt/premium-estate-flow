import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroPersonImage from "@/assets/hero-person.jpg";

const HeroSection = () => {
  const [searchType, setSearchType] = useState("comprar");

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-6xl font-heading font-bold leading-tight"
              >
                Festival de Mudança
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl lg:text-2xl text-muted-foreground font-medium"
              >
                Encontre mais fácil no Zap a casa que tem tudo a ver com você
              </motion.p>
            </div>

            {/* Search Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl shadow-xl p-6 space-y-4 border border-border"
            >
              <Tabs defaultValue="comprar" className="w-full" onValueChange={setSearchType}>
                <TabsList className="grid w-full grid-cols-3 bg-muted">
                  <TabsTrigger value="comprar" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Comprar
                  </TabsTrigger>
                  <TabsTrigger value="alugar" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Alugar
                  </TabsTrigger>
                  <TabsTrigger value="lancamentos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Lançamentos
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Cidade, bairro ou endereço"
                  className="pl-12 h-14 text-lg border-border"
                />
              </div>

              <Button 
                size="lg" 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
              >
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroPersonImage}
                alt="Pessoa feliz encontrando seu novo imóvel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold font-heading">50.000</p>
                  <p className="text-sm text-muted-foreground">Imóveis disponíveis</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
