import {useRef} from "react";
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Form.module.css";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const refForm = useRef();

  const notifySuccess = () =>
    toast.success("✅ Correo enviado!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyFailure = () =>
    toast.failure("⚠️ Ups algo salio mal, intentalo de nuevo!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7p2pfp5",
        "template_le76uao",
        refForm.current,
        "y25EjIaGL9W54Jvg8"
      )
      .then(
        () => {
          notifySuccess();
          setTimeout(() => {
            window.location.reload(false);
          }, 5000);
        },
        () => {
          notifyFailure();
        }
      );
  };

  return (
    <form className={styles.container} ref={refForm} onSubmit={sendEmail}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ul className={styles.data}>
        <li>
          <input placeholder="Nombre" type="text" name="name" required />
        </li>
        <li>
          <input placeholder="Email" type="email" name="email" required />
        </li>
        <li>
          <input placeholder="Asunto" type="text" name="subject" required />
        </li>
        <li>
          <textarea
            placeholder="Deja tu mensaje"
            name="message"
            required
          ></textarea>
        </li>
      </ul>
      <div className={styles.send}>
        <input type="submit" className={styles.flatButton} value="Enviar" />
        <FontAwesomeIcon size="1x" className={styles.icon} icon={faEnvelope} />
      </div>
    </form>
  );
};

export default Form;
