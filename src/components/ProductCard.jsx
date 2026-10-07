export default function ProductCArd({ product }) {
    const { title, price, category, thumbnail, rating } = product;

    return (
        <article className="product-card">
            <div className="card-thumb">
                <img src={thumbnail} alt={title} loading="lazy" />
                <span className="category-pill">{category}</span>
            </div>
            <div className="card-info">
                <h3 className="card-title">{title}</h3>
                <div className="class-meta">
                    <span className="rating">⭐ {rating}</span>
                    <span className="price">${price.toLocaleString("en-US")}</span>
                </div>
            </div>
        </article>
    );
}