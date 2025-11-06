import "./App.css";
import ProductCard from "./ProductCard";
import { products } from "./Data.jsx";
import { useState } from "react";

function App() {
    const [prods, setProds] = useState(products);
    function handleClick(e) {
        if (e.target.innerText === "All") {
            setProds(products);
            return;
        }
        const category = e.target.innerText;
        const filteredProducts = products.filter((product) => {
            return product.category === category;
        });
        setProds(filteredProducts);
    }
    return (
        <>
            <button onClick={handleClick}>Electronics</button>
            <button onClick={handleClick}>Accessories</button>
            <button onClick={handleClick}>Home Appliances</button>
            <button onClick={handleClick}>Sports</button>
            <button onClick={handleClick}>All</button>

            <div className="card-container">
                {prods.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default App;
