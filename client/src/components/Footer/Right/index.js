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
          <p>Ventas Offset: <a href="https://api.whatsapp.com/send?phone=543815057391" target="_blank" rel="noopener noreferrer">3815057391</a></p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className={`${styles.icon} ${styles.iconWp}`}
          />
          <p>Ventas Digital: <a href="https://api.whatsapp.com/send?phone=543815114217" target="_blank" rel="noopener noreferrer">3815114217</a> / <a href="https://api.whatsapp.com/send?phone=543813273910" target="_blank" rel="noopener noreferrer">3813273910</a></p>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/imprentamodelotuc/"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className={`${styles.icon} ${styles.iconIg}`}
            />
          </a>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/imprentamodelotuc/"
            >
              /imprentamodelotuc
            </a>
          </p>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/neotech.tuc/"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className={`${styles.icon} ${styles.iconIg}`}
            />
          </a>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/neotech.tuc/"
            >
              /neotech.tuc
            </a>
          </p>
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
