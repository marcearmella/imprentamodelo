import "./index.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="" alt="logo" />
      </div>
      <div className="link-container">
        <Link to="/home">Inicio</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/Contact">Contacto</Link>
      </div>
    </div>
  );
};

export default Header;
