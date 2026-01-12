import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <menu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
