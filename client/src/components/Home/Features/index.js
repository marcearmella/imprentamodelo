import styles from './Features.module.css';
import experiencia from '../../../images/features/experiencia.png';
import variedad from '../../../images/features/variedad.png';
import precio from '../../../images/features/precio.png';
import eficiencia from '../../../images/features/eficiencia.png';
import seriedad from '../../../images/features/seriedad.png';
import logistica from '../../../images/features/logistica.png';

const Features = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>¿Por qué elegirnos?</h1>
            </div>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <img src={experiencia} alt={"característica del negocio"} />
                    <div className={styles.text}>
                        <h2>Experiencia</h2>
                        <p>32 años nos respaldan</p>
                    </div>
                </div>
                <div className={styles.feature}>
                    <img src={variedad} alt={"característica del negocio"} />
                    <div className={styles.text}>
                        <h2>Variedad</h2>
                        <p>Variedad de servicios para su proyecto</p>
                    </div>
                </div>
                <div className={styles.feature}>
                    <img src={precio} alt={"característica del negocio"} />
                    <div className={styles.text}>
                        <h2>Precio/calidad</h2>
                        <p>Buscamos ofrecer la mejor calidad de impresión a un precio justo</p>
                    </div>
                </div>
                <div className={styles.feature}>
                    <img src={eficiencia} alt={"característica del negocio"} />
                    <div className={styles.text}>
                        <h2>Eficiencia</h2>
                        <p>Cumplimos con los plazos de entrega</p>
                    </div>
                </div>
                <div className={styles.feature}>
                    <img src={seriedad} alt={"característica del negocio"} />
                    <div className={styles.text}>
                        <h2>Seriedad y honestidad</h2>
                        <p>es nuestro compromiso</p>
                    </div>
                </div>
                <div className={styles.feature}>
                    <img src={logistica} alt={"característica del negocio"} />
                    <div className={styles.text}>
                        <h2>Logística</h2>
                        <p>Envíos a todo el país</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;