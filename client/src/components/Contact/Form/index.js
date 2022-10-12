import {useRef} from "react";
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="form-container">
      <div className="contact-form">
        <form ref={refForm} onSubmit={sendEmail}>
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

          <ul className="form-ul">
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
            <li>
              <input type="submit" className="flat-button" value="Enviar" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Form;
