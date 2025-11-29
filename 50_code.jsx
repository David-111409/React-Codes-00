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

    function handleClick(productId, value) {
        if (value === 1) {
            setProducts((prevState) =>
                prevState.map((product) => {
                    if (product.id === productId) {
                        return {
                            ...product,
                            count: product.count + 1,
                        };
                    }
                    return product;
                })
            );
        }

        if (value === -1) {
            setProducts((prevState) =>
                prevState.reduce((acc, product) => {
                    if (product.id === productId) {
                        if (product.count > 1) {
                            acc.push({
                                ...product,
                                count: product.count - 1,
                            });
                        }
                    } else {
                        acc.push(product);
                    }
                    return acc;
                }, [])
            );
        }
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} (<b>{product.count}</b>)
                    <button
                        style={{ padding: "5px" }}
                        onClick={() => {
                            handleClick(product.id, 1);
                        }}
                    >
                        +
                    </button>
                    <button
                        style={{ margin: "10px", padding: "5px" }}
                        onClick={() => handleClick(product.id, -1)}
                    >
                        -
                    </button>
                </li>
            ))}
        </ul>
    );
}
