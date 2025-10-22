"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants  } from "framer-motion"; // Para animaciones sutiles

export default function NosotrosPage() {
  const containerVariants: Variants  = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants  = {
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
          Conoce CRUZO del Meta
        </motion.h1>

        {/* Sección de Introducción con Imagen */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 bg-white p-8 rounded-xl shadow-lg"
          variants={itemVariants}
        >
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/sabanas9.jpg" // Imagen de un paisaje del Meta
              alt="Paisaje del Meta"
              layout="fill"
              objectFit="cover"
              priority // Para cargarla rápidamente
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white text-sm italic">
              "Inspirados por la riqueza de nuestra tierra"
            </p>
          </div>
          <div className="text-gray-700 leading-relaxed">
            <motion.h2 className="text-3xl font-bold text-[#e26d44] mb-4" variants={itemVariants}>
              Nuestra Historia
            </motion.h2>
            <motion.p className="mb-4" variants={itemVariants}>
              En CRUZO del Meta S.A.S, nuestra pasión nace del corazón de la región del Meta,
              un lugar bendecido con ingredientes naturales y un espíritu vibrante.
              Nos dedicamos a transformar esa riqueza en granolas nutritivas y deliciosas,
              pensadas para tu bienestar y el de tu familia.
            </motion.p>
            <motion.p variants={itemVariants}>
              Desde nuestros inicios, hemos creído en el poder de los sabores auténticos y
              en el impacto positivo que una alimentación consciente puede tener.
              Cada producto es un reflejo de nuestro compromiso con la calidad,
              la sostenibilidad y el apoyo a nuestra comunidad.
            </motion.p>
          </div>
        </motion.section>

        {/* Sección Misión, Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-[#963f24] text-white p-8 rounded-xl shadow-lg flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 border-b-2 border-white/50 pb-2">Nuestra Misión</h2>
              <p className="leading-relaxed">
                CRUZO del Meta S.A.S produce y comercializa granola en base a una mezcla exquisita de
                ingredientes premium de origen regional, ofreciendo a nuestros consumidores una alternativa
                de solución en aras de incentivar y promover una alimentación nutritiva, saludable y práctica.
                Nuestro compromiso; impulsar el desarrollo sostenible de la región del Meta, apoyar las
                economías locales, promover el cuidado del medio ambiente y contribuir al bienestar y calidad
                de vida de quienes confían en nuestros productos.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#e26d44] text-white p-8 rounded-xl shadow-lg flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 border-b-2 border-white/50 pb-2">Nuestra Visión</h2>
              <p className="leading-relaxed">
                Cruzo del Meta S.A.S busca consolidarse para el año 2027 como una empresa legalmente
                constituida, reconocida por la producción y comercialización de granola y snacks saludables
                de alta calidad. La empresa proyecta alcanzar un volumen de producción estándar que garantice
                una distribución competitiva y eficiente hacia diversos públicos y sectores comerciales en la
                ciudad de Restrepo y sus alrededores, fortaleciendo su posicionamiento como referente regional
                en alimentos naturales, nutritivos y sostenibles.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sección Valores Corporativos e Integrales */}
        <motion.section className="bg-white p-8 rounded-xl shadow-lg mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-[#e26d44] text-center mb-8">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-[#963f24] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-md">
                1
              </div> {/* Icono o número representativo */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad</h3>
              <p className="text-gray-600 text-sm">
                Compromiso con la calidad en cada etapa del proceso, ofreciendo granola natural, fresca y nutritiva.
              </p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-[#e26d44] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-md">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparencia</h3>
              <p className="text-gray-600 text-sm">
                Relaciones honestas y confiables, comunicando claramente el origen, procesos y beneficios.
              </p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-[#963f24] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-md">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Respeto</h3>
              <p className="text-gray-600 text-sm">
                Ambiente de trabajo basado en empatía, tolerancia y valoración de cada persona.
              </p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-[#e26d44] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-md">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Atención al Cliente</h3>
              <p className="text-gray-600 text-sm">
                Servicio amable, responsable y personalizado, superando las expectativas del consumidor.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Sección de CTA o Equipo (Opcional) */}
        <motion.section
          className="text-center py-12 bg-[#e26d44] text-white rounded-xl shadow-lg"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4">¿Listo para probar lo mejor del Meta?</h2>
          <p className="text-lg mb-6">Descubre nuestra línea de productos saludables y deliciosos.</p>
          <Link href="/products" className="bg-white text-[#e26d44] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
            Ver Productos
          </Link>
        </motion.section>
      </div>
    </motion.div>
  );
}