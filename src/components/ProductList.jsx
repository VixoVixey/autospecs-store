import ProductCard from "./ProductCard";

export default function ProductList({ products, onSelectProduct }) {
    if (products.length === 0) {
        return <p className="empty-msg">No se encontraron piezas o componentes coincidentes.</p>;
    }

    return (
        <section className="product-grid">
            {products.map((item) => (
                <ProductCard
                key={item.id}
                product={item}
                onSelectProduct={onSelectProduct}
                />
            ))}
        </section>
    );
}
