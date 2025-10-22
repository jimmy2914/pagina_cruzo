"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore, CartItem } from "@/store/useCartStore"; // Asegúrate de que la ruta sea correcta
import { IoTrashOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"; // Iconos para una mejor UX

export default function CartPage() {
  const cartItems = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  // Calcula el total del carrito
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.selectedPresentation.price * item.quantity,
    0
  );

  const handleRemoveItem = (itemId: string, presentationSize: string) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto del carrito?")) {
      removeFromCart(itemId, presentationSize);
    }
  };

  const handleUpdateQuantity = (
    itemId: string,
    presentationSize: string,
    delta: number // +1 para aumentar, -1 para disminuir
  ) => {
    const itemToUpdate = cartItems.find(
      (item) => item.id === itemId && item.selectedPresentation.size === presentationSize
    );
    if (itemToUpdate) {
      const newQuantity = itemToUpdate.quantity + delta;
      if (newQuantity < 1) { // No permitir cantidades menores a 1
        handleRemoveItem(itemId, presentationSize);
      } else {
        updateQuantity(itemId, presentationSize, newQuantity);
      }
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-6 py-12 text-center min-h-[calc(100vh-200px)] flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-600 text-lg mb-8">Parece que aún no has añadido nada a tu carrito de compras.</p>
        <Link href="/products" className="bg-[#e26d44] text-white py-3 px-8 rounded-md text-lg hover:bg-[#963f24] transition duration-300">
          Explorar Productos
        </Link>
        <p className="mt-6 text-gray-500">
          <Link href="/" className="text-blue-500 hover:underline">Volver al inicio</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8 min-h-[calc(100vh-100px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Tu Carrito de Compras</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Lista de productos en el carrito */}
        <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.selectedPresentation.size}`} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
              {/* Imagen del producto */}
              <div className="flex-shrink-0 w-24 h-24 relative mr-4">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                )}
              </div>

              {/* Detalles del producto */}
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 text-sm">
                  Presentación: {item.selectedPresentation.size}
                </p>
                <p className="text-gray-700 font-medium">
                  ${item.selectedPresentation.price.toLocaleString()}
                </p>
              </div>

              {/* Controles de cantidad */}
              <div className="flex items-center mx-4">
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.selectedPresentation.size, -1)}
                  className="text-gray-600 hover:text-[#e26d44] transition-colors"
                >
                  <IoRemoveCircleOutline size={24} />
                </button>
                <span className="mx-3 text-black font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.selectedPresentation.size, 1)}
                  className="text-gray-600 hover:text-[#e26d44] transition-colors"
                >
                  <IoAddCircleOutline size={24} />
                </button>
              </div>

              {/* Precio subtotal por item y botón de eliminar */}
              <div className="flex flex-col items-end min-w-[120px]">
                <p className="text-lg font-bold text-gray-900">
                  ${(item.selectedPresentation.price * item.quantity).toLocaleString()}
                </p>
                <button
                  onClick={() => handleRemoveItem(item.id, item.selectedPresentation.size)}
                  className="text-red-600 hover:text-red-800 mt-2 transition-colors"
                  aria-label={`Eliminar ${item.name} ${item.selectedPresentation.size}`}
                >
                  <IoTrashOutline size={20} />
                </button>
              </div>
            </div>
          ))}
          {cartItems.length > 0 && (
            <div className="flex justify-end mt-6">
              <button
                onClick={() => clearCart()}
                className="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-1"
              >
                <IoTrashOutline size={20} /> Vaciar Carrito
              </button>
            </div>
          )}
        </div>

        {/* Resumen del Pedido */}
        <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6 h-fit">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Resumen del Pedido</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700">Subtotal:</span>
            <span className="font-medium text-gray-900">${cartTotal.toLocaleString()}</span>
          </div>
          {/* Puedes añadir más detalles como envío, impuestos, etc. aquí */}
          <div className="flex justify-between items-center border-t pt-4 mt-4">
            <span className="text-xl font-bold text-gray-800">Total:</span>
            <span className="text-2xl font-bold text-[#963f24]">${cartTotal.toLocaleString()}</span>
          </div>
          <button className="w-full bg-[#e26d44] text-white py-3 rounded-md text-lg mt-6 hover:bg-[#963f24] transition duration-300">
            Proceder al Pago
          </button>
          <Link href="/products" className="block text-center text-blue-500 hover:underline mt-4">
            Seguir Comprando
          </Link>
        </div>
      </div>
    </div>
  );
}