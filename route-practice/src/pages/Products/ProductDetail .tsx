import { useEffect, useState } from "react";
import { type ProductInfo } from "../../types/productInfo.types";
import { useNavigate, useParams } from "react-router";

const ProductDetail = () => {
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    getProduct();
  }, [id]);

  const handleBack = () => {
    navigate("/products");
  };

  return (
    <div>
      {product && (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </>
      )}

      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default ProductDetail;
