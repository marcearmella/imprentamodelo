import "./index.css";
import {NavLink} from "react-router-dom";

const CenterFooter = () => {
  return (
    <div className="container-center">
      <h1 className="title">Productos y Servicios</h1>
      <div className="links-container">
        <NavLink style={{textDecoration: 'none'}}  className={e => !e.isActive ? "link" : "link link-active"}  to="/" end>Inicio</NavLink>
        <NavLink style={{textDecoration: 'none'}}  className={e => !e.isActive ? "link" : "link link-active"}  to="/services">Servicios</NavLink>
        <NavLink style={{textDecoration: 'none'}}  className={e => !e.isActive ? "link" : "link link-active"}  to="/contact">Contacto</NavLink>
      </div>
    </div>
  );
};

export default CenterFooter;
