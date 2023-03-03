import Cards from "./Cards";
import { useRef, useEffect } from "react";
import styles from "./Services.module.css";
import img1 from "../../images/articulos/img1.jpeg";
import img2 from "../../images/articulos/img2.jpeg";
import img3 from "../../images/articulos/img3.jpeg";
import img4 from "../../images/articulos/img4.jpeg";
import img5 from "../../images/articulos/img5.jpeg";
import img6 from "../../images/articulos/img6.jpeg";
import img7 from "../../images/articulos/img7.jpeg";
import img8 from "../../images/articulos/img8.jpeg";
import img9 from "../../images/articulos/img9.jpeg";

const Services = ({setFlag}) => {
  const servicesRef = useRef(null);

  const gallery = [
    {
      img: img1,
      text: "Folletos"
    },{
      img: img2,
      text: "Calcomanías"
    },{
      img: img3,
      text: "Sublimación en tazas"
    },{
      img: img4,
      text: "Banners"
    },{
      img: img5,
      text: "Sublimación en tela"
    },{
      img: img6,
      text: "Tarjetas personales"
    },{
      img: img7,
      text: "Carteleras Escolares"
    },{
      img: img8,
      text: "Almanaques"
    },{
      img: img9,
      text: "Pines"
    }
  ];

  
  useEffect(()=>{
    setFlag(true);
    servicesRef.current && servicesRef.current.scrollIntoView();
  },[setFlag])

  return (
    <div className={styles.container} ref={servicesRef}>
      <div className={styles.title}>
        <h1>Conoce nuestros servicios</h1>
      </div>
      <Cards gallery={gallery} />
    </div>
  );
};

export default Services;
