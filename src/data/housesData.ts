// Dados das casas à venda
export interface HouseData {
  id: string;
  image: string;
  images: string[];
  price: string;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  description?: string;
  builtArea?: number;
  totalArea?: number;
  investmentValue?: string;
  iptu?: string;
}

// Importar imagens da casa 1
import casa1_img1 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.18 (1).jpeg";
import casa1_img2 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.18.jpeg";
import casa1_img3 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.19 (1).jpeg";
import casa1_img4 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.19 (2).jpeg";
import casa1_img5 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.19.jpeg";
import casa1_img6 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.20.jpeg";
import casa1_img7 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.21 (1).jpeg";
import casa1_img8 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.21 (2).jpeg";
import casa1_img9 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.21 (3).jpeg";
import casa1_img10 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.21.jpeg";
import casa1_img11 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.22 (1).jpeg";
import casa1_img12 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.22.jpeg";
import casa1_img13 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.23 (1).jpeg";
import casa1_img14 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.23 (2).jpeg";
import casa1_img15 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.23 (3).jpeg";
import casa1_img16 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.23.jpeg";
import casa1_img17 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.24 (1).jpeg";
import casa1_img18 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.24.jpeg";
import casa1_img19 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.25 (1).jpeg";
import casa1_img20 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.25 (2).jpeg";
import casa1_img21 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.25 (3).jpeg";
import casa1_img22 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.25.jpeg";
import casa1_img23 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.26.jpeg";
import casa1_img24 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.27 (1).jpeg";
import casa1_img25 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.27.jpeg";
import casa1_img26 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.28 (1).jpeg";
import casa1_img27 from "@/assets/iamgens01/casas/casa 1/WhatsApp Image 2025-11-07 at 12.35.28.jpeg";

const casa1Images = [
  casa1_img1, casa1_img2, casa1_img3, casa1_img4, casa1_img5, casa1_img6, 
  casa1_img7, casa1_img8, casa1_img9, casa1_img10, casa1_img11, casa1_img12, casa1_img13,
  casa1_img14, casa1_img15, casa1_img16, casa1_img17, casa1_img18, casa1_img19, casa1_img20,
  casa1_img21, casa1_img22, casa1_img23, casa1_img24, casa1_img25, casa1_img26, casa1_img27
];

// Importar imagens da casa 2
import casa2_img1 from "@/assets/iamgens01/casas/casa 1/casas/casa 2/WhatsApp Image 2025-11-07 at 12.37.34.jpeg";
import casa2_img2 from "@/assets/iamgens01/casas/casa 1/casas/casa 2/WhatsApp Image 2025-11-07 at 12.37.35.jpeg";
import casa2_img3 from "@/assets/iamgens01/casas/casa 1/casas/casa 2/WhatsApp Image 2025-11-07 at 12.37.35 (1).jpeg";
import casa2_img4 from "@/assets/iamgens01/casas/casa 1/casas/casa 2/WhatsApp Image 2025-11-07 at 12.37.35 (2).jpeg";
import casa2_img5 from "@/assets/iamgens01/casas/casa 1/casas/casa 2/WhatsApp Image 2025-11-07 at 12.37.36.jpeg";
import casa2_img6 from "@/assets/iamgens01/casas/casa 1/casas/casa 2/WhatsApp Image 2025-11-07 at 12.37.36 (1).jpeg";
import casa2_img7 from "@/assets/iamgens01/casas/casa 1/casas/casa 2/WhatsApp Image 2025-11-07 at 12.37.36 (2).jpeg";
import casa2_img8 from "@/assets/iamgens01/casas/casa 1/casas/casa 2/WhatsApp Image 2025-11-07 at 12.37.36 (3).jpeg";

const casa2Images = [
  casa2_img2, casa2_img3, casa2_img4, casa2_img5, casa2_img6, casa2_img7, casa2_img8
];

// Importar imagens da casa 4
import casa4_img1 from "@/assets/iamgens01/casa4/casa 4/WhatsApp Image 2025-11-07 at 22.20.22.jpeg";
import casa4_img2 from "@/assets/iamgens01/casa4/casa 4/WhatsApp Image 2025-11-07 at 22.20.23.jpeg";
import casa4_img3 from "@/assets/iamgens01/casa4/casa 4/WhatsApp Image 2025-11-07 at 22.20.23 (1).jpeg";
import casa4_img4 from "@/assets/iamgens01/casa4/casa 4/WhatsApp Image 2025-11-07 at 22.20.23 (2).jpeg";
import casa4_img5 from "@/assets/iamgens01/casa4/casa 4/WhatsApp Image 2025-11-07 at 22.20.24.jpeg";
import casa4_img6 from "@/assets/iamgens01/casa4/casa 4/WhatsApp Image 2025-11-07 at 22.20.24 (1).jpeg";
import casa4_img7 from "@/assets/iamgens01/casa4/casa 4/WhatsApp Image 2025-11-07 at 22.20.24 (2).jpeg";
import casa4_img8 from "@/assets/iamgens01/casa4/casa 4/WhatsApp Image 2025-11-07 at 22.20.25.jpeg";
import casa4_img9 from "@/assets/iamgens01/casa4/casa 4/WhatsApp Image 2025-11-07 at 22.20.25 (1).jpeg";

const casa4Images = [
  casa4_img2, casa4_img3, casa4_img4, casa4_img5, casa4_img6, casa4_img7, casa4_img8, casa4_img9
];

// Importar imagens da casa 5
import casa5_img1 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.47.jpeg";
import casa5_img2 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.47 (1).jpeg";
import casa5_img3 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.52.jpeg";
import casa5_img4 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.52 (1).jpeg";
import casa5_img5 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.52 (2).jpeg";
import casa5_img6 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.52 (3).jpeg";
import casa5_img7 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.53.jpeg";
import casa5_img8 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.53 (1).jpeg";
import casa5_img9 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.53 (2).jpeg";
import casa5_img10 from "@/assets/iamgens01/casa5/casa 5/WhatsApp Image 2025-11-07 at 23.14.53 (3).jpeg";

const casa5Images = [
  casa5_img2, casa5_img3, casa5_img4, casa5_img5, casa5_img6, casa5_img7, casa5_img8, casa5_img9, casa5_img10
];

// Importar imagens da casa 6
import casa6_img1 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.52.jpeg";
import casa6_img2 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.52 (1).jpeg";
import casa6_img3 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.52 (2).jpeg";
import casa6_img4 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.53.jpeg";
import casa6_img5 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.53 (1).jpeg";
import casa6_img6 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.53 (2).jpeg";
import casa6_img7 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.53 (3).jpeg";
import casa6_img8 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.53 (4).jpeg";
import casa6_img9 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.54.jpeg";
import casa6_img10 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.54 (1).jpeg";
import casa6_img11 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.54 (2).jpeg";
import casa6_img12 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.54 (3).jpeg";
import casa6_img13 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.54 (4).jpeg";
import casa6_img14 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.55.jpeg";
import casa6_img15 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.55 (1).jpeg";
import casa6_img16 from "@/assets/iamgens01/casa6/casa 6/WhatsApp Image 2025-11-07 at 23.31.55 (2).jpeg";

const casa6Images = [
  casa6_img2, casa6_img3, casa6_img4, casa6_img5, casa6_img6, casa6_img7, casa6_img8, casa6_img9,
  casa6_img10, casa6_img11, casa6_img12, casa6_img13, casa6_img14, casa6_img15, casa6_img16
];

// Importar imagens da casa 7
import casa7_img1 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.57.jpeg";
import casa7_img2 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.57 (1).jpeg";
import casa7_img3 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.58.jpeg";
import casa7_img4 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.58 (1).jpeg";
import casa7_img5 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.58 (2).jpeg";
import casa7_img6 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.58 (3).jpeg";
import casa7_img7 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.58 (4).jpeg";
import casa7_img8 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.59.jpeg";
import casa7_img9 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.59 (1).jpeg";
import casa7_img10 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.59 (2).jpeg";
import casa7_img11 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.59 (3).jpeg";
import casa7_img12 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.41.59 (4).jpeg";
import casa7_img13 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.00.jpeg";
import casa7_img14 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.00 (1).jpeg";
import casa7_img15 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.00 (2).jpeg";
import casa7_img16 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.00 (3).jpeg";
import casa7_img17 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.00 (4).jpeg";
import casa7_img18 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.00 (5).jpeg";
import casa7_img19 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.01.jpeg";
import casa7_img20 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.01 (1).jpeg";
import casa7_img21 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.01 (2).jpeg";
import casa7_img22 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.01 (3).jpeg";
import casa7_img23 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.01 (4).jpeg";
import casa7_img24 from "@/assets/iamgens01/casa7/casa 7/WhatsApp Image 2025-11-07 at 23.42.02.jpeg";

const casa7Images = [
  casa7_img2, casa7_img3, casa7_img4, casa7_img5, casa7_img6, casa7_img7, casa7_img8, casa7_img9,
  casa7_img10, casa7_img11, casa7_img12, casa7_img13, casa7_img14, casa7_img15, casa7_img16,
  casa7_img17, casa7_img18, casa7_img19, casa7_img20, casa7_img21, casa7_img22, casa7_img23, casa7_img24
];

// Importar imagens da casa 8
import casa8_img1 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.49.jpeg";
import casa8_img2 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.49 (1).jpeg";
import casa8_img3 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.49 (2).jpeg";
import casa8_img4 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.49 (3).jpeg";
import casa8_img5 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.50.jpeg";
import casa8_img6 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.50 (1).jpeg";
import casa8_img7 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.50 (2).jpeg";
import casa8_img8 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.50 (3).jpeg";
import casa8_img9 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.50 (4).jpeg";
import casa8_img10 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.51.jpeg";
import casa8_img11 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.51 (1).jpeg";
import casa8_img12 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.51 (2).jpeg";
import casa8_img13 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.51 (3).jpeg";
import casa8_img14 from "@/assets/iamgens01/casa7/casa 7/casa8/casa 8/WhatsApp Image 2025-11-07 at 23.54.52.jpeg";

const casa8Images = [
  casa8_img2, casa8_img3, casa8_img4, casa8_img5, casa8_img6, casa8_img7, casa8_img8,
  casa8_img9, casa8_img10, casa8_img11, casa8_img12, casa8_img13, casa8_img14
];

// Importar imagens da casa 9
import casa9_img1 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.23.jpeg";
import casa9_img2 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.23 (1).jpeg";
import casa9_img3 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.23 (2).jpeg";
import casa9_img4 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.24.jpeg";
import casa9_img5 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.24 (1).jpeg";
import casa9_img6 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.24 (2).jpeg";
import casa9_img7 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.24 (3).jpeg";
import casa9_img8 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.24 (4).jpeg";
import casa9_img9 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.25.jpeg";
import casa9_img10 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.25 (1).jpeg";
import casa9_img11 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.25 (2).jpeg";
import casa9_img12 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.25 (3).jpeg";
import casa9_img13 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.26.jpeg";
import casa9_img14 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.26 (1).jpeg";
import casa9_img15 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.26 (2).jpeg";
import casa9_img16 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.26 (3).jpeg";
import casa9_img17 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.27.jpeg";
import casa9_img18 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.27 (1).jpeg";
import casa9_img19 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.27 (2).jpeg";
import casa9_img20 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.27 (3).jpeg";
import casa9_img21 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28.jpeg";
import casa9_img22 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28 (1).jpeg";
import casa9_img23 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28 (2).jpeg";
import casa9_img24 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28 (3).jpeg";
import casa9_img25 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28 (4).jpeg";
import casa9_img26 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28 (5).jpeg";
import casa9_img27 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28 (6).jpeg";
import casa9_img28 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28 (7).jpeg";
import casa9_img29 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28 (8).jpeg";
import casa9_img30 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.28 (9).jpeg";
import casa9_img31 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.29.jpeg";
import casa9_img32 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.29 (1).jpeg";
import casa9_img33 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.29 (2).jpeg";
import casa9_img34 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.29 (3).jpeg";
import casa9_img35 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.29 (4).jpeg";
import casa9_img36 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.30.jpeg";
import casa9_img37 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.30 (1).jpeg";
import casa9_img38 from "@/assets/iamgens01/casa9/casa 9/WhatsApp Image 2025-11-08 at 00.02.30 (2).jpeg";

const casa9Images = [
  casa9_img2, casa9_img3, casa9_img4, casa9_img5, casa9_img6, casa9_img7, casa9_img8, casa9_img9,
  casa9_img10, casa9_img11, casa9_img12, casa9_img13, casa9_img14, casa9_img15, casa9_img16,
  casa9_img17, casa9_img18, casa9_img19, casa9_img20, casa9_img21, casa9_img22, casa9_img23, casa9_img24,
  casa9_img25, casa9_img26, casa9_img27, casa9_img28, casa9_img29, casa9_img30, casa9_img31, casa9_img32,
  casa9_img33, casa9_img34, casa9_img35, casa9_img36, casa9_img37, casa9_img38
];

// Importar imagens da casa 10
import casa10_img1 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.56.jpeg";
import casa10_img2 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.56 (1).jpeg";
import casa10_img3 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.56 (2).jpeg";
import casa10_img4 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.56 (3).jpeg";
import casa10_img5 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.57.jpeg";
import casa10_img6 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.57 (1).jpeg";
import casa10_img7 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.57 (2).jpeg";
import casa10_img8 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.57 (3).jpeg";
import casa10_img9 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.57 (4).jpeg";
import casa10_img10 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.58.jpeg";
import casa10_img11 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.58 (1).jpeg";
import casa10_img12 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.58 (2).jpeg";
import casa10_img13 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.58 (3).jpeg";
import casa10_img14 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.58 (4).jpeg";
import casa10_img15 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.59.jpeg";
import casa10_img16 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.59 (1).jpeg";
import casa10_img17 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.59 (2).jpeg";
import casa10_img18 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.59 (3).jpeg";
import casa10_img19 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.11.59 (4).jpeg";
import casa10_img20 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.12.00.jpeg";
import casa10_img21 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.12.00 (1).jpeg";
import casa10_img22 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.12.00 (2).jpeg";
import casa10_img23 from "@/assets/iamgens01/casa10/casa 10/WhatsApp Image 2025-11-08 at 00.12.00 (3).jpeg";

const casa10Images = [
  casa10_img2, casa10_img3, casa10_img4, casa10_img5, casa10_img6, casa10_img7, casa10_img8, casa10_img9,
  casa10_img10, casa10_img11, casa10_img12, casa10_img13, casa10_img14, casa10_img15, casa10_img16,
  casa10_img17, casa10_img18, casa10_img19, casa10_img20, casa10_img21, casa10_img22, casa10_img23
];

// Importar imagens da casa 11
import casa11_img1 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.22.jpeg";
import casa11_img2 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.23.jpeg";
import casa11_img3 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.23 (1).jpeg";
import casa11_img4 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.23 (2).jpeg";
import casa11_img5 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.23 (3).jpeg";
import casa11_img6 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.24.jpeg";
import casa11_img7 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.24 (1).jpeg";
import casa11_img8 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.24 (2).jpeg";
import casa11_img9 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.24 (3).jpeg";
import casa11_img10 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.25.jpeg";
import casa11_img11 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.25 (1).jpeg";
import casa11_img12 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.25 (2).jpeg";
import casa11_img13 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.25 (3).jpeg";
import casa11_img14 from "@/assets/iamgens01/casa11/casa 11/WhatsApp Image 2025-11-11 at 08.16.25 (4).jpeg";

const casa11Images = [
  casa11_img2, casa11_img3, casa11_img4, casa11_img5, casa11_img6, casa11_img7, casa11_img8,
  casa11_img9, casa11_img10, casa11_img11, casa11_img12, casa11_img13, casa11_img14
];

// Importar imagens da casa 12
import casa12_img1 from "@/assets/iamgens01/casa12/casa 12/WhatsApp Image 2025-11-14 at 08.04.35.jpeg";
import casa12_img2 from "@/assets/iamgens01/casa12/casa 12/WhatsApp Image 2025-11-14 at 08.04.35 (1).jpeg";
import casa12_img3 from "@/assets/iamgens01/casa12/casa 12/WhatsApp Image 2025-11-14 at 08.04.35 (2).jpeg";
import casa12_img4 from "@/assets/iamgens01/casa12/casa 12/WhatsApp Image 2025-11-14 at 08.04.36.jpeg";
import casa12_img5 from "@/assets/iamgens01/casa12/casa 12/WhatsApp Image 2025-11-14 at 08.04.36 (1).jpeg";

const casa12Images = [
  casa12_img2, casa12_img3, casa12_img4, casa12_img5
];

// Importar imagens da casa 13
import casa13_img1 from "@/assets/iamgens01/casa13/casa 13/WhatsApp Image 2025-11-14 at 08.06.55.jpeg";
import casa13_img2 from "@/assets/iamgens01/casa13/casa 13/WhatsApp Image 2025-11-14 at 08.06.55 (1).jpeg";
import casa13_img3 from "@/assets/iamgens01/casa13/casa 13/WhatsApp Image 2025-11-14 at 08.06.55 (2).jpeg";

const casa13Images = [
  casa13_img2, casa13_img3
];

// Importar imagens da casa 14
import casa14_img1 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.51.jpeg";
import casa14_img2 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.52.jpeg";
import casa14_img3 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.52 (1).jpeg";
import casa14_img4 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.52 (2).jpeg";
import casa14_img5 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.52 (3).jpeg";
import casa14_img6 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.53.jpeg";
import casa14_img7 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.53 (1).jpeg";
import casa14_img8 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.53 (2).jpeg";
import casa14_img9 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.53 (3).jpeg";
import casa14_img10 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.53 (4).jpeg";
import casa14_img11 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.54.jpeg";
import casa14_img12 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.54 (1).jpeg";
import casa14_img13 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.54 (2).jpeg";
import casa14_img14 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.54 (3).jpeg";
import casa14_img15 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.54 (4).jpeg";
import casa14_img16 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.55.jpeg";
import casa14_img17 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.55 (1).jpeg";
import casa14_img18 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.55 (2).jpeg";
import casa14_img19 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.55 (3).jpeg";
import casa14_img20 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.56.jpeg";
import casa14_img21 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.56 (1).jpeg";
import casa14_img22 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.56 (2).jpeg";
import casa14_img23 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.56 (3).jpeg";
import casa14_img24 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.57.jpeg";
import casa14_img25 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.57 (1).jpeg";
import casa14_img26 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.57 (2).jpeg";
import casa14_img27 from "@/assets/iamgens01/casa14/casa 14/WhatsApp Image 2025-11-14 at 08.13.57 (3).jpeg";

const casa14Images = [
  casa14_img2, casa14_img3, casa14_img4, casa14_img5, casa14_img6, casa14_img7, casa14_img8, casa14_img9,
  casa14_img10, casa14_img11, casa14_img12, casa14_img13, casa14_img14, casa14_img15, casa14_img16,
  casa14_img17, casa14_img18, casa14_img19, casa14_img20, casa14_img21, casa14_img22, casa14_img23,
  casa14_img24, casa14_img25, casa14_img26, casa14_img27
];

// Importar imagens da casa 15
import casa15_img1 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.45.jpeg";
import casa15_img2 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.45 (1).jpeg";
import casa15_img3 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.46.jpeg";
import casa15_img4 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.46 (1).jpeg";
import casa15_img5 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.46 (2).jpeg";
import casa15_img6 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.46 (3).jpeg";
import casa15_img7 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.46 (4).jpeg";
import casa15_img8 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.46 (5).jpeg";
import casa15_img9 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.47.jpeg";
import casa15_img10 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.47 (1).jpeg";
import casa15_img11 from "@/assets/iamgens01/casa15/casa 15/WhatsApp Image 2025-11-14 at 11.38.47 (2).jpeg";

const casa15Images = [
  casa15_img2, casa15_img3, casa15_img4, casa15_img5, casa15_img6, casa15_img7, casa15_img8,
  casa15_img9, casa15_img10, casa15_img11
];

// Importar imagens da casa 3
import casa3_img1 from "@/assets/iamgens01/casa3/casa 3/WhatsApp Image 2025-11-07 at 12.42.20.jpeg";
import casa3_img2 from "@/assets/iamgens01/casa3/casa 3/WhatsApp Image 2025-11-07 at 12.42.20 (1).jpeg";
import casa3_img3 from "@/assets/iamgens01/casa3/casa 3/WhatsApp Image 2025-11-07 at 12.42.21.jpeg";
import casa3_img4 from "@/assets/iamgens01/casa3/casa 3/WhatsApp Image 2025-11-07 at 12.42.21 (1).jpeg";
import casa3_img5 from "@/assets/iamgens01/casa3/casa 3/WhatsApp Image 2025-11-07 at 12.42.21 (2).jpeg";

const casa3Images = [
  casa3_img1, casa3_img2, casa3_img3, casa3_img4, casa3_img5
];

export const housesData: Record<string, HouseData> = {
  "casa-1": {
    id: "casa-1",
    image: casa1_img1,
    images: casa1Images,
    price: "R$ 550.000,00",
    title: "Casa 1",
    location: "Guapimirim/RJ",
    bedrooms: 2,
    bathrooms: 3,
    area: 180,
    badge: "Novo",
    badgeVariant: "default",
    description: `Imóvel com duas casas independentes, ideal para quem deseja morar e ainda obter renda com locação. Localizado em um bairro com crescente valorização, próximo ao centro da cidade e de todo o comércio local.

1ª Casa (linear):
• Sala ampla
• 2 quartos (sendo 1 suíte)
• Copa
• Cozinha espaçosa
• Banheiro social
• Área de serviço
• Varanda

2ª Casa (acesso por escada):
• Varanda ampla
• Sala
• 2 quartos (sendo 1 suíte)
• Cozinha espaçosa
• Banheiro social
• Área de serviço

Área Externa:
• Garagem coberta para até 2 carros
• Pequeno jardim
• Amplo terreno nos fundos com diversas possibilidades de uso

Diferenciais:
• Terreno totalmente plano
• Construção com materiais de excelente qualidade
• Localização estratégica, em bairro com boa infraestrutura e fácil acesso ao centro

Uma excelente escolha para quem busca um imóvel com potencial de retorno financeiro através de locação.`,
    builtArea: 180,
    totalArea: 360.00,
    investmentValue: "R$ 550.000,00",
    iptu: "R$ 1.300,00",
  },
  "casa-2": {
    id: "casa-2",
    image: casa2_img1,
    images: casa2Images,
    price: "R$ 250.000,00",
    title: "Imóvel em condomínio residencial",
    location: "Guapimirim/RJ",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    badge: "Novo",
    badgeVariant: "default",
    description: `Excelente oportunidade de investimento! Imóvel em condomínio residencial com todas as comodidades e infraestrutura necessárias para sua família.

Características do Imóvel:
• Área gourmet completa
• Piscina
• Área para construção

Informações Importantes:
• Valor: R$ 250.000,00
• Taxa do condomínio: R$ 450,00 por mês

Condomínio residencial com excelente estrutura e localização privilegiada. Ideal para quem busca qualidade de vida, segurança e tranquilidade.`,
    investmentValue: "R$ 250.000,00",
  },
  "casa-4": {
    id: "casa-4",
    image: casa4_img1,
    images: casa4Images,
    price: "R$ 348.000,00",
    title: "Condomínio Ipê - Cotia - Guapimirim",
    location: "Cotia - Guapimirim/RJ",
    bedrooms: 1,
    bathrooms: 2,
    area: 61.36,
    badge: "Novo",
    badgeVariant: "default",
    description: `Condomínio Ipê localizado em Cotia - Guapimirim, a apenas um minuto da praça da Cotia. O condomínio conta com portaria integrada para os moradores, ótima dinâmica e excelente infraestrutura. É uma excelente oportunidade para quem busca um imóvel em condomínio residencial. O imóvel aceita financiamento bancário!

Casa 1 - Maior Terreno:
• De: R$ 447.000,00
• Por: R$ 419.000,00 (Unidade c/ garagem coberta)
• Área Construída: 84,85 m²
• Área de Terreno: 233,05 m²

Casa 2:
• R$ 419.000,00 (Unidade c/ garagem coberta)
• Área Construída: 84,85 m²
• Área de Terreno: 195,16 m²

Casa 4 a 10:
• De: R$ 367.000,00
• Por: R$ 348.000,00 (Garagem descoberta)
• Área Construída: 61,36 m²
• Área de Terreno: 142,80 m²

Descrição Geral:
• Sala de estar
• Cozinha
• Varanda
• Garagem
• Área de serviço
• Banheiro social
• Um quarto
• Uma suíte

Diferenciais:
• Condomínio com portaria integrada para os moradores
• Localizado no bairro da Cotia
• A um minuto da praça da Cotia
• Ótima dinâmica e excelente infraestrutura
• Aceita financiamento bancário

É uma excelente oportunidade para quem busca um imóvel em condomínio residencial com todas as comodidades e infraestrutura necessárias. O condomínio está localizado no bairro da Cotia, estando a um minuto da praça da Cotia.`,
    builtArea: 61.36,
    totalArea: 142.80,
    investmentValue: "R$ 348.000,00",
  },
  "casa-5": {
    id: "casa-5",
    image: casa5_img1,
    images: casa5Images,
    price: "R$ 180.000,00",
    title: "Mini Sítio em Guapimirim - Próximo à Rio x Teresópolis",
    location: "Guapimirim/RJ",
    bedrooms: 2,
    bathrooms: 2,
    area: 80,
    badge: "Novo",
    badgeVariant: "default",
    description: `Excelente oportunidade! Casa em estilo mini sítio localizada a menos de 300 metros da Rodovia Rio x Teresópolis no município de Guapimirim. Ambiente tranquilo e acolhedor, ideal para quem busca qualidade de vida próximo à natureza.

Valor:
• De: R$ 200.000,00
• Por: R$ 180.000,00

Características:
• Casa com 80 metros quadrados
• Terreno com 480 metros quadrados

A casa contém:
• Dois dormitórios
• Sala de estar
• Cozinha
• Banheiro social
• Área de serviço
• Corredor

Área Externa:
• Quintal com árvores frutíferas
• Banheiro social
• Garagem

Diferenciais:
• Localizada a menos de 300 metros da Rodovia Rio x Teresópolis
• Município de Guapimirim
• Ambiente tranquilo no estilo mini sítio
• A menos de 56 minutos da capital Rio de Janeiro
• A menos de 25 minutos do município de Teresópolis

Uma excelente oportunidade para quem busca uma casa em ambiente tranquilo e acolhedor, com fácil acesso às principais vias de transporte e próximo aos principais centros urbanos!`,
    builtArea: 80,
    totalArea: 480,
    investmentValue: "R$ 180.000,00",
  },
  "casa-6": {
    id: "casa-6",
    image: casa6_img1,
    images: casa6Images,
    price: "R$ 695.000,00",
    title: "Sítio com Vista para as Montanhas",
    location: "Parada Modelo - Guapimirim/RJ",
    bedrooms: 2,
    bathrooms: 3,
    area: 7000,
    badge: "Novo",
    badgeVariant: "default",
    description: `Excelente oportunidade! Sítio de 7000 metros quadrados com 450 metros de construção, localizado em ambiente tranquilo com linda vista das montanhas, a menos de dois minutos do centro comercial de Parada Modelo no município de Guapimirim.

Valor:
• De: R$ 700.000,00
• Por: R$ 695.000,00

Características:
• 7000 metros quadrados de terreno
• 450 metros de construção

A casa principal é composta por:
• Dois dormitórios
• Sala de estar
• Cozinha
• Banheiro social
• Varanda
• Área de serviço

Área Externa:
• Lago de peixes
• Área gourmet
• Dois banheiros externos
• Varandão nos fundos
• Entrada com pés de coqueiros
• Espaço para diversos carros
• Árvores frutíferas

Casa de Caseiro:
• Dois dormitórios
• Sala de estar
• Cozinha
• Banheiro social
• Lavanderia

Duas Casas Completas para Visita:
• Dois dormitórios
• Sala de estar
• Cozinha
• Banheiro social
• E muito mais

Diferenciais:
• Ambiente tranquilo com linda vista das montanhas
• Localizado a menos de dois minutos do centro comercial de Parada Modelo
• Município de Guapimirim
• 7.000 m² de terreno
• 450 m² de construção
• Múltiplas estruturas: casa principal, casa de caseiro e casas para visita

O imóvel está em um ambiente tranquilo e com uma linda vista das montanhas, ficando a menos de dois minutos do centro comercial de Parada Modelo no município de Guapimirim. Uma excelente oportunidade para quem busca sossego e contato com a natureza sem abrir mão da comodidade.`,
    builtArea: 450,
    totalArea: 7000,
    investmentValue: "R$ 695.000,00",
  },
  "casa-7": {
    id: "casa-7",
    image: casa7_img1,
    images: casa7Images,
    price: "R$ 680.000",
    title: "Elo Sítios - Propriedade com Vista Privilegiada",
    location: "Município tranquilo e acolhedor",
    bedrooms: 5,
    bathrooms: 4,
    area: 5000,
    badge: "Destaque",
    badgeVariant: "secondary",
    description: `Elo Sítios composto por 5 mil metros quadrados com 450 metros quadrados de área construída. O imóvel está localizado em um ambiente tranquilo, com lindas cachoeiras próximas, vista privilegiada para as montanhas. Tudo isso em um município tranquilo e muito acolhedor!

Características:
• 5.000 metros quadrados de terreno
• 450 metros quadrados de área construída

O imóvel é composto por:
• Cinco quartos sendo duas suítes
• Uma sala de estar
• Uma sala de jantar
• Sala de leitura
• Varanda em L
• Cozinha
• 2 Banheiros sociais
• Sacada de varanda

Área Externa:
• Piscina com design exclusivo
• Campo de futebol
• Salão de festa
• Área gourmet ampla
• Banheiro social
• Diversas árvores frutíferas
• Vista privilegiada

Diferenciais:
• 5.000 m² de terreno
• 450 m² de área construída
• Vista privilegiada para as montanhas
• Ambiente tranquilo com lindas cachoeiras próximas
• Município tranquilo e muito acolhedor
• Piscina com design exclusivo
• Campo de futebol
• Salão de festa
• Área gourmet ampla

O imóvel está localizado em um ambiente tranquilo, com lindas cachoeiras próximas, vista privilegiada para as montanhas. Tudo isso em um município tranquilo e muito acolhedor! Para mais informações, entre em contato: (21) 97889-3967 ou (21) 98208-1446`,
    builtArea: 450,
    totalArea: 5000,
    investmentValue: "R$ 680.000",
  },
  "casa-8": {
    id: "casa-8",
    image: casa8_img1,
    images: casa8Images,
    price: "R$ 200.000,00",
    title: "Casa em Guapimirim - Próximo a Teresópolis e Rio de Janeiro",
    location: "Guapimirim/RJ",
    bedrooms: 2,
    bathrooms: 2,
    area: 92,
    badge: "Novo",
    badgeVariant: "default",
    description: `Excelente oportunidade! Casa localizada há menos de 25 minutos do município de Teresópolis e a 55 minutos da capital Rio de Janeiro. Uma excelente oportunidade para quem busca qualidade de vida próximo à natureza, com fácil acesso aos principais centros urbanos.

Valor:
• R$ 200.000,00

Características:
• 92 metros quadrados de área construída
• 420 metros quadrados de terreno

A casa contém:
• Dois dormitórios sendo uma suíte
• Sala de estar
• Cozinha americana
• Banheiro social
• Varanda
• Lavanderia

Área Externa:
• Garagem coberta para dois carros
• Varanda em L
• Quintal com árvores frutíferas
• Quintal amplo com árvores frutíferas
• Canil

Diferenciais:
• Localizada há menos de 25 minutos do município de Teresópolis
• A 55 minutos da capital Rio de Janeiro
• 92 m² de área construída
• 420 m² de terreno
• Garagem coberta para dois carros
• Varanda em L
• Quintal amplo com árvores frutíferas
• Canil

Tudo isso há menos de 25 minutos do município de Teresópolis e a 55 minutos da capital Rio de Janeiro! Uma excelente oportunidade para quem busca qualidade de vida, conforto e praticidade em um ambiente tranquilo.`,
    builtArea: 92,
    totalArea: 420,
    investmentValue: "R$ 200.000,00",
  },
  "casa-9": {
    id: "casa-9",
    image: casa9_img1,
    images: casa9Images,
    price: "R$ XXX.XXX,XX",
    title: "Casa de alto padrão",
    location: "RIO DE JANEIRO",
    bedrooms: 2,
    bathrooms: 2,
    area: 130,
    badge: "Novo",
    badgeVariant: "default",
    description: `Casa de alto padrão medindo 130 metros de área construída em terreno com 450 metros quadrados. Tudo isso em uma cidade linda e acolhedora além de estar a menos de 55 minutos da capital Rio de Janeiro e com uma excelente vizinhança, próximo a linda cachoeira!

Características:
• 130 metros quadrados de área construída
• Terreno com 450 metros quadrados

A casa é composta por:
• Dois dormitórios sendo uma bela suíte
• Sala de estar
• Sala de jantar
• Cozinha americana
• Lavanderia
• Banheiro social
• Varanda

Área Externa:
• Salão de jogos
• Área gourmet
• Piscina
• Quintal gramado
• Garagem coberta
• Garagem sem cobertura
• Jardim na frente da casa

Diferenciais:
• 130 m² de área construída
• 450 m² de terreno
• Localizada em uma cidade linda e acolhedora
• A menos de 55 minutos da capital Rio de Janeiro
• Excelente vizinhança
• Próximo a linda cachoeira
• Salão de jogos
• Área gourmet
• Piscina
• Quintal gramado

Tudo isso em uma cidade linda e acolhedora além de estar a menos de 55 minutos da capital Rio de Janeiro e com uma excelente vizinhança, próximo a linda cachoeira!`,
    builtArea: 130,
    totalArea: 450,
  },
  "casa-10": {
    id: "casa-10",
    image: casa10_img1,
    images: casa10Images,
    price: "R$ 1.100.000,00",
    title: "Casa de alto padrão em condomínio residencial",
    location: "Guapimirim/RJ",
    bedrooms: 3,
    bathrooms: 2,
    area: 300,
    badge: "Novo",
    badgeVariant: "default",
    description: `Casa de alto padrão em condomínio residencial no município de Guapimirim. O imóvel tem um charme logo na entrada, conta com lindo jardim e ao adentrar a sala de estar você se depara com uma linda lareira, o que dá um toque a mais no belo imóvel que conta com um fino acabamento na sua construção, portas e janelas de madeira com uma excelente conexão com os vidros, deixando o imóvel impecável!

Valor:
• R$ 1.100.000,00

Características:
• Área construída: 300 metros quadrados
• Terreno: 800 metros quadrados

Composta por:
• Três dormitórios sendo uma bela suíte
• Sala de estar ampla
• Sala de jantar
• Sala de TV
• Cozinha
• Lavabo
• Sacada de varanda
• Área gourmet integrada

Área Externa:
• Piscina
• Garagem coberta para dois carros
• Uma edícula
• Quarto de ferramentas
• Quintal gramado
• Área concretada

Características Especiais:
• Charme logo na entrada
• Lindo jardim
• Linda lareira na sala de estar
• Fino acabamento na construção
• Portas e janelas de madeira
• Excelente conexão com os vidros
• Imóvel impecável

Diferenciais:
• Casa de alto padrão em condomínio residencial
• Município de Guapimirim
• 300 m² de área construída
• 800 m² de terreno
• Piscina
• Garagem coberta para dois carros
• Edícula
• Quarto de ferramentas
• Quintal gramado
• Área concretada
• Lindo jardim
• Lareira na sala de estar
• Acabamento fino

O imóvel tem um charme logo na entrada, conta com lindo jardim e ao adentrar a sala de estar você se depara com uma linda lareira, o que dá um toque a mais no belo imóvel que conta com um fino acabamento na sua construção, portas e janelas de madeira com uma excelente conexão com os vidros, deixando o imóvel impecável!`,
    builtArea: 300,
    totalArea: 800,
    investmentValue: "R$ 1.100.000,00",
  },
  "casa-11": {
    id: "casa-11",
    image: casa11_img1,
    images: casa11Images,
    price: "R$ 380.000,00",
    title: "Casa no centro da cidade de Guapimirim",
    location: "Guapimirim/RJ",
    bedrooms: 2,
    bathrooms: 2,
    area: 67,
    badge: "Novo",
    badgeVariant: "default",
    description: `Excelente oportunidade! Casa no centro da cidade de Guapimirim com fino acabamento, ótima luminosidade e excelente localização próxima aos grandes centros comerciais e a poucos metros de escolas particulares.

Valor:
• R$ 380.000,00

Características:
• 67 metros quadrados de área construída
• Terreno: 120 metros quadrados

Composta por:
• Dois dormitórios sendo uma bela suíte
• Sala de estar
• Cozinha americana
• Banheiro social
• Varanda
• Lavanderia

Área Externa:
• Garagem para três carros
• Quintal

Características Especiais:
• Fino acabamento
• Ótima luminosidade
• Ótima distribuição de tomadas
• Bancada bem ampla

Diferenciais:
• Casa no centro da cidade de Guapimirim
• 67 m² de área construída
• 120 m² de terreno
• Próxima aos grandes centros comerciais
• A poucos metros de escolas particulares
• Garagem para três carros
• Quintal
• Fino acabamento
• Ótima luminosidade
• Ótima distribuição de tomadas
• Bancada bem ampla

O imóvel detém um fino acabamento, com ótima luminosidade, uma ótima distribuição de tomadas, uma bancada bem ampla e o imóvel está próximo aos grandes centros comerciais e a poucos metros de escolas particulares!`,
    builtArea: 67,
    totalArea: 120,
    investmentValue: "R$ 380.000,00",
  },
  "casa-12": {
    id: "casa-12",
    image: casa12_img1,
    images: casa12Images,
    price: "R$ 230.000,00",
    title: "Terreno em Cotia - Próximo à Praça da Cotia",
    location: "Cotia - Guapimirim/RJ",
    bedrooms: 0,
    bathrooms: 0,
    area: 390,
    badge: "Novo",
    badgeVariant: "default",
    description: `Excelente oportunidade! Terreno de 390 metros quadrados localizado no bairro da Cotia. Um ambiente tranquilo com casas de alto padrão, com vistas privilegiadas, seguido de lindas cachoeiras, a menos de 400 metros da Praça da Cotia.

Valor:
• R$ 230.000,00

Características:
• Terreno com 390 metros quadrados
• Localizado no bairro da Cotia

Diferenciais:
• Ambiente tranquilo
• Casas de alto padrão no entorno
• Vistas privilegiadas
• Lindas cachoeiras próximas
• A menos de 400 metros da Praça da Cotia
• Bairro da Cotia
• 390 m² de terreno

Um ambiente tranquilo com casas de alto padrão, com vistas privilegiadas, seguido de lindas cachoeiras, a menos de 400 metros da Praça da Cotia. Uma excelente oportunidade para quem busca construir ou investir em um local privilegiado!`,
    totalArea: 390,
    investmentValue: "R$ 230.000,00",
  },
  "casa-13": {
    id: "casa-13",
    image: casa13_img1,
    images: casa13Images,
    price: "R$ 165.000,00",
    title: "Terreno na Cotia - Próximo a Cachoeiras e Condomínios",
    location: "Cotia - Guapimirim/RJ",
    bedrooms: 0,
    bathrooms: 0,
    area: 480,
    badge: "Novo",
    badgeVariant: "default",
    description: `Excelente oportunidade! Terreno na Cotia com 480 metros quadrados. Localizado no bairro da Cotia, próximo a lindas cachoeiras, próximo a condomínios residenciais, restaurantes e muito mais!

Valor:
• R$ 165.000,00

Características:
• Terreno com 480 metros quadrados
• Localizado no bairro da Cotia

Diferenciais:
• Localizado no bairro da Cotia
• Próximo a lindas cachoeiras
• Próximo a condomínios residenciais
• Próximo a restaurantes
• Muito mais opções de lazer e comodidade
• 480 m² de terreno

Localizado no bairro da Cotia, próximo a lindas cachoeiras, próximo a condomínios residenciais, restaurantes e muito mais! Uma excelente oportunidade para quem busca construir ou investir em um local privilegiado com fácil acesso a diversos atrativos!`,
    totalArea: 480,
    investmentValue: "R$ 165.000,00",
  },
  "casa-14": {
    id: "casa-14",
    image: casa14_img1,
    images: casa14Images,
    price: "R$ 450.000,00",
    title: "Casa em Petrópolis - Bairro Carangola",
    location: "Bairro Carangola - Petrópolis/RJ",
    bedrooms: 4,
    bathrooms: 3,
    area: 0,
    badge: "Novo",
    badgeVariant: "default",
    description: `Casa no Município de Petrópolis, localizada no Bairro Carangola. Uma excelente oportunidade para quem busca conforto e qualidade de vida!

Valor:
• R$ 450.000,00

Localização:
• Município de Petrópolis
• Bairro Carangola

Composição da Casa:
• 4 quartos
• Uma sala enorme
• Jardim de inverno
• 3 banheiros
• Copa
• Cozinha
• Jacuzzi
• Área gourmet completa
• Terraço

Diferenciais:
• 4 quartos espaçosos
• Sala enorme para eventos e encontros
• Jardim de inverno
• 3 banheiros completos
• Jacuzzi para relaxamento
• Área gourmet completa para entretenimento
• Terraço com vista privilegiada
• Localizada no Bairro Carangola, Petrópolis
• Município de Petrópolis com excelente infraestrutura

Uma excelente oportunidade para quem busca uma casa completa com todas as comodidades e localizada em um dos bairros mais charmosos de Petrópolis!`,
  },
  "casa-15": {
    id: "casa-15",
    image: casa15_img1,
    images: casa15Images,
    price: "R$ 250.000,00",
    title: "Casa em Guapimirim - Bairro Quita Mariana",
    location: "Bairro Quita Mariana - Guapimirim/RJ",
    bedrooms: 2,
    bathrooms: 1,
    area: 130,
    badge: "Novo",
    badgeVariant: "default",
    builtArea: 130,
    totalArea: 360,
    investmentValue: "R$ 250.000,00",
    description: `Casa no Município de Guapimirim, localizada no Bairro Quita Mariana. Uma excelente oportunidade para quem busca conforto e qualidade de vida!

Valor:
• R$ 250.000,00

Localização:
• Município de Guapimirim
• Bairro Quita Mariana

Medidas:
• 360 metros quadrados de terreno
• Aproximadamente 130 metros quadrados de área construída

Composição da Casa:
• Dois dormitórios
• Sala de estar
• Cozinha
• Banheiro
• Varanda
• Lavanderia
• Garagem
• Terraço
• Quintal

Diferenciais:
• Casa com aproximadamente 130 m² de área construída
• Terreno com 360 m²
• Dois dormitórios
• Sala de estar espaçosa
• Varanda para relaxar
• Lavanderia completa
• Garagem
• Terraço
• Quintal
• Localizada no Bairro Quita Mariana, Guapimirim
• Município de Guapimirim com excelente infraestrutura

Uma excelente oportunidade para quem busca uma casa completa com todas as comodidades em um local tranquilo e acolhedor!`,
  },
  "casa-3": {
    id: "casa-3",
    image: casa3_img1,
    images: casa3Images,
    price: "R$ 180.000,00",
    title: "Terreno em Guapimirim - Parada Modelo",
    location: "Parada Modelo - Guapimirim/RJ",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    badge: "Novo",
    badgeVariant: "default",
    description: "Terreno em Guapimirim no bairro de Parada modelo com a metragem de 500 metros quadrados, todo murado no valor de R$ 180 mil reais!!",
  },
};

// Função para buscar uma casa por ID
export const getHouseById = (id: string): HouseData | null => {
  return housesData[id] || null;
};

