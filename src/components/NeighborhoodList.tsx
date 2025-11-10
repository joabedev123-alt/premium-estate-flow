import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const neighborhoods = [
  "Cotia",
  "Paiol",
  "Centro da cidade",
  "Parque Flexal",
  "Parque Silvestre",
  "Rio das Ostras",
  "Arraial do Cabo",
];

const NeighborhoodList = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-0"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 sm:mb-5 lg:mb-6">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mb-3 sm:mb-4">
            Explorar por Bairros Populares
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Descubra imóveis nos bairros mais procurados da região
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto px-2 sm:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <motion.a
                key={neighborhood}
                href={`#${neighborhood.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-card hover:bg-muted active:bg-muted rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border hover:border-primary active:border-primary transition-all text-center shadow-sm hover:shadow-md touch-manipulation"
              >
                <p className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary group-active:text-primary transition-colors">
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
