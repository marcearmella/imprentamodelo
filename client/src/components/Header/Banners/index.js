import React, {useEffect, useRef} from "react";
import s from "./Banners.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import banner1 from "../../../images/banners/foto1.png";
import banner2 from "../../../images/banners/foto2.png";

const Banners = () => {

  const slidesContainer = useRef(null);
  //const slidesInterval = useRef(null);

  const previous = () => {
    if(slidesContainer.current.children.length > 0){
      const index = slidesContainer.current.children.length - 1;
      const lastImg = slidesContainer.current.children[index];
      const scale = slidesContainer.current.children[0].offsetWidth;
      slidesContainer.current.insertBefore(lastImg, slidesContainer.current.firstChild);
      slidesContainer.current.style.transition = 'none';
      slidesContainer.current.style.transform = `translateX(-${scale}px)`;
      setTimeout(() => {
        slidesContainer.current.style.transition = `1500ms ease-in-out all`;
        slidesContainer.current.style.transform = `translateX(0)`;
      },30)
    }
  }

  const next = () => {
    if(slidesContainer.current.children.length > 0){
      const firstImg = slidesContainer.current.children[0];
      slidesContainer.current.style.transition = `1500ms ease-in-out all`;
      const scale = firstImg.offsetWidth;
      slidesContainer.current.style.transform = `translateX(-${scale}px)`;

      const transition = () => {
        slidesContainer.current.style.transition = 'none';
        slidesContainer.current.style.transform = `translateX(0)`;
        slidesContainer.current.appendChild(firstImg);
        slidesContainer.current.removeEventListener('transitionend', transition);
      }
      slidesContainer.current.addEventListener('transitionend', transition);
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      next();
    },6000);
    slidesContainer.current.addEventListener('mouseenter', () => {
      clearInterval(interval);
    });
    slidesContainer.current.addEventListener('mouseleave', () => {
      interval = setInterval(() => {
        next();
      },6000);
    })
  },[]);
  
  return (
    <div className={s.container}>
      <div className={s.slidesContainer} ref={slidesContainer}>
        <div className={s.slide}>
          <img src={banner1} alt="banner de la imprenta"/>
        </div>
        <div className={s.slide}>
          <img src={banner2} alt="banner de la imprenta"/>
        </div>
      </div>
      <div className={s.arrows}>
        <button onClick={previous}>
          <FontAwesomeIcon icon={faChevronLeft} size='4x' />
        </button>
        <button onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} size='4x' />
        </button>
      </div>
    </div>
  );
};
  
  export default Banners;