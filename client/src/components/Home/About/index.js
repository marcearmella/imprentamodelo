import styles from './About.module.css';
import video from '../../../videos/imprenta-video.mp4';
import logo from '../../../images/logo.png';

const About = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Acerca de nosotros</h1>
            </div>
            <div className={styles.boxes}>
                <div className={styles.videoContainer} >
                    <video src={video} controls={true} />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.text}>
                        <p>
                            &nbsp;&nbsp;&nbsp;Somos una empresa familiar con más de 30 años de trayectoria en el rubro gráfico. Nuestro fuerte es la impresión en offset, pero también ofrecemos servicios de impresión digital de pequeño y gran formato, impresión de lonas, gigantografías, entre otros para lograr un abanico de soluciones para su proyecto.
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;Nuestro principal objetivo es cuidar la buena imagen de tu empresa o emprendimiento a través de nuestros servicios de impresión.
                        </p>
                    </div>
                    <img src={logo} alt="logo de la imprenta"/>
                </div>
            </div>
        </div>
    );
}

export default About;