import styles from "./Header.module.css";
import NavBar from "./NavBar";
import Banners from "./Banners";

const Header = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Banners />
    </div>
  );
};

export default Header;
