"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/banner1.png",
  "/images/banner2.png",
  "/images/banner3.png",
];

export default function Carousel() {
  const [[current, direction], setCurrent] = useState([0, 0]); // [index, direction: -1 for left, 1 for right]

  // Auto-advance to the right
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prevIndex]) => [(prevIndex + 1) % images.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrent(([prevIndex]) => [(prevIndex + 1) % images.length, -1]);
  };

  const prevImage = () => {
    setCurrent(([prevIndex]) => [(prevIndex - 1 + images.length) % images.length, 1]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <img src={images[current]} alt={`Banner ${current + 1}`} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

          
      {/* Botones */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10"
      >
        &#10095;
      </button>

      {/* Texto - CORRECCIÓN AQUÍ */}
      <div className="absolute z-10 text-white
                    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[90vw] px-4
                    md:top-60 md:left-120 md:transform-none md:text-left md:max-w-none">
        {/* La imagen del logo no es texto, así que no aplicamos text-black directamente, pero ajustamos su tamaño */}
        <img src="/images/cruzo_letra.png" alt="Bienvenido a Mi Empresa" className="h-40 md:h-80 w-auto mx-auto md:mx-0 drop-shadow-lg" />
        
        {/* Aquí aplicamos text-black y font-bold/font-semibold */}
        <p className="mt-2 text-base md:text-2xl drop-shadow-lg 
                      text-white font-bold">
          Descubre nuestras deliciosas granolas y productos naturales
        </p>
      </div>
      
    </div>
  );
}