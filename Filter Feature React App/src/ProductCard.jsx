export default function ProductCard({ product }) {
    return (
        <>
            <img src={product.image} alt={product.title} />
            <div className="card">
                <h3 className="title">{product.title}</h3>
                <p className= "category">{product.category}</p>
                <p className="desc">{product.descr}</p>
                <p className="price">${product.price}</p>
                <button className="buy-btn">Add to Cart</button>
            </div>
        </>
    );
}
