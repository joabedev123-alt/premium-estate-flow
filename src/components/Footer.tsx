import { Home, Facebook, Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react";
import logoImage from "@/assets/logo-douglas.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logoImage}
                alt="Douglas Azevedo Corretor Imobiliário"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-background/80 mb-6">
              Douglas Azevedo - Corretor Imobiliário especializado. Encontre o imóvel perfeito para você.
            </p>
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#youtube"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Explorar */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Explorar Imóveis</h3>
            <ul className="space-y-3">
              <li>
                <a href="#comprar" className="text-background/80 hover:text-primary transition-colors">
                  Comprar Imóveis
                </a>
              </li>
              <li>
                <a href="#alugar" className="text-background/80 hover:text-primary transition-colors">
                  Alugar Imóveis
                </a>
              </li>
              <li>
                <a href="#lancamentos" className="text-background/80 hover:text-primary transition-colors">
                  Lançamentos
                </a>
              </li>
              <li>
                <a href="#anunciar" className="text-background/80 hover:text-primary transition-colors">
                  Anunciar Imóvel
                </a>
              </li>
              <li>
                <a href="#avaliar" className="text-background/80 hover:text-primary transition-colors">
                  Avaliar Imóvel
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ajuda */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Ajuda & Suporte</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-background/80 hover:text-primary transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/80 hover:text-primary transition-colors">
                  Entre em Contato
                </a>
              </li>
              <li>
                <a href="#politica" className="text-background/80 hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#termos" className="text-background/80 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#seguranca" className="text-background/80 hover:text-primary transition-colors">
                  Segurança
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Sobre */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Sobre Nós</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#sobre" className="text-background/80 hover:text-primary transition-colors">
                  Sobre Douglas Azevedo
                </a>
              </li>
              <li>
                <a href="#creci" className="text-background/80 hover:text-primary transition-colors">
                  CRECI-RJ 01.086.864
                </a>
              </li>
              <li>
                <a href="#blog" className="text-background/80 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#parceiros" className="text-background/80 hover:text-primary transition-colors">
                  Parcerias
                </a>
              </li>
            </ul>
            <div className="space-y-2 text-background/80 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 4000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@zaphouse.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-background/80 text-sm text-center md:text-left">
              <p className="mb-1">© 2025 Douglas Azevedo - Corretor Imobiliário. Todos os direitos reservados.</p>
              <p className="text-xs">CRECI-RJ 01.086.864</p>
            </div>
            
            <div className="flex gap-4">
              <a href="#app-store" className="text-xs hover:underline text-background/80">
                App Store
              </a>
              <span className="text-background/40">|</span>
              <a href="#google-play" className="text-xs hover:underline text-background/80">
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
