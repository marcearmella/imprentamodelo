import Data from "./Data";
import Form from "./Form";
import styles from "./Contact.module.css";
import { useRef, useEffect } from "react";

const Contact = ({setFlag}) => {
  const contactRef = useRef(null);

  useEffect(()=>{
    contactRef.current && contactRef.current.scrollIntoView({block: "start", behavior: "smooth"});
  },[])

  return (
    <div className={styles.container} ref={contactRef}>
      <div className={styles.data}>
        <div className={styles.title}>
          <h1>Datos de contacto</h1>
        </div>
        <Data />
      </div>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Envianos tu consulta</h1>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
