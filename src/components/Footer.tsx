import { Home, Facebook, Instagram, Mail, Phone } from "lucide-react";
import logoImage from "@/assets/iamgens01/imagens02/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-3 sm:px-4 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-5 lg:mb-6">
              <img
                src={logoImage}
                alt="Douglas Azevedo Corretor Imobiliário"
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-sm sm:text-base text-background/80 mb-4 sm:mb-5 lg:mb-6">
              Douglas Azevedo - Corretor Imobiliário especializado. Encontre o imóvel perfeito para você.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/share/1BkgXSS8aB/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 hover:bg-primary active:bg-primary/80 flex items-center justify-center transition-colors touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/azevedo.imoveis?igsh=MWVqazk0end6Z2d5aA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 hover:bg-primary active:bg-primary/80 flex items-center justify-center transition-colors touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Explorar */}
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-5 lg:mb-6">Explorar Imóveis</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#comprar" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Comprar Imóveis
                </a>
              </li>
              <li>
                <a href="#alugar" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Alugar Imóveis
                </a>
              </li>
              <li>
                <a href="#lancamentos" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Lançamentos
                </a>
              </li>
              <li>
                <a href="#anunciar" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Anunciar Imóvel
                </a>
              </li>
              <li>
                <a href="#avaliar" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Avaliar Imóvel
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ajuda */}
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-5 lg:mb-6">Ajuda & Suporte</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#faq" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Entre em Contato
                </a>
              </li>
              <li>
                <a href="#politica" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#termos" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#seguranca" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Segurança
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Sobre */}
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-5 lg:mb-6">Sobre Nós</h3>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 lg:mb-6">
              <li>
                <a href="#sobre" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Sobre Douglas Azevedo
                </a>
              </li>
              <li>
                <a href="#creci" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  CRECI-RJ 01.086.864
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Blog
                </a>
              </li>
              <li>
                <a href="#parceiros" className="text-sm sm:text-base text-background/80 hover:text-primary active:text-primary/80 transition-colors touch-manipulation block py-1">
                  Parcerias
                </a>
              </li>
            </ul>
            <div className="space-y-2 text-background/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">21978893967</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">21982081446</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">Dcoretor@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-background/80 text-xs sm:text-sm text-center md:text-left">
              <p className="mb-1">© 2025 Douglas Azevedo - Corretor Imobiliário. Todos os direitos reservados.</p>
              <p className="text-xs">CRECI-RJ 01.086.864</p>
            </div>
            
            <div className="flex gap-3 sm:gap-4">
              <a href="#app-store" className="text-xs hover:underline text-background/80 active:text-primary/80 touch-manipulation">
                App Store
              </a>
              <span className="text-background/40">|</span>
              <a href="#google-play" className="text-xs hover:underline text-background/80 active:text-primary/80 touch-manipulation">
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
