"use client";

import { useState } from "react";
import { Product, Presentation } from "@/data/products"; // Asegúrate de ajustar la ruta
import { useCartStore } from "@/store/useCartStore"; // Asegúrate de ajustar la ruta

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedPresentation, setSelectedPresentation] = useState(product.presentations[0]);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    // Construir el objeto CartItem para añadir al carrito
    const itemToAdd = {
      ...product, // Copia todas las propiedades del producto
      selectedPresentation: selectedPresentation, // Añade la presentación seleccionada
      quantity: quantity, // Añade la cantidad seleccionada
    };

    // Llama a la acción addToCart de tu store
    addToCart(itemToAdd);

    // Opcional: Puedes añadir una confirmación o resetear la cantidad si lo deseas
    console.log(`Añadido al carrito: ${quantity} x ${product.name} (${selectedPresentation.size})`);
    // setQuantity(1); // Para resetear la cantidad después de añadir
  };

  return (
    <div className="p-4 flex flex-col flex-grow border border-gray-200 rounded-lg shadow-md bg-[#DCC9B9]">
      {/* Imagen del producto */}
      {product.image && (
        <div className="mb-4 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-cover rounded-md"
          />
        </div>
      )}

      {/* Nombre del producto */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2 flex-grow">
        {product.name}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 text-sm mb-3">
        {product.description}
      </p>

      {/* Ingredientes */}
      <div className="mb-3">
        <p className="text-sm font-medium text-gray-700">Ingredientes:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm ml-4">
          {product.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Presentaciones */}
      <div className="mb-3">
        <label htmlFor={`presentation-${product.id}`} className="block text-sm font-medium text-gray-700">
          Presentación:
        </label>
        <select
          id={`presentation-${product.id}`}
          value={selectedPresentation.size}
          onChange={(e) => {
            const newSize = e.target.value;
            const newPresentation = product.presentations.find(p => p.size === newSize);
            if (newPresentation) {
              setSelectedPresentation(newPresentation);
            }
          }}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white text-black"
        >
          {product.presentations.map((p) => (
            <option key={p.size} value={p.size}>
              {p.size} - ${p.price.toLocaleString()}
            </option>
          ))}
        </select>
      </div>

      {/* Precio (se muestra el precio de la presentación seleccionada) */}
      <div className="text-2xl font-bold text-[#e26d44] mb-3">
        ${selectedPresentation.price.toLocaleString()}
      </div>

      {/* Cantidad */}
      <div className="mb-4 flex items-center">
        <label htmlFor={`quantity-${product.id}`} className="mr-3 text-sm font-medium text-gray-700">
          Cantidad:
        </label>
        <input
          type="number"
          id={`quantity-${product.id}`}
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-20 border border-gray-300 rounded-md p-2 text-center bg-white text-black"
        />
      </div>

      {/* Botón Añadir al carrito */}
      <button
        onClick={handleAddToCart}
        className="mt-auto bg-[#963f24] text-white py-2 px-4 rounded-md hover:bg-[#e26d44] transition duration-300"
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductCard;