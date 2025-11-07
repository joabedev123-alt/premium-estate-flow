import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, User, Plus, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Home className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ZapHouse
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#comprar" className="text-foreground hover:text-primary transition-colors font-medium">
              Comprar
            </a>
            <a href="#alugar" className="text-foreground hover:text-primary transition-colors font-medium">
              Alugar
            </a>
            <a href="#lancamentos" className="text-foreground hover:text-primary transition-colors font-medium">
              Lançamentos
            </a>
            <a href="#anunciar" className="text-foreground hover:text-primary transition-colors font-medium">
              Anunciar
            </a>
            <a href="#ajuda" className="text-foreground hover:text-primary transition-colors font-medium">
              Ajuda
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Criar anúncio
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-border bg-background"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a href="#comprar" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Comprar
            </a>
            <a href="#alugar" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Alugar
            </a>
            <a href="#lancamentos" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Lançamentos
            </a>
            <a href="#anunciar" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Anunciar
            </a>
            <a href="#ajuda" className="text-foreground hover:text-primary transition-colors font-medium py-2">
              Ajuda
            </a>
            <div className="flex gap-4 pt-4 border-t border-border">
              <Button variant="outline" className="flex-1">
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                Anunciar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
