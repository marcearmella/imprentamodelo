import styles from "./NavBar.module.css";
import React, { useState, useEffect, useRef } from "react";
import {NavLink, Link} from "react-router-dom";
// import logo from '../../../images/logos/logo-blanco.png';

const NavBar = () => {
  const [menu, setMenu] = useState('inactive');
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [top, setTop] = useState("70px");
  const screenSize = useRef(window.innerWidth);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#003362dd") : setnavColor("transparent");
    window.scrollY > 10 ? setTop("48px") : setTop("70px");
    if (screenSize.current > 1278) {
      window.scrollY > 10 ? setnavSize("6rem") : setnavSize("10rem");
    }else{
      window.scrollY > 10 ? setnavSize("3rem") : setnavSize("5rem");
    }
  };
  const takeSize = () => screenSize.current = window.innerWidth;

  useEffect(() => {
    //responsiveMenu();
    window.addEventListener('resize', takeSize);
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener('resize', takeSize);
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
          {/* <img style={{width: '100px'}} src={logo} alt="descripcion de la imagen" /> */}
        </div>
      </Link>
      <div className={`${styles.burger} ${menu === 'active' ? styles.active : styles.inactive}`} onClick={() => handlerMenu()}>
        <span className={styles.bar}></span>
      </div>
      <div style={{top: top, transition: "all 1s"}} className={`${styles.links} ${menu==='active' ? styles.openMenu : styles.closeMenu}`}>
        <NavLink className={e => !e.isActive ? styles.navLink : styles.navLinkActive} to="/" end><p onClick={() => setMenu('inactive')}>Inicio</p></NavLink>
        <NavLink className={e => !e.isActive ? styles.navLink : styles.navLinkActive} to="/services"><p onClick={() => setMenu('inactive')}>Servicios</p></NavLink>
        <NavLink className={e => !e.isActive ? styles.navLink : styles.navLinkActive} to="/contact"><p onClick={() => setMenu('inactive')}>Contacto</p></NavLink>
      </div>
    </div>
  );
};

export default NavBar;