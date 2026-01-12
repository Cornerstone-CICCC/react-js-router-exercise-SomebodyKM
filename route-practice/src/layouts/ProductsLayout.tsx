import { Outlet, Link } from "react-router";

const ProductsLayout = () => {
  return (
    <div>
      <h1>Products</h1>

      <nav>
        <Link to="/products">Product List</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default ProductsLayout;
