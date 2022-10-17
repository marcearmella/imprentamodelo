import styles from "./Center.module.css";
import {NavLink} from "react-router-dom";

const CenterFooter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Productos y Servicios</h1>
      <div className={styles.links}>
        <NavLink style={{textDecoration: 'none'}}  className={e => !e.isActive ? styles.link : styles.linkActive}  to="/" end>Inicio</NavLink>
        <NavLink style={{textDecoration: 'none'}}  className={e => !e.isActive ? styles.link : styles.linkActive}  to="/services">Servicios</NavLink>
        <NavLink style={{textDecoration: 'none'}}  className={e => !e.isActive ? styles.link : styles.linkActive}  to="/contact">Contacto</NavLink>
      </div>
    </div>
  );
};

export default CenterFooter;