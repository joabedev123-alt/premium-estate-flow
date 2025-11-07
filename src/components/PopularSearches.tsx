import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const searches = [
  "Casas à venda em São Paulo",
  "Apartamentos para alugar em BH",
  "Imóveis em Campinas",
  "Casas no Rio de Janeiro",
  "Studios em São Paulo",
  "Coberturas à venda",
  "Apartamentos novos em Curitiba",
  "Casas de condomínio",
  "Imóveis com piscina",
  "Apartamentos de 3 quartos",
  "Casas em Porto Alegre",
  "Lofts à venda",
  "Imóveis em Florianópolis",
  "Apartamentos no Morumbi",
  "Casas de alto padrão",
  "Imóveis na praia",
];

const PopularSearches = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Buscas Populares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que as pessoas estão procurando
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {searches.map((search, index) => (
              <motion.a
                key={search}
                href={`#busca-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full border border-border hover:border-primary transition-all shadow-sm hover:shadow-md text-sm font-medium"
              >
                {search}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
