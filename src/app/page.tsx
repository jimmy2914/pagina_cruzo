import Carousel from "../components/Carousel";
import ProductsPage from "./products/page";
export default function HomePage() {
  return (
    <main className="w-full">
      <Carousel />
      {/* Secciones: Nosotros, Productos destacados, Contacto */}
      <ProductsPage/>
    </main>
  );
}
