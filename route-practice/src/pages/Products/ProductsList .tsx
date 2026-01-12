import { useEffect, useState } from "react";
import { type Product } from "../../types/product.types";
import { Link } from "react-router";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>
              {p.title} - {p.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
