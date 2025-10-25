import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleCount(productId, deleta) {
    let newProds = products.map((product) => {
      return product.id === productId
        ? { ...product, count: product.count + deleta }
        : product;
    });
    setProducts(newProds.filter(product => product.count ));
  }
  //   let handleDecreaseClick = (productId) => {
  //     // TODO: Decrease the count of the product with the given id
  //     let newPros = products.map((product) => {
  //       return product.id === productId && product.count > 1
  //         ? { ...product, count: product.count - 1 }
  //         : product;
  //     });
  //   setProducts(newPros);
  // }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            style={{ margin: "5px" }}
            onClick={() => handleCount(product.id, 1)}
          >
            +
          </button>
          <button onClick={() => handleCount(product.id, -1)}>-</button>
        </li>
      ))}
    </ul>
  );
}
