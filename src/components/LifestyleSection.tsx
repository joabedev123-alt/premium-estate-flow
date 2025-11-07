import { motion } from "framer-motion";
import { PawPrint, Trees, Train, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import lifestylePetImage from "@/assets/lifestyle-pet.jpg";
import lifestyleNatureImage from "@/assets/lifestyle-nature.jpg";
import lifestyleMetroImage from "@/assets/lifestyle-metro.jpg";

const lifestyleCategories = [
  {
    title: "Para você e seu pet",
    description: "Encontre imóveis pet-friendly perfeitos para sua família",
    image: lifestylePetImage,
    icon: PawPrint,
    color: "from-primary to-accent",
  },
  {
    title: "Proximidade da natureza",
    description: "Viva cercado de áreas verdes e tranquilidade",
    image: lifestyleNatureImage,
    icon: Trees,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Pertinho do metrô",
    description: "Mobilidade urbana ao seu alcance",
    image: lifestyleMetroImage,
    icon: Train,
    color: "from-blue-500 to-indigo-600",
  },
];

const LifestyleSection = () => {
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
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Encontre o imóvel ideal para seu estilo de vida
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Busque por características que realmente importam para você
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifestyleCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {category.description}
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-fit opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Buscar imóveis
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
