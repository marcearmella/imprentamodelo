import styles from "./Right.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
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
          <p>3815057391 Ventas Offset</p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className={`${styles.icon} ${styles.iconWp}`}
          />
          <p>3815114217 / 3813273910 Ventas Digital</p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className={`${styles.icon} ${styles.iconIg}`}
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/imprentamodelotuc/"
          >
            /imprentamodelotuc
          </a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className={`${styles.icon} ${styles.iconIg}`}
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/neotech.tuc/"
          >
            /neotech.tuc
          </a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className={`${styles.icon} ${styles.iconMail}`}
          />
          <p>Offset: graficasmodelo@gmail.com</p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className={`${styles.icon} ${styles.iconMail}`}
          />
          <p>Digital: neotech.tuc@gmail.com</p>
        </li>
      </ul>
    </div>
  );
};

export default RightFooter;
