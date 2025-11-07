import { motion } from "framer-motion";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const states = [
  {
    name: "São Paulo",
    image: property1,
    count: "25.000+ imóveis",
  },
  {
    name: "Rio de Janeiro",
    image: property2,
    count: "18.000+ imóveis",
  },
  {
    name: "Minas Gerais",
    image: property3,
    count: "12.000+ imóveis",
  },
  {
    name: "Paraná",
    image: property1,
    count: "8.500+ imóveis",
  },
];

const StatesSection = () => {
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
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Imóveis por Estado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore oportunidades em todo o Brasil
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {states.map((state, index) => (
            <motion.a
              key={state.name}
              href={`#${state.name.toLowerCase()}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={state.image}
                alt={state.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-3xl font-heading font-bold text-white mb-2">
                  {state.name}
                </h3>
                <p className="text-white/90 text-lg">
                  {state.count}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;
