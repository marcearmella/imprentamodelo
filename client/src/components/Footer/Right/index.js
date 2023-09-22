import styles from "./Right.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const RightFooter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contáctanos!</h1>
      <ul className={styles.contacts}>
        <li>
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className={`${styles.icon} ${styles.iconWp}`}
          />
          <p>Clientes Público General: <a href="https://api.whatsapp.com/send?phone=543813273910" target="_blank" rel="noopener noreferrer">3813273910</a></p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className={`${styles.icon} ${styles.iconWp}`}
          />
          <p>Clientes Comerciales / Gremio: <a href="https://api.whatsapp.com/send?phone=543815057391" target="_blank" rel="noopener noreferrer">3815057391</a></p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className={`${styles.icon} ${styles.iconMail}`}
          />
          <p>Offset: graficasmodelo@gmail.com</p>
        </li>
      </ul>
      <div className={styles.iconsBt}>
        <a href="https://www.instagram.com/imprentamodelotuc/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className={`${styles.icon} ${styles.iconBt}`}
          />
        </a>
        <a href="https://www.facebook.com/agm.tuc" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebookF}
            size="2x"
            className={`${styles.icon} ${styles.iconBt}`}
          />
        </a>
      </div>
    </div>
  );
};

export default RightFooter;
