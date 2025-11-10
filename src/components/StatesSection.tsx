import { motion } from "framer-motion";
import property2 from "@/assets/property-2.jpg";

const states = [
  {
    name: "Rio de Janeiro",
    image: property2,
    count: "250+ imóveis",
  },
];

const StatesSection = () => {
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mb-3 sm:mb-4">
            Imóveis por Estado
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Explore oportunidades em todo o Brasil
          </p>
        </motion.div>

        <div className="flex justify-center px-2 sm:px-0">
          <div className="max-w-md w-full">
            {states.map((state, index) => (
              <motion.a
                key={state.name}
                href={`#${state.name.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-64 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg block touch-manipulation"
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
                <div className="absolute inset-0 p-4 sm:p-5 lg:p-6 flex flex-col justify-end">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1 sm:mb-2">
                    {state.name}
                  </h3>
                  <p className="text-white/90 text-base sm:text-lg">
                    {state.count}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatesSection;
