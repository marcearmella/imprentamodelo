import "./index.css";
import {Link} from "react-router-dom";

const CenterFooter = () => {
  return (
    <div className="container">
      <h1 className="title">Productos y Servicios</h1>
      <div className="Links-container">
        <Link to="/">Inicio</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </div>
  );
};

export default CenterFooter;
