import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, User, Plus, Menu, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/iamgens01/imagens02/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Se estiver no topo, mostrar header com background sólido
      if (currentScrollY < 10) {
        setIsScrolled(false);
        setIsTransparent(false);
        setIsVisible(true);
      } else {
        setIsScrolled(true);
        // Se rolar para baixo, esconder header
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          // Se rolar para cima, mostrar header
          setIsVisible(true);
        }
        
        // Se rolar para baixo, tornar transparente
        if (currentScrollY > 50) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? "bg-transparent backdrop-blur-none shadow-none" 
          : isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-md" 
            : "bg-background"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logoImage}
              alt="Douglas Azevedo Corretor Imobiliário"
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#comprar" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">
              Comprar
            </a>
            <a href="#alugar" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">
              Alugar
            </a>
            <a href="#lancamentos" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">
              Lançamentos
            </a>
            <a href="#anunciar" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">
              Anunciar
            </a>
            <a href="#ajuda" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">
              Ajuda
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Button 
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 active:opacity-80 text-sm xl:text-base px-4 xl:px-6 py-2 touch-manipulation"
              onClick={() => window.open("https://wa.me/5521978893967", "_blank")}
            >
              <MessageSquare className="w-3.5 h-3.5 xl:w-4 xl:h-4 mr-1.5 xl:mr-2" />
              Fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-10 h-10 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`lg:hidden border-t border-border transition-all duration-300 ${
            isTransparent ? "bg-background/95 backdrop-blur-md" : "bg-background"
          }`}
        >
          <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4">
            <a 
              href="#comprar" 
              className="text-base sm:text-lg text-foreground hover:text-primary active:text-primary/80 transition-colors font-medium py-2 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Comprar
            </a>
            <a 
              href="#alugar" 
              className="text-base sm:text-lg text-foreground hover:text-primary active:text-primary/80 transition-colors font-medium py-2 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Alugar
            </a>
            <a 
              href="#lancamentos" 
              className="text-base sm:text-lg text-foreground hover:text-primary active:text-primary/80 transition-colors font-medium py-2 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Lançamentos
            </a>
            <a 
              href="#anunciar" 
              className="text-base sm:text-lg text-foreground hover:text-primary active:text-primary/80 transition-colors font-medium py-2 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Anunciar
            </a>
            <a 
              href="#ajuda" 
              className="text-base sm:text-lg text-foreground hover:text-primary active:text-primary/80 transition-colors font-medium py-2 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ajuda
            </a>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border">
              <Button 
                variant="outline" 
                className="flex-1 text-sm sm:text-base py-2.5 sm:py-2 touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 active:opacity-80 text-sm sm:text-base py-2.5 sm:py-2 touch-manipulation"
                onClick={() => {
                  window.open("https://wa.me/5521978893967", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Fale conosco
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
