import styles from "./Footer.module.css";
import LeftFooter from "./Left";
import CenterFooter from "./Center";
import RightFooter from "./Right";

const Footer = () => {
  return (
    <div className={styles.container}>
      <LeftFooter />
      <CenterFooter />
      <RightFooter />
    </div>
  );
};

export default Footer;
