import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import launch1 from "@/assets/launch-1.jpg";

const launches = [
  {
    image: launch1,
    name: "Residencial Horizonte Verde",
    location: "Morumbi, São Paulo - SP",
    status: "Em construção",
    units: "2 e 3 dormitórios",
    delivery: "Dezembro 2025",
  },
  {
    image: launch1,
    name: "Condomínio Parque das Águas",
    location: "Campo Belo, São Paulo - SP",
    status: "Pré-lançamento",
    units: "3 e 4 dormitórios",
    delivery: "Março 2026",
  },
  {
    image: launch1,
    name: "Torre Sunset Premium",
    location: "Vila Olímpia, São Paulo - SP",
    status: "Lançamento",
    units: "Studios e 2 dorms",
    delivery: "Junho 2025",
  },
];

const LaunchCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % launches.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + launches.length) % launches.length);
  };

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
            Lançamentos Próximos a Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os empreendimentos mais recentes da sua região
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
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
              <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
                {/* Image */}
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={launches[currentIndex].image}
                    alt={launches[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    {launches[currentIndex].status}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-heading font-bold mb-3">
                      {launches[currentIndex].name}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-6">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">{launches[currentIndex].location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-1">Unidades</p>
                      <p className="font-semibold">{launches[currentIndex].units}</p>
                    </div>
                    <div className="bg-muted rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-1">Entrega</p>
                      <p className="font-semibold">{launches[currentIndex].delivery}</p>
                    </div>
                  </div>

                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {launches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchCarousel;
