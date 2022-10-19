import styles from './Home.module.css';
import About from './About';
import Features from './Features';
import Sponsors from './Sponsors';

const Home = () => {
    return(
        <div className={styles.container}>
            <About />
            <Features />
            <Sponsors />
        </div>
    );
}

export default Home;