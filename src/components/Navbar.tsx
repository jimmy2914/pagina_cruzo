"use client";
import Link from "next/link";
import { useCartStore } from "../store/useCartStore";
import { useState } from "react";

export default function Navbar() {
  const items = useCartStore((s) => s.items);
  const qty = items.reduce((sum, i) => sum + i.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFF4E6] shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          <img src="/images/logo_cruzo.png" alt="Bienvenido a Mi Empresa" className="h-20 w-auto drop_shadow-lg" />
        </Link>

        {/* Botón de hamburguesa para móviles */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Menú de navegación para escritorio/tablet (SIEMPRE OCULTO EN MÓVILES) */}
        <div className="hidden md:flex items-center gap-6"> {/* Agregamos 'hidden' para ocultar siempre en móviles */}
          <Link href="/" className="text-black hover:text-[#e26d44]">Inicio</Link>
          <Link href="/nosotros" className="text-black hover:text-[#e26d44]">Nosotros</Link>
          <Link href="/products" className="text-black hover:text-[#e26d44]">Productos</Link>
          <Link href="/recetario" className="text-black hover:text-[#e26d44]">Recetario</Link>
          <Link href="/contacto" className="text-black hover:text-[#e26d44]">Contáctenos</Link>

          {/* Carrito */}
          <Link href="/cart" className="relative text-black hover:text-[#e26d44]">
            Carrito
            {qty > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {qty}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Menú desplegable para móviles (SOLO VISIBLE CUANDO isOpen ES TRUE Y EN MÓVILES) */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-[#FFF4E6] py-2 w-full absolute left-0`}> {/* Añadido 'w-full absolute left-0' */}
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="text-black hover:text-[#e26d44] py-1" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/nosotros" className="text-black hover:text-[#e26d44] py-1" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <Link href="/products" className="text-black hover:text-[#e26d44] py-1" onClick={() => setIsOpen(false)}>Productos</Link>
          <Link href="/recetario" className="text-black hover:text-[#e26d44] py-1" onClick={() => setIsOpen(false)}>Recetario</Link>
          <Link href="/contacto" className="text-black hover:text-[#e26d44] py-1" onClick={() => setIsOpen(false)}>Contáctenos</Link>
          <Link href="/cart" className="relative text-black hover:text-[#e26d44] py-1" onClick={() => setIsOpen(false)}>
            Carrito
            {qty > 0 && (
              <span className="absolute -top-1 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {qty}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}