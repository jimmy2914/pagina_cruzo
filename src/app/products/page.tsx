import ProductCard from "@/components/ProductCard"; // Ajusta la ruta
import { PRODUCTS } from "@/data/products"; // Ajusta la ruta

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-6 py-8" style={{ backgroundColor: "#EDE3D3" }}>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Nuestros Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}