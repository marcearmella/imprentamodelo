import styles from "./NavBar.module.css";
import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#003362dd") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className={styles.container} style={{
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s"
    }}>
      <div className={styles.logo}>
        <h2>ARTES GRÁFICAS</h2>
        <h1>MODELO</h1>
      </div>
      <div className={styles.links}>
        <NavLink className={e => !e.isActive ? styles.navLink : styles.navLinkActive} to="/" end>Inicio</NavLink>
        <NavLink className={e => !e.isActive ? styles.navLink : styles.navLinkActive} to="/services">Servicios</NavLink>
        <NavLink className={e => !e.isActive ? styles.navLink : styles.navLinkActive} to="/contact">Contacto</NavLink>
      </div>
    </div>
  );
};

export default NavBar;