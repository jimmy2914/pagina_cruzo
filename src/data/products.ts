// types/product.ts

export type Presentation = {
  size: string; // Ejemplo: "250g", "500g", "1kg"
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;       // breve descripción
  ingredients: string[];     // lista de ingredientes
  presentations: Presentation[]; // ¡Cambiado! Ahora es un array de objetos Presentation
  suggestedRecipes: string[];// ideas de consumo
  image?: string;            // URL o ruta local
  allergies?: string[];      // posibles alérgenos
};


export const PRODUCTS: Product[] = [
  {
    id: "granola-tradicional",
    name: "Granola Tradicional",
    description: "Mezcla clásica de hojuelas, frutos secos y semillas.",
    ingredients: ["Hojuelas (Maíz, Cebada y Avena)", "Maní", "Coco", "Nuez", "Uvas Pasas", "Ajonjolí"],
    presentations: [
      { size: "50g", price: 4000 },
      { size: "350g", price: 22000 },
      { size: "500g", price: 30000 }, 
      { size: "1kg", price: 58000 },  
    ],
    suggestedRecipes: ["Con yogur y frutas", "Como topping de ensaladas", "En batidos"],
    image: "/images/granola-tradicional.png",
    allergies: ["Maní", "Nuez"],
  },
  {
    id: "granola-ancestral",
    name: "Granola Ancestral",
    description: "Granola nutritiva con semillas y superfoods.",
    ingredients: ["Hojuelas (Maíz, Cebada y Avena)", "Semillas de Calabaza", "Semillas de Chía", "Quinua Inflada", "Almendras", "Arándanos"],
    presentations: [
      { size: "50g", price: 4000 },
      { size: "350g", price: 22000 },
      { size: "500g", price: 30000 }, 
      { size: "1kg", price: 58000 },  
    ],
    suggestedRecipes: ["Con leche vegetal", "En bowls de desayuno", "En mezclas de frutos secos"],
    image: "/images/granola-ancestral.png",
    allergies: ["Almendras"],
  },
  {
    id: "granola-tropical",
    name: "Granola Tropical",
    description: "Deliciosa granola con frutas deshidratadas.",
    ingredients: ["Hojuelas (Maíz, Cebada y Avena)", "Coco", "Uvas Pasas", "Maraño", "Mango", "Piña Deshidratados"],
    presentations: [
      { size: "50g", price: 4000 },
      { size: "350g", price: 22000 },
      { size: "500g", price: 30000 }, 
      { size: "1kg", price: 58000 },  
    ],
    suggestedRecipes: ["Con yogurt natural", "Como snack", "En batidos tropicales"],
    image: "/images/granola-tropical.png",
    allergies: ["Coco"],
  },
  {
    id: "granola-proteica",
    name: "Granola Proteica",
    description: "Granola alta en proteínas y semillas.",
    ingredients: ["Hojuelas (Maíz, Cebada y Avena)", "Maní", "Arándanos", "Almendras", "Semillas de Girasol", "Semilla de Linaza"],
    presentations: [
      { size: "50g", price: 4000 },
      { size: "350g", price: 22000 },
      { size: "500g", price: 30000 }, 
      { size: "1kg", price: 58000 },  
    ],
    suggestedRecipes: ["Con leche o yogurt", "En batidos proteicos", "Como topping energético"],
    image: "/images/granola-proteica.png",
    allergies: ["Maní", "Almendras"],
  },
];
