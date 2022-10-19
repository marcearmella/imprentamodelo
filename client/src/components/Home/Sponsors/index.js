import styles from './Sponsors.module.css';
import img1 from '../../../images/sponsors/1.png';
import img2 from '../../../images/sponsors/2.png';
import img3 from '../../../images/sponsors/3.png';
import img4 from '../../../images/sponsors/4.png';
import img5 from '../../../images/sponsors/5.png';
import img6 from '../../../images/sponsors/6.png';
import img7 from '../../../images/sponsors/7.png';
import img8 from '../../../images/sponsors/8.png';
import img9 from '../../../images/sponsors/9.png';
import img10 from '../../../images/sponsors/10.png';
import img11 from '../../../images/sponsors/11.png';
import img12 from '../../../images/sponsors/12.png';
import {useRef, useEffect} from 'react';

const Sponsors = () => {
    let key = 0;
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    const sponsors = useRef(null);

    const next = () => {
        const first = sponsors.current.children[0];
        const scale = first.offsetWidth;
        sponsors.current.style.transition = `1000ms linear`;
        sponsors.current.style.transform = `translateX(-${scale + 40}px)`;
        const transition = () => {
            sponsors.current.style.transition = 'none';
            sponsors.current.style.transform = `translateX(0)`;
            sponsors.current.appendChild(first);
            sponsors.current.removeEventListener('transitionend', transition);
        }
        sponsors.current.addEventListener('transitionend', transition);
    }

    useEffect(()=>{
        let interval = null;
        function startInterval(){
            interval = setInterval(()=>{
                sponsors.current && next();
            },4000);
        }
        function stopInterval(){
            clearInterval(interval);
        }

        startInterval();

        sponsors.current.addEventListener('mouseenter', () => {
            stopInterval();
        });

        sponsors.current.addEventListener('mouseleave', () => {
            startInterval();
        });

        return () => {
            stopInterval();
        }
    },[]);

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Confiaron en nosotros</h1>
            </div>
            <div className={styles.sponsorsCont}>
                <div className={styles.sponsors} ref={sponsors}>
                    {
                        !images ? <p style={{textAlign: 'center'}}>...</p> : images.map(e => {
                            return(
                            <div className={styles.sponsor} key={key++}>
                                <img src={e} alt={'logo de empresa afiliada'} />
                            </div>)
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Sponsors;