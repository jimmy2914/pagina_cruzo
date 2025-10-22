"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Para animaciones sutiles
import React, { useState } from "react"; // Para manejar el estado del formulario
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

export default function ContactenosPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Aquí simularías el envío del formulario a tu backend o un servicio de email.
    // En una aplicación real, usarías una API (ej. /api/contact) o un servicio externo (SendGrid, EmailJS, etc.)
    try {
      // Simulación de una llamada a la API
      console.log("Datos del formulario enviados:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula un retraso de red

      setSubmitMessage("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Limpiar el formulario
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitMessage("Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
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
                    info@cruzodelmeta.com
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
                  Calle Principal #123, Restrepo, Meta, Colombia
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#963f24]"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-[#963f24] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#7a321d] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
                variants={itemVariants}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </motion.button>
              {submitMessage && (
                <motion.p
                  className={`mt-4 text-center ${
                    submitMessage.includes("éxito") ? "text-green-200" : "text-red-200"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {submitMessage}
                </motion.p>
              )}
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
              {/* Icono de Facebook (puedes usar un componente de icono real como de react-icons) */}
              <FaFacebookSquare/> 
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com/cruzo_premium/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e26d44] transition duration-300 text-4xl">
              {/* Icono de Instagram */}
              <FaInstagramSquare/>
              <span className="sr-only">Instagram</span>
            </Link>
            {/* Agrega más redes sociales si es necesario */}
          </div>
          <p className="mt-8 text-sm opacity-80">
            ¿Prefieres algo más rápido? Envíanos un mensaje directo por Instagram.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
}