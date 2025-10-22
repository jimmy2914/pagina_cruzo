"use client";
import Link from "next/link";
import { useCartStore } from "../store/useCartStore";

export default function Navbar() {
  const items = useCartStore((s) => s.items);
  const qty = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    // Fondo de la navbar con el color #963f24
    <nav className="bg-[#FFF4E6] shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white"> {/* El texto del Link del logo debe ser blanco para contrastar */}
          <img src="/images/logo_cruzo.png" alt="Bienvenido a Mi Empresa" className="h-20 w-auto drop-shadow-lg" />
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          {/* Los enlaces del menú usarán el color #e26d44 y blanco en hover */}
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
    </nav>
  );
}