import "./index.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <h2>ARTES GRÁFICAS</h2>
        <h1>MODELO</h1>
      </div>
      <div className="link-container">
        <Link to="/">Inicio</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </div>
  );
};

export default Header;
