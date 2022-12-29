import styles from "./Left.module.css";
import logo from "../../../images/logos/logo-blanco.png";

const LeftFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logoIM" />
      </div>
      <div className={styles.text}>
        <p>
          Artes Gráficas Modelo es una imprenta familiar. Contamos con 30 años
          en el rubro offset y entre otros servicios ofrecemos impresiones en
          digital para pequeños a medianos proyectos, en pequeño y gran formato,
          sobre papel, lona y vinilo entre otros, para lograr un abanico de
          soluciones para su proyecto.
        </p>
      </div>
    </div>
  );
};

export default LeftFooter;
