import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const RightFooter = () => {
  return (
    <div className="container-right">
      <h1 className="title">Contáctanos!</h1>
      <ul className="contacts">
        <li>
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className="icon iconWp"
          />
          <p>3815057391 Ventas Offset</p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className="icon iconWp"
          />
          <p>3815114217 / 3813273910 Ventas Digital</p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="icon iconIg"
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
            className="icon iconIg"
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
            className="icon iconMail"
          />
          <p>Offset: graficasmodelo@gmail.com</p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="icon iconMail"
          />
          <p>Digital: neotech.tuc@gmail.com</p>
        </li>
      </ul>
    </div>
  );
};

export default RightFooter;
