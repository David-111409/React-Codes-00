// import { useState, useEffect } from "react";
// import Product from "./Product";
// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <Product key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// function Product({ product }) {
//   return (
//     <div className="card">
//       <img src={product.image} alt={product.title} />
//       <h2 className="title">{product.title}</h2>
//       <p className="product-desc">{product.description}</p>
//       <p className="price">${product.price}</p>
//       <button onClick={() => console.log("Add to Cart", product.title)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default Product;
