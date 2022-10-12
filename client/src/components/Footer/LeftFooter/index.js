import "./index.css";
import logo from "../../../images/logoblanco.png";

const LeftFooter = () => {
  return (
    <div className="container-left">
      <h1 className="title">ARTES GRÁFICAS MODELO</h1>
      <div className="logo-text">
        <div className="logo-container">
          <img src={logo} alt="logoIM" />
        </div>
        <div className="text-zone">
          <p>
            Artes Gráficas Modelo es una imprenta familiar. Contamos con 30 años
            en el rubro offset y entre otros servicios ofrecemos impresiones en
            digital para pequeños a medianos proyectos, en pequeño y gran formato,
            sobre papel, lona y vinilo entre otros, para lograr un abanico de
            soluciones para su proyecto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftFooter;
