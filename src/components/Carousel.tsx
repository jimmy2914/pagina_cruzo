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

      {/* Texto */}
      <div className="absolute top-2 left-30 text-white z-10">
        <img src="/images/cruzo_letra.png" alt="Bienvenido a Mi Empresa" className="h-80 w-140 drop-shadow-lg" />
        <p className="mt-2 text-lg md:text-2xl drop-shadow-lg">Descubre nuestras deliciosas granolas y productos naturales</p>
      </div>
      
    </div>
  );
}