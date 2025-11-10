import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
// Importar todas as imagens da pasta iamgens01
import img1 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.18 (1).jpeg";
import img2 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.18 (2).jpeg";
import img3 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.18.jpeg";
import img4 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.19 (1).jpeg";
import img5 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.19 (2).jpeg";
import img6 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.19.jpeg";
import img7 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.20 (1).jpeg";
import img8 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.20 (2).jpeg";
import img9 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.20.jpeg";
import img10 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.21 (1).jpeg";
import img11 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.21 (2).jpeg";
import img12 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.21 (3).jpeg";
import img13 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.21.jpeg";
import img14 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.22 (1).jpeg";
import img15 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.22.jpeg";
import img16 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.23 (1).jpeg";
import img17 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.23 (2).jpeg";
import img18 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.23 (3).jpeg";
import img19 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.23.jpeg";
import img20 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.24 (1).jpeg";
import img21 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.24 (2).jpeg";
import img22 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.24.jpeg";
import img23 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.25 (1).jpeg";
import img24 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.25 (2).jpeg";
import img25 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.25 (4).jpeg";
import img26 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.25.jpeg";
import img27 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.26 (1).jpeg";
import img28 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.26 (2).jpeg";
import img29 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.27 (1).jpeg";
import img30 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.27 (2).jpeg";
import img31 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.27.jpeg";
import img32 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.28 (1).jpeg";
import img33 from "@/assets/iamgens01/WhatsApp Image 2025-11-07 at 12.35.28.jpeg";
// Importar todas as imagens da pasta imagens02
import img02_1 from "@/assets/iamgens01/imagens02/WhatsApp Image 2025-11-07 at 12.37.34 (1).jpeg";
import img02_2 from "@/assets/iamgens01/imagens02/WhatsApp Image 2025-11-07 at 12.37.34.jpeg";
import img02_3 from "@/assets/iamgens01/imagens02/WhatsApp Image 2025-11-07 at 12.37.35 (1).jpeg";
import img02_4 from "@/assets/iamgens01/imagens02/WhatsApp Image 2025-11-07 at 12.37.35 (2).jpeg";
import img02_5 from "@/assets/iamgens01/imagens02/WhatsApp Image 2025-11-07 at 12.37.35.jpeg";
import img02_6 from "@/assets/iamgens01/imagens02/WhatsApp Image 2025-11-07 at 12.37.36 (1).jpeg";
import img02_7 from "@/assets/iamgens01/imagens02/WhatsApp Image 2025-11-07 at 12.37.36 (2).jpeg";
import img02_8 from "@/assets/iamgens01/imagens02/WhatsApp Image 2025-11-07 at 12.37.36 (3).jpeg";
import img02_9 from "@/assets/iamgens01/imagens02/WhatsApp Image 2025-11-07 at 12.37.36.jpeg";

// Importar todas as imagens da pasta imagem02 (para Casa Contemporânea)
import casa_img1 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.22.jpeg";
import casa_img2 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.23 (1).jpeg";
import casa_img3 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.23 (2).jpeg";
import casa_img4 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.23 (3).jpeg";
import casa_img5 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.23.jpeg";
import casa_img6 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.24 (1).jpeg";
import casa_img7 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.24 (2).jpeg";
import casa_img8 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.24 (3).jpeg";
import casa_img9 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.24 (4).jpeg";
import casa_img10 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.24 (5).jpeg";
import casa_img11 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.24.jpeg";
import casa_img12 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.25 (1).jpeg";
import casa_img13 from "@/assets/iamgens01/imagem02/WhatsApp Image 2025-11-07 at 22.20.25.jpeg";

// Importar todas as imagens da pasta imagen03 (para Cobertura Luxuosa)
import cobertura_img1 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.52 (1).jpeg";
import cobertura_img2 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.52 (2).jpeg";
import cobertura_img3 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.52.jpeg";
import cobertura_img4 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.53 (1).jpeg";
import cobertura_img5 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.53 (2).jpeg";
import cobertura_img6 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.53 (3).jpeg";
import cobertura_img7 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.53.jpeg";
import cobertura_img8 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.54 (1).jpeg";
import cobertura_img9 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.54 (2).jpeg";
import cobertura_img10 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.54 (3).jpeg";
import cobertura_img11 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.54 (4).jpeg";
import cobertura_img12 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.54.jpeg";
import cobertura_img13 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.55 (1).jpeg";
import cobertura_img14 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.55 (2).jpeg";
import cobertura_img15 from "@/assets/iamgens01/imagen03/WhatsApp Image 2025-11-07 at 23.31.55.jpeg";

// Importar todas as imagens da pasta imagen03/imagen04 (para Apartamento Compacto)
import apartamento_img1 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.57 (1).jpeg";
import apartamento_img2 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.57.jpeg";
import apartamento_img3 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.58 (1).jpeg";
import apartamento_img4 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.58 (2).jpeg";
import apartamento_img5 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.58 (3).jpeg";
import apartamento_img6 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.58 (4).jpeg";
import apartamento_img7 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.58.jpeg";
import apartamento_img8 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.59 (1).jpeg";
import apartamento_img9 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.59 (2).jpeg";
import apartamento_img10 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.59 (3).jpeg";
import apartamento_img11 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.59 (4).jpeg";
import apartamento_img12 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.41.59.jpeg";
import apartamento_img13 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.00 (1).jpeg";
import apartamento_img14 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.00 (2).jpeg";
import apartamento_img15 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.00 (3).jpeg";
import apartamento_img16 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.00 (4).jpeg";
import apartamento_img17 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.00 (5).jpeg";
import apartamento_img18 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.00.jpeg";
import apartamento_img19 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.01 (1).jpeg";
import apartamento_img20 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.01 (2).jpeg";
import apartamento_img21 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.01 (3).jpeg";
import apartamento_img22 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.01 (4).jpeg";
import apartamento_img23 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.01.jpeg";
import apartamento_img24 from "@/assets/iamgens01/imagen03/imagen04/WhatsApp Image 2025-11-07 at 23.42.02.jpeg";

// Importar todas as imagens da pasta imagen08 (para Apartamento Moderno com Vista Panorâmica - Preço Reduzido)
import apt_moderno_img1 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.23 (1).jpeg";
import apt_moderno_img2 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.23 (2).jpeg";
import apt_moderno_img3 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.23.jpeg";
import apt_moderno_img4 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.24 (1).jpeg";
import apt_moderno_img5 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.24 (2).jpeg";
import apt_moderno_img6 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.24 (3).jpeg";
import apt_moderno_img7 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.24 (4).jpeg";
import apt_moderno_img8 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.24.jpeg";
import apt_moderno_img9 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.25 (1).jpeg";
import apt_moderno_img10 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.25 (2).jpeg";
import apt_moderno_img11 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.25.jpeg";
import apt_moderno_img12 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.26.jpeg";
import apt_moderno_img13 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.27 (1).jpeg";
import apt_moderno_img14 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.27.jpeg";
import apt_moderno_img15 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.28 (1).jpeg";
import apt_moderno_img16 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.28 (2).jpeg";
import apt_moderno_img17 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.28 (3).jpeg";
import apt_moderno_img18 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.28 (4).jpeg";
import apt_moderno_img19 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.28 (5).jpeg";
import apt_moderno_img20 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.28.jpeg";
import apt_moderno_img21 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.29 (1).jpeg";
import apt_moderno_img22 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.29 (2).jpeg";
import apt_moderno_img23 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.29 (3).jpeg";
import apt_moderno_img24 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.29 (4).jpeg";
import apt_moderno_img25 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.29.jpeg";
import apt_moderno_img26 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.30 (1).jpeg";
import apt_moderno_img27 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.30 (2).jpeg";
import apt_moderno_img28 from "@/assets/iamgens01/imagen03/imagen04/imagen05/images06/imagen07/imagen08/WhatsApp Image 2025-11-08 at 00.02.30.jpeg";

const apartmentImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33
];

const houseImages = [
  casa_img1, casa_img2, casa_img3, casa_img4, casa_img5, casa_img6, 
  casa_img7, casa_img8, casa_img9, casa_img10, casa_img11, casa_img12, casa_img13
];

const coberturaImages = [
  cobertura_img1, cobertura_img2, cobertura_img3, cobertura_img4, cobertura_img5,
  cobertura_img6, cobertura_img7, cobertura_img8, cobertura_img9, cobertura_img10,
  cobertura_img11, cobertura_img12, cobertura_img13, cobertura_img14, cobertura_img15
];

const apartamentoImages = [
  apartamento_img1, apartamento_img2, apartamento_img3, apartamento_img4, apartamento_img5,
  apartamento_img6, apartamento_img7, apartamento_img8, apartamento_img9, apartamento_img10,
  apartamento_img11, apartamento_img12, apartamento_img13, apartamento_img14, apartamento_img15,
  apartamento_img16, apartamento_img17, apartamento_img18, apartamento_img19, apartamento_img20,
  apartamento_img21, apartamento_img22, apartamento_img23, apartamento_img24
];

const aptModernoImages = [
  apt_moderno_img1, apt_moderno_img2, apt_moderno_img3, apt_moderno_img4, apt_moderno_img5,
  apt_moderno_img6, apt_moderno_img7, apt_moderno_img8, apt_moderno_img9, apt_moderno_img10,
  apt_moderno_img11, apt_moderno_img12, apt_moderno_img13, apt_moderno_img14, apt_moderno_img15,
  apt_moderno_img16, apt_moderno_img17, apt_moderno_img18, apt_moderno_img19, apt_moderno_img20,
  apt_moderno_img21, apt_moderno_img22, apt_moderno_img23, apt_moderno_img24, apt_moderno_img25,
  apt_moderno_img26, apt_moderno_img27, apt_moderno_img28
];

interface PropertyGridProps {
  title: string;
  subtitle?: string;
  showPriceReduction?: boolean;
}

// Tipo para as propriedades
type Property = {
    image: string;
    images?: string[];
    price: string;
    originalPrice?: string;
    title: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    type: string;
    badge?: string;
    badgeVariant?: "default" | "destructive" | "outline" | "secondary";
    detailedInfo?: {
      description: string;
      builtArea?: number;
      totalArea?: number;
      investmentValue?: string;
      iptu?: string;
      units?: Array<{
        name: string;
        features: string[];
      }>;
      externalArea?: string[];
      highlights?: string[];
      conclusion?: string;
    };
};

const PropertyGrid = ({ title, subtitle, showPriceReduction = false }: PropertyGridProps) => {
  // Lista de propriedades para "Imóveis perto de você"
  const nearbyProperties: Property[] = [
    {
      image: property1,
      images: apartmentImages,
      price: "R$ 550.000,00",
      originalPrice: undefined,
      title: "Apartamento Moderno com Vista Panorâmica",
      location: "Guapimirim/RJ",
      bedrooms: 2,
      bathrooms: 3,
      area: 180,
      type: "Apartamento",
      badge: "Novo",
      badgeVariant: "default",
      detailedInfo: {
        description: "Imóvel com duas casas independentes, ideal para quem deseja morar e ainda obter renda com locação. Localizado em um bairro com crescente valorização, próximo ao centro da cidade e de todo o comércio local.",
        builtArea: 180,
        totalArea: 360,
        investmentValue: "R$ 550.000,00",
        iptu: "R$ 1.300,00",
        units: [
          {
            name: "1ª Casa (linear):",
            features: [
              "Sala ampla",
              "2 quartos (sendo 1 suíte)",
              "copa",
              "cozinha espaçosa",
              "banheiro social",
              "área de serviço",
              "varanda"
            ]
          },
          {
            name: "2ª Casa (acesso por escada):",
            features: [
              "Varanda ampla",
              "sala",
              "2 quartos (sendo 1 suíte)",
              "cozinha espaçosa",
              "banheiro social",
              "área de serviço"
            ]
          }
        ],
        externalArea: [
          "Garagem coberta para até 2 carros",
          "pequeno jardim",
          "amplo terreno nos fundos com diversas possibilidades de uso"
        ],
        highlights: [
          "Terreno totalmente plano",
          "Construção com materiais de excelente qualidade",
          "Localização estratégica, em bairro com boa infraestrutura e fácil acesso ao centro"
        ],
        conclusion: "Uma excelente escolha para quem busca um imóvel com potencial de retorno financeiro através de locação."
      },
    },
    {
      image: casa_img1,
      images: houseImages,
      price: "A partir de R$ 348.000,00",
      originalPrice: undefined,
      title: "Casa Contemporânea com Imóvel em condomínio residencial !",
      location: "Condomínio Ipê - Cotia - Guapimirim",
      bedrooms: 1,
      bathrooms: 2,
      area: 142,
      type: "Casa",
      badge: "Novo",
      badgeVariant: "default",
      detailedInfo: {
        description: "Condomínio Ipê localizado em Cotia - Guapimirim, a apenas um minuto da praça da Cotia. O condomínio conta com portaria integrada para os moradores, ótima dinâmica e excelente infraestrutura. É uma excelente oportunidade para quem busca um imóvel em condomínio residencial. O imóvel aceita financiamento bancário!",
        units: [
          {
            name: "Casa 1 - Maior Terreno",
            features: [
              "De: R$ 447.000,00",
              "Por: R$ 419.000,00 (Unidade c/ garagem coberta)",
              "Área Construída: 84,85 m²",
              "Área de Terreno: 233,05 m²"
            ]
          },
          {
            name: "Casa 2",
            features: [
              "R$ 419.000,00 (Unidade c/ garagem coberta)",
              "Área Construída: 84,85 m²",
              "Área de Terreno: 195,16 m²"
            ]
          },
          {
            name: "Casa 4 a 10",
            features: [
              "De: R$ 367.000,00",
              "Por: R$ 348.000,00 (Garagem descoberta)",
              "Área Construída: 61,36 m²",
              "Área de Terreno: 142,80 m²"
            ]
          }
        ],
        externalArea: [
          "Sala de estar",
          "Cozinha",
          "Varanda",
          "Garagem",
          "Área de serviço",
          "Banheiro social",
          "Um quarto",
          "Uma suíte"
        ],
        highlights: [
          "Condomínio com portaria integrada",
          "Localizado a um minuto da praça da Cotia",
          "Ótima dinâmica e excelente infraestrutura",
          "Aceita financiamento bancário"
        ],
        conclusion: "É uma excelente oportunidade para quem busca um imóvel em condomínio residencial com todas as comodidades e infraestrutura necessárias. O condomínio está localizado no bairro da cotia, estando a um minuto da praça da cotia."
      },
    },
    {
      image: cobertura_img1,
      images: coberturaImages,
      price: "R$ 695.000,00",
      originalPrice: undefined,
      title: "Sítio com Vista para as Montanhas",
      location: "Parada Modelo - Guapimirim",
      bedrooms: 2,
      bathrooms: 3,
      area: 7000,
      type: "Sítio",
      badge: "Novo",
      badgeVariant: "default",
      detailedInfo: {
        description: "Sítio de 7000 metros quadrados com 450 metros de construção, localizado em ambiente tranquilo com linda vista das montanhas, a menos de dois minutos do centro comercial de Parada Modelo no município de Guapimirim.",
        builtArea: 450,
        totalArea: 7000,
        investmentValue: "R$ 695.000,00",
        units: [
          {
            name: "Casa Principal",
            features: [
              "Dois dormitórios",
              "Sala de estar",
              "Cozinha",
              "Banheiro social",
              "Varanda",
              "Área de serviço"
            ]
          },
          {
            name: "Casa de Caseiro",
            features: [
              "Dois dormitórios",
              "Sala de estar",
              "Cozinha",
              "Banheiro social",
              "Lavanderia"
            ]
          },
          {
            name: "Duas Casas Completas para Visita",
            features: [
              "Dois dormitórios",
              "Sala de estar",
              "Cozinha",
              "Banheiro social",
              "E muito mais"
            ]
          }
        ],
        externalArea: [
          "Lago de peixes",
          "Área gourmet",
          "Dois banheiros externos",
          "Varandão nos fundos",
          "Entrada com pés de coqueiros",
          "Espaço para diversos carros",
          "Árvores frutíferas"
        ],
        highlights: [
          "Ambiente tranquilo com linda vista das montanhas",
          "Localizado a menos de dois minutos do centro comercial de Parada Modelo",
          "7.000 m² de terreno",
          "450 m² de construção",
          "Múltiplas estruturas: casa principal, casa de caseiro e casas para visita"
        ],
        conclusion: "Imóvel em um ambiente tranquilo e com uma linda vista das montanhas, ficando a menos de dois minutos do centro comercial de Parada Modelo no município de Guapimirim. Uma excelente oportunidade para quem busca sossego e contato com a natureza sem abrir mão da comodidade."
      },
    },
    {
      image: apartamento_img1,
      images: apartamentoImages,
      price: "R$ 680.000",
      originalPrice: undefined,
      title: "Elo Sítios - Propriedade com Vista Privilegiada",
      location: "Município tranquilo e acolhedor",
      bedrooms: 5,
      bathrooms: 4,
      area: 5000,
      type: "Sítio",
      badge: "Destaque",
      badgeVariant: "secondary",
      detailedInfo: {
        description: "Elo Sítios composto por 5 mil metros quadrados com 450 metros quadrados de área construída. O imóvel está localizado em um ambiente tranquilo, com lindas cachoeiras próximas, vista privilegiada para as montanhas. Tudo isso em um município tranquilo e muito acolhedor!",
        builtArea: 450,
        totalArea: 5000,
        investmentValue: "R$ 680.000",
        units: [
          {
            name: "Residência Principal",
            features: [
              "Cinco quartos sendo duas suítes",
              "Uma sala de estar",
              "Uma sala de jantar",
              "Sala de leitura",
              "Varanda em L",
              "Cozinha",
              "2 Banheiros sociais",
              "Sacada de varanda"
            ]
          }
        ],
        externalArea: [
          "Área externa",
          "Piscina com design exclusivo",
          "Campo de futebol",
          "Salão de festa",
          "Área gourmet ampla",
          "Banheiro social",
          "Diversas árvores frutíferas",
          "Vista privilegiada"
        ],
        highlights: [
          "5.000 m² de terreno",
          "450 m² de área construída",
          "Vista privilegiada para as montanhas",
          "Ambiente tranquilo com lindas cachoeiras próximas",
          "Município tranquilo e muito acolhedor",
          "Piscina com design exclusivo",
          "Campo de futebol",
          "Salão de festa",
          "Área gourmet ampla"
        ],
        conclusion: "O imóvel está localizado em um ambiente tranquilo, com lindas cachoeiras próximas, vista privilegiada para as montanhas. Tudo isso em um município tranquilo e muito acolhedor! Para mais informações, entre em contato: (21) 97889-3967 ou (21) 98208-1446"
      },
    },
  ];

  // Lista de propriedades para "Imóveis com preço reduzido"
  const reducedPriceProperties: Property[] = [
    {
      image: apt_moderno_img1,
      images: aptModernoImages,
      price: "R$ 200.000,00",
      originalPrice: "R$ 920.000",
      title: "Apartamento Moderno com Vista Panorâmica",
      location: "Guapimirim/RJ",
      bedrooms: 2,
      bathrooms: 2,
      area: 92,
      type: "Apartamento",
      badge: "Preço Reduzido",
      badgeVariant: "destructive",
      detailedInfo: {
        description: "Imóvel localizado há menos de 25 minutos do município de Teresópolis e a 55 minutos da capital Rio de Janeiro. Uma excelente oportunidade para quem busca qualidade de vida próximo à natureza, com fácil acesso aos principais centros urbanos.",
        builtArea: 92,
        totalArea: 420,
        investmentValue: "R$ 200.000,00",
        units: [
          {
            name: "Residência",
            features: [
              "Dois dormitórios sendo uma suíte",
              "Sala de estar",
              "Cozinha americana",
              "Banheiro social",
              "Varanda",
              "Lavanderia"
            ]
          }
        ],
        externalArea: [
          "Garagem coberta para dois carros",
          "Varanda em L",
          "Quintal com árvores frutíferas",
          "Quintal amplo com árvores frutíferas",
          "Canil"
        ],
        highlights: [
          "92 m² de área construída",
          "420 m² de terreno",
          "Valor: R$ 200.000,00",
          "Localizado há menos de 25 minutos do município de Teresópolis",
          "A 55 minutos da capital Rio de Janeiro",
          "Garagem coberta para dois carros",
          "Varanda em L",
          "Quintal amplo com árvores frutíferas",
          "Canil"
        ],
        conclusion: "Tudo isso há menos de 25 minutos do município de Teresópolis e a 55 minutos da capital Rio de Janeiro! Uma excelente oportunidade para quem busca qualidade de vida, conforto e praticidade em um ambiente tranquilo."
      },
    },
    {
      image: apartamento_img1,
      images: apartamentoImages,
      price: "R$ 680.000",
      originalPrice: "R$ 750.000",
      title: "Elo Sítios - Propriedade com Vista Privilegiada",
      location: "Município tranquilo e acolhedor",
      bedrooms: 5,
      bathrooms: 4,
      area: 5000,
      type: "Sítio",
      badge: "Preço Reduzido",
      badgeVariant: "destructive",
      detailedInfo: {
        description: "Elo Sítios composto por 5 mil metros quadrados com 450 metros quadrados de área construída. O imóvel está localizado em um ambiente tranquilo, com lindas cachoeiras próximas, vista privilegiada para as montanhas. Tudo isso em um município tranquilo e muito acolhedor!",
        builtArea: 450,
        totalArea: 5000,
        investmentValue: "R$ 680.000",
        units: [
          {
            name: "Residência Principal",
            features: [
              "Cinco quartos sendo duas suítes",
              "Uma sala de estar",
              "Uma sala de jantar",
              "Sala de leitura",
              "Varanda em L",
              "Cozinha",
              "2 Banheiros sociais",
              "Sacada de varanda"
            ]
          }
        ],
        externalArea: [
          "Área externa",
          "Piscina com design exclusivo",
          "Campo de futebol",
          "Salão de festa",
          "Área gourmet ampla",
          "Banheiro social",
          "Diversas árvores frutíferas",
          "Vista privilegiada"
        ],
        highlights: [
          "5.000 m² de terreno",
          "450 m² de área construída",
          "Vista privilegiada para as montanhas",
          "Ambiente tranquilo com lindas cachoeiras próximas",
          "Município tranquilo e muito acolhedor",
          "Piscina com design exclusivo",
          "Campo de futebol",
          "Salão de festa",
          "Área gourmet ampla"
        ],
        conclusion: "O imóvel está localizado em um ambiente tranquilo, com lindas cachoeiras próximas, vista privilegiada para as montanhas. Tudo isso em um município tranquilo e muito acolhedor! Para mais informações, entre em contato: (21) 97889-3967 ou (21) 98208-1446"
      },
    },
  ];

  // Escolhe qual lista usar baseado na prop showPriceReduction
  const properties = showPriceReduction ? reducedPriceProperties : nearbyProperties;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mb-3 sm:mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
