import { motion } from "framer-motion";
import { Search, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LocationSearch = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
              Busque por Localização
            </h2>
            <p className="text-lg text-muted-foreground">
              Encontre imóveis próximos a você ou em qualquer região
            </p>
          </div>

          {/* Search Bar with Map Visual */}
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            {/* Map Visual Representation */}
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/10">
              {/* Simplified Map Grid */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="border border-border" />
                ))}
              </div>
              
              {/* Map Markers */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-2/3 left-2/3 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg"
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>

              {/* Center Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-background/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4"
                >
                  <h3 className="text-xl font-heading font-bold mb-4 text-center">
                    Procure imóveis perto de você
                  </h3>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Digite o endereço..."
                        className="pl-10 h-12"
                      />
                    </div>
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                      <Navigation className="w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSearch;
