import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const RightFooter = () => {
  return (
    <div className="container">
      <h1 className="title">ARTES GRÁFICAS MODELO</h1>
      <div className="links-container">
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faWhatsapp}
              color="#6666"
              size="3x"
              className="icon"
            />
            <p>3815057391 Ventas Offset</p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faWhatsapp}
              color="#6666"
              size="3x"
              className="icon"
            />
            <p>3815114217 / 3813273910 Ventas Digital</p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              color="#6666"
              size="3x"
              className="icon"
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/imprentamodelotuc/"
            >
              imprentamodelotuc
            </a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              color="#6666"
              size="3x"
              className="icon"
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/neotech.tuc/"
            >
              neotech.tuc
            </a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#6666"
              size="3x"
              className="icon"
            />
            <p>Offset: graficasmodelo@gmail.com</p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#6666"
              size="3x"
              className="icon"
            />
            <p>Digital: neotech.tuc@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightFooter;
