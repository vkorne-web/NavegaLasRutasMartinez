import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <span className="logo-text">TechStore</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/categoria/electronica">Electrónica</a></li>
        <li><a href="/categoria/ropa">Ropa</a></li>
        <li><a href="/categoria/hogar">Hogar</a></li>
        <li><a href="/categoria/deportes">Deportes</a></li>
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

