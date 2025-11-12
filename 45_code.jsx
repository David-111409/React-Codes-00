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

// import { createContext } from "react";
// import Product from "./Product";
// // export const proContext = createContext();
// function App() {
//   // return <proContext.Provider value={"Khaled"}>
//   return <Product name="Khaled Dawoud" />;
//   {
//     /* </proContext.Provider>; */
//   }
// }
// // // Product.js
// // import Child from "./Child";
// // function Product({name}) {
// //   return <Child name = {name}/>;
// // }
// // file Child.js
// // import { useContext } from "react";
// // import { proContext } from "./App";
// // function Child({name}) {
// //     // const name = useContext(proContext);
// //   return <h1>Hello, {name}</h1>;
// // }

// // export default Child;
// // export default Product;
// export default App;
