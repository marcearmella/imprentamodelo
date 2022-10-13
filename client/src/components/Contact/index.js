import Data from "./Data";
import Form from "./Form";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
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
