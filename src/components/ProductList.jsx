import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <p>No se encontraron productos que coincidan con la búsqueda.</p>
      </div>
    );
  }

  return (
    <section className="products-grid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </section>
  );
}