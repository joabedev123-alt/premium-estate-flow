import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const neighborhoods = [
  "Vila Madalena", "Itaim Bibi", "Moema", "Pinheiros",
  "Jardins", "Brooklin", "Vila Olímpia", "Perdizes",
  "Higienópolis", "Santana", "Tatuapé", "Mooca",
  "Ipiranga", "Vila Mariana", "Campo Belo", "Santo Amaro",
  "Butantã", "Lapa", "Barra Funda", "Casa Verde",
];

const NeighborhoodList = () => {
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Explorar por Bairros Populares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra imóveis nos bairros mais procurados de São Paulo
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <motion.a
                key={neighborhood}
                href={`#${neighborhood.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-card hover:bg-muted rounded-xl p-4 border border-border hover:border-primary transition-all text-center shadow-sm hover:shadow-md"
              >
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {neighborhood}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodList;
