"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Para animaciones sutiles
import React from "react"; // Ya no necesitamos useState para formData en este enfoque
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

export default function ContactenosPage() {

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
          Contáctanos
        </motion.h1>

        {/* Sección de Información de Contacto */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16 bg-white p-8 rounded-xl shadow-lg"
          variants={itemVariants}
        >
          <div className="text-gray-700 leading-relaxed">
            <motion.h2 className="text-3xl font-bold text-[#e26d44] mb-4" variants={itemVariants}>
              Estamos aquí para ti
            </motion.h2>
            <motion.p className="mb-4" variants={itemVariants}>
              ¿Tienes alguna pregunta, sugerencia o simplemente quieres saber más sobre nuestros productos?
              ¡No dudes en contactarnos! Nuestro equipo está listo para ayudarte.
            </motion.p>

            <div className="space-y-4 mt-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-[#963f24] mb-1">Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@cruzodelmeta.com" className="text-blue-600 hover:underline">
                    cruzopremium@gmail.com
                  </a>
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-[#963f24] mb-1">Teléfono</h3>
                <p className="text-gray-700">
                  <a href="tel:+573201234567" className="text-blue-600 hover:underline">
                    +57 313 4824606
                  </a>
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-[#963f24] mb-1">Dirección</h3>
                <p className="text-gray-700">
                  Calle 16 N° 1C - 96 Villa Reina
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-[#963f24] mb-1">Horario de Atención</h3>
                <p className="text-gray-700">
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                </p>
              </motion.div>
            </div>
          </div>

          {/* Sección del Formulario de Contacto */}
          <motion.div className="bg-[#e26d44] p-8 rounded-xl shadow-lg" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Envíanos un Mensaje</h2>
            {/* CAMBIOS AQUÍ: `action` y `method`, eliminado `onSubmit` */}
            <form action="https://formspree.io/f/mrboywqy" method="POST" className="space-y-6"> {/* ¡REEMPLAZA xyzaqrwe con tu propio ID de Formspree! */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Mantener el atributo `name` es crucial para Formspree
                  // Eliminados `value` y `onChange`
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#963f24]"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="_replyto" // Formspree usa `_replyto` para el email del remitente
                  // Eliminados `value` y `onChange`
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#963f24]"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  // Eliminados `value` y `onChange`
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#963f24]"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Tu Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  // Eliminados `value` y `onChange`
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#963f24]"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-[#963f24] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#7a321d] transition duration-300"
                // Eliminado `disabled={isSubmitting}`
                variants={itemVariants}
              >
                Enviar Mensaje
              </motion.button>
              {/* Eliminado el párrafo submitMessage, Formspree gestionará la confirmación */}
            </form>
          </motion.div>
        </motion.section>

        {/* Sección de CTA o Redes Sociales (Opcional) */}
        <motion.section
          className="text-center py-12 bg-[#963f24] text-white rounded-xl shadow-lg"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Síguenos en Redes Sociales</h2>
          <p className="text-lg mb-6">Conéctate con nosotros y descubre nuestras últimas novedades.</p>
          <div className="flex justify-center space-x-6">
            <Link href="https://www.facebook.com/profile.php?id=61579025093574" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e26d44] transition duration-300 text-4xl">
              <FaFacebookSquare/> 
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com/cruzo_premium/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e26d44] transition duration-300 text-4xl">
              <FaInstagramSquare/>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <p className="mt-8 text-sm opacity-80">
            ¿Prefieres algo más rápido? Envíanos un mensaje directo por Instagram.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
}