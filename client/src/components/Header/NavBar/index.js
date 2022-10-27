import styles from "./NavBar.module.css";
import React, { useState, useEffect } from "react";
import {NavLink, Link} from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState('inactive');
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#003362dd") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("10rem");
  };
  useEffect(() => {
    //responsiveMenu();
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handlerMenu = () => {
    if(menu === 'inactive'){
      setMenu('active');
    }else if(menu === 'active'){
      setMenu('inactive');
    }
  };

  return (
    <div className={styles.container} style={{
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s"
    }}>
      <Link style={{textDecoration: 'none', color: '#fff'}} to="/">
        <div className={styles.logo} onClick={() => setMenu('inactive')}>
          <h2>ARTES GRÁFICAS</h2>
          <h1>MODELO</h1>
        </div>
      </Link>
      <div className={`${styles.burger} ${menu === 'active' ? styles.active : styles.inactive}`} onClick={() => handlerMenu()}>
        <span className={styles.bar}></span>
      </div>
      <div className={`${styles.links} ${menu==='active' ? styles.openMenu : styles.closeMenu}`}>
        <NavLink className={e => !e.isActive ? styles.navLink : styles.navLinkActive} to="/" end><p onClick={() => setMenu('inactive')}>Inicio</p></NavLink>
        <NavLink className={e => !e.isActive ? styles.navLink : styles.navLinkActive} to="/services"><p onClick={() => setMenu('inactive')}>Servicios</p></NavLink>
        <NavLink className={e => !e.isActive ? styles.navLink : styles.navLinkActive} to="/contact"><p onClick={() => setMenu('inactive')}>Contacto</p></NavLink>
      </div>
    </div>
  );
};

export default NavBar;