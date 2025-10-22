"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function RecetasPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Datos de ejemplo para las recetas
  const recipes = [
    {
      id: "smoothie-bowl-tropical",
      name: "Smoothie Bowl Tropical con Granola Ancestral",
      description: "Un desayuno refrescante y nutritivo, lleno de sabor tropical.",
      ingredients: [
        "1/2 taza de mango congelado",
        "1/2 taza de piña congelada",
        "1/2 plátano maduro",
        "1/4 taza de leche de coco (o la de tu preferencia)",
        "2 cucharadas de yogur griego (opcional)",
        "Granola Ancestral CRUZO del Meta",
        "Frutas frescas para decorar (kiwi, fresas, arándanos)",
        "Coco rallado (opcional)",
      ],
      instructions: [
        "Combina el mango, piña, plátano, leche de coco y yogur (si usas) en una licuadora. Licúa hasta obtener una consistencia suave y espesa.",
        "Vierte la mezcla en un bowl.",
        "Decora generosamente con Granola Ancestral CRUZO del Meta, frutas frescas y coco rallado.",
        "¡Disfruta inmediatamente!",
      ],
      image: "/images/smoothie-bowl-tropical.jpg", // Asegúrate de tener esta imagen
      granolaType: "Ancestral",
    },
    {
      id: "barritas-energeticas",
      name: "Barritas Energéticas de Granola Tradicional",
      description: "Snack casero perfecto para llevar, con la energía de nuestra granola.",
      ingredients: [
        "1 taza de Granola Tradicional CRUZO del Meta",
        "1/2 taza de dátiles sin hueso, remojados en agua caliente por 10 minutos y escurridos",
        "1/4 taza de mantequilla de maní (o de almendras)",
        "2 cucharadas de miel o sirope de arce",
        "1/4 taza de chispas de chocolate (opcional)",
        "Una pizca de sal",
      ],
      instructions: [
        "En un procesador de alimentos, combina los dátiles escurridos, la mantequilla de maní, la miel y la pizca de sal. Procesa hasta obtener una pasta pegajosa.",
        "Transfiere la pasta a un bowl y agrega la Granola Tradicional y las chispas de chocolate (si usas). Mezcla bien con una espátula o tus manos hasta que todo esté incorporado.",
        "Presiona firmemente la mezcla en un molde cuadrado (aprox. 20x20 cm) forrado con papel de horno.",
        "Refrigera por al menos 1 hora para que se endurezca.",
        "Corta en barritas y guarda en un recipiente hermético en el refrigerador.",
      ],
      image: "/images/barritas-energeticas.jpg", // Asegúrate de tener esta imagen
      granolaType: "Tradicional",
    },
    {
      id: "manzanas-horneadas",
      name: "Manzanas Horneadas con Granola Proteica",
      description: "Postre cálido y reconfortante, ideal para una tarde fría.",
      ingredients: [
        "2 manzanas grandes (tipo Fuji o Gala)",
        "1/2 taza de Granola Proteica CRUZO del Meta",
        "2 cucharadas de mantequilla sin sal, derretida",
        "1 cucharada de azúcar moreno (opcional)",
        "1/2 cucharadita de canela en polvo",
        "Helado de vainilla o yogur natural para servir (opcional)",
      ],
      instructions: [
        "Precalienta el horno a 180°C (350°F).",
        "Lava y corta las manzanas por la mitad, retirando el corazón con una cuchara o descorazonador.",
        "En un bowl pequeño, mezcla la Granola Proteica con la mantequilla derretida, el azúcar moreno y la canela.",
        "Rellena el centro de cada mitad de manzana con la mezcla de granola, presionando ligeramente.",
        "Coloca las manzanas rellenas en una bandeja para hornear.",
        "Hornea durante 25-35 minutos, o hasta que las manzanas estén tiernas y la granola ligeramente dorada.",
        "Sirve caliente, opcionalmente con una bola de helado de vainilla o una cucharada de yogur.",
      ],
      image: "/images/manzanas-horneadas.jpg", // Asegúrate de tener esta imagen
      granolaType: "Proteica",
    },
    {
        id: "yogur-con-frutos",
        name: "Yogur Parfait con Granola Tropical y Frutos Rojos",
        description: "Un clásico rápido y saludable, perfecto para el desayuno o un snack.",
        ingredients: [
          "1 taza de yogur griego natural",
          "1/2 taza de Granola Tropical CRUZO del Meta",
          "1/2 taza de frutos rojos frescos o congelados (fresas, arándanos, frambuesas)",
          "1 cucharadita de miel o sirope de agave (opcional)",
        ],
        instructions: [
          "En un vaso o bowl, coloca una capa de yogur.",
          "Agrega una capa de Granola Tropical.",
          "Distribuye algunos frutos rojos encima.",
          "Repite las capas hasta llenar el vaso, terminando con granola y frutos rojos.",
          "Si deseas, rocía con un poco de miel o sirope de agave.",
          "Sirve inmediatamente o refrigera por unos minutos.",
        ],
        image: "/images/yogur-frutos-rojos.jpg", // Asegúrate de tener esta imagen
        granolaType: "Tropical",
      },
  ];

  return (
    <motion.div
      className="bg-gray-50 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#963f24] text-center mb-12 drop-shadow-md"
          variants={itemVariants}
        >
          Recetas con Granola CRUZO del Meta
        </motion.h1>

        {/* Sección de Introducción */}
        <motion.section
          className="bg-white p-8 rounded-xl shadow-lg mb-16 text-gray-700 leading-relaxed text-center"
          variants={itemVariants}
        >
          <motion.p className="text-lg mb-4" variants={itemVariants}>
            Nuestra granola no es solo un desayuno, ¡es una explosión de sabor y nutrición para cualquier momento del día!
            Descubre estas deliciosas y fáciles recetas que puedes preparar con la variedad de granolas CRUZO del Meta.
          </motion.p>
          <motion.p className="text-md italic" variants={itemVariants}>
            ¡Inspírate y lleva tus comidas al siguiente nivel!
          </motion.p>
        </motion.section>

        {/* Listado de Recetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              variants={itemVariants}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-[#e26d44] mb-3 flex-grow">
                  {recipe.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {recipe.description}
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[#963f24] mb-2">Ingredientes:</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm pl-4">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[#963f24] mb-2">Instrucciones:</h3>
                  <ol className="list-decimal list-inside text-gray-700 text-sm pl-4 space-y-1">
                    {recipe.instructions.map((instruction, i) => (
                      <li key={i}>{instruction}</li>
                    ))}
                  </ol>
                </div>
                <div className="mt-auto text-right text-sm text-gray-500 italic">
                  Ideal con Granola {recipe.granolaType}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA para ver productos */}
        <motion.section
          className="text-center py-12 bg-[#e26d44] text-white rounded-xl shadow-lg"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4">¿Listo para crear tus propias delicias?</h2>
          <p className="text-lg mb-6">Explora nuestra variedad de granolas y empieza a innovar en tu cocina.</p>
          <Link href="/products" className="bg-white text-[#e26d44] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
            Ver Granola
          </Link>
        </motion.section>
      </div>
    </motion.div>
  );
}