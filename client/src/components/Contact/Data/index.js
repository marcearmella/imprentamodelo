import styles from "./Data.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Data = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>
          <FontAwesomeIcon className={styles.icons} icon={faPhone} />
          Numero de Celular
        </h3>
        <p>+5493813273910</p>
      </div>
      <div className={styles.info}>
        <h3>
          <FontAwesomeIcon className={styles.icons} icon={faEnvelope} />
          Correo electronico
        </h3>
        <p>graficasmodelo@gmail.com</p>
      </div>
      <div className={styles.info}>
        <h3>
          <FontAwesomeIcon className={styles.icons} icon={faMapMarkedAlt} />
          Estamos en
        </h3>
        <p>San Miguel de Tucumán</p>
      </div>
    </div>
  );
};

export default Data;
