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
        <h2>Datos de contacto</h2>
        <Data />
      </div>
      <div className={styles.form}>
        <h2>Envianos tu consulta</h2>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
