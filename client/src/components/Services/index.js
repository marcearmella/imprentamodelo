import Cards from "./Cards";
import styles from "./Services.module.css";

const Services = () => {
  const gallery = [
    {
      img: "https://estnn.com/wp-content/uploads/2022/05/airborn-studios-roadhog-01-e1651853459522.jpg",
    },
    {
      img: "https://earlygame.com/uploads/images/_1200x630_crop_center-center_82_none/overwatch-2-heroes_2022-09-29-122845_qywk.jpg?mtime=1664454525",
    },
    {
      img: "https://top-mmo.fr/wp-content/uploads/2022/09/overwatch-2-heroes-battle-pass.jpg",
    },
    {
      img: "https://assets2.rockpapershotgun.com/overwatch-2-kiriko-2.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/overwatch-2-kiriko-2.jpg",
    },
    {
      img: "https://assets2.rockpapershotgun.com/overwatch-2-sombra-face.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/overwatch-2-sombra-face.jpg",
    },
    {
      img: "https://s.yimg.com/os/creatr-uploaded-images/2022-09/45a5b5a0-2fb4-11ed-9d59-b967dd336241",
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Conoce Nuestros Servicios</h2>
      <Cards gallery={gallery} />
    </div>
  );
};

export default Services;
