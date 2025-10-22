// store/useCartStore.ts

import { create } from "zustand";
import { Product, Presentation } from "@/data/products"; // Importa los tipos

// Define el tipo de un ítem en el carrito
export type CartItem = Product & {
  selectedPresentation: Presentation; // La presentación específica seleccionada
  quantity: number;
};

interface CartState {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'> & {id: string}) => void; // El ID ya viene en el item.
  removeFromCart: (itemId: string, presentationSize: string) => void; // Necesitamos el ID y la presentación
  updateQuantity: (itemId: string, presentationSize: string, newQuantity: number) => void;
  clearCart: () => void;
  // Puedes añadir más estados y acciones si lo necesitas
}

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addToCart: (newItem) =>
    set((state) => {
      // Busca si el producto con la MISMA presentación ya existe en el carrito
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.selectedPresentation.size === newItem.selectedPresentation.size
      );

      if (existingItemIndex > -1) {
        // Si existe, actualiza la cantidad
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return { items: updatedItems };
      } else {
        // Si no existe, agrégalo como un nuevo ítem
        return { items: [...state.items, newItem] };
      }
    }),

  removeFromCart: (itemId, presentationSize) =>
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === itemId && item.selectedPresentation.size === presentationSize)
      ),
    })),

  updateQuantity: (itemId, presentationSize, newQuantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId && item.selectedPresentation.size === presentationSize
          ? { ...item, quantity: newQuantity }
          : item
      ),
    })),

  clearCart: () => set({ items: [] }),
}));