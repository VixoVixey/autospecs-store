import Button from "./Button";

export default function ProductCard({ product, onSelectProduct }) {
    const { name, price, category, image } = product;

    return (
        <article className="product-card">
            <div className="card-image-wrapper">
                <img src={image} alt={name} loading="lazy" />
                <span className="card-badge">{category}</span>
            </div>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-price">${price.toLocaleString("es-CL")}</p>
                <div className="card-actions">
                    <Button variant="primary" onClick={() => onSelectProduct(product)}>
                        Ver detalle
                    </Button>
                </div>
            </div>
        </article>
    );
}