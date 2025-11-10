import { motion } from "framer-motion";
import heroVideo from "@/assets/iamgens01/WhatsApp Video 2025-11-07 at 22.10.14.mp4";
import logoImage from "@/assets/iamgens01/imagens02/logo.png";
import heroBackgroundImage from "@/assets/villa-de-luxo-com-design-arquitetonico-moderno.jpg";

const HeroSection = () => {

  return (
    <section className="relative pt-16 sm:pt-20 overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/8 to-background/40" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10 py-4 sm:py-6 lg:py-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-center lg:items-center justify-center">
          {/* Left Content - Centralized */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center justify-center space-y-3 sm:space-y-4 flex-1 w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight flex flex-col items-center gap-2 sm:gap-3 px-2"
            >
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                src={logoImage}
                alt="Douglas Azevedo Logo"
                className="h-16 sm:h-20 lg:h-24 xl:h-36 w-auto object-contain"
              />
              Douglas Azevedo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-medium px-2"
              style={{ color: '#8B0000' }}
            >
              Agente Imobiliário
            </motion.p>
            
            {/* Mobile Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:hidden bg-background/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-border mt-2"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-base font-bold text-primary-foreground">+</span>
                </div>
                <div className="text-center">
                  <p className="text-base font-bold font-heading">250</p>
                  <p className="text-xs text-muted-foreground">Imóveis disponíveis</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
            style={{ flexShrink: 0 }}
          >
            <div className="relative" style={{ display: 'inline-block', lineHeight: 0 }}>
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-xl"
                style={{ 
                  display: 'block',
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '500px',
                  width: 'auto',
                  margin: 0,
                  padding: 0,
                  verticalAlign: 'top'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
              
              {/* Floating Stats Card - Top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-background/95 backdrop-blur-md rounded-xl p-3 lg:p-4 shadow-lg border border-border z-10"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-lg lg:text-xl font-bold text-primary-foreground">+</span>
                  </div>
                  <div className="text-center">
                    <p className="text-lg lg:text-xl font-bold font-heading">250</p>
                    <p className="text-xs text-muted-foreground">Imóveis disponíveis</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
