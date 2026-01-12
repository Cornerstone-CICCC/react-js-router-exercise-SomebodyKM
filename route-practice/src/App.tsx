import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PageLayout from "./layouts/PageLayout";
import ProductsList from "./pages/Products/ProductsList ";
import ProductsDetail from "./pages/Products/ProductDetail ";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<ProductsDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
