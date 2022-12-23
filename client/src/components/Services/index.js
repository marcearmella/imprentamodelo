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
    },{
      img: img2,
    },{
      img: img3,
    },{
      img: img4,
    },{
      img: img5,
    },{
      img: img6,
    },{
      img: img7,
    },{
      img: img8,
    },{
      img: img9,
    }
  ];

  
  useEffect(()=>{
    setFlag(true);
    servicesRef.current && servicesRef.current.scrollIntoView();
  },[setFlag])

  return (
    <div className={styles.container} ref={servicesRef}>
      <h2>Conoce Nuestros Servicios</h2>
      <Cards gallery={gallery} />
    </div>
  );
};

export default Services;
