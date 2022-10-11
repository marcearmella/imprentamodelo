import "./index.css";
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
    <div className="nav-container" style={{
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s"
    }}>
      <div className="logo">
        <h2>ARTES GRÁFICAS</h2>
        <h1>MODELO</h1>
      </div>
      <div className="link-container">
        <NavLink className={e => !e.isActive ? "navLink" : "navLink-active"} to="/" end>Inicio</NavLink>
        <NavLink className={e => !e.isActive ? "navLink" : "navLink-active"} to="/services">Servicios</NavLink>
        <NavLink className={e => !e.isActive ? "navLink" : "navLink-active"} to="/contact">Contacto</NavLink>
      </div>
    </div>
  );
};

export default NavBar;