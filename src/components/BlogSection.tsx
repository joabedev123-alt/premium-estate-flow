import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";

const blogPosts = [
  {
    image: property1,
    title: "Como escolher o imóvel perfeito para sua família",
    excerpt: "Descubra os principais pontos que você deve considerar antes de comprar ou alugar um imóvel.",
    author: "Equipe ZapHouse",
    date: "15 Jan 2025",
  },
  {
    image: property2,
    title: "Tendências do mercado imobiliário em 2025",
    excerpt: "Conheça as principais tendências que vão movimentar o mercado imobiliário este ano.",
    author: "Equipe ZapHouse",
    date: "10 Jan 2025",
  },
  {
    image: property1,
    title: "Dicas para valorizar seu imóvel",
    excerpt: "Pequenas mudanças que podem fazer grande diferença no valor do seu imóvel.",
    author: "Equipe ZapHouse",
    date: "5 Jan 2025",
  },
  {
    image: property2,
    title: "Guia completo de financiamento imobiliário",
    excerpt: "Tudo que você precisa saber sobre financiamento imobiliário em um só lugar.",
    author: "Equipe ZapHouse",
    date: "28 Dez 2024",
  },
];

const BlogSection = () => {
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
            Blog do Zap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dicas, novidades e informações sobre o mercado imobiliário
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all border border-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-heading font-bold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
