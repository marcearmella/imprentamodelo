import styles from './Home.module.css';
import About from './About';
import Features from './Features';
import Sponsors from './Sponsors';
import { useRef, useEffect } from "react";

const Home = ({flag}) => {
    const homeRef = useRef(null);
    
    useEffect(()=>{
        flag && homeRef.current.scrollIntoView({block: "start", behavior: "smooth"});
    },[flag])

    return(
        <div className={styles.container} ref={homeRef}>
            <About />
            <Features />
            <Sponsors />
        </div>
    );
}

export default Home;