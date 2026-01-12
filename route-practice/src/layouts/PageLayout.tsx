import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
