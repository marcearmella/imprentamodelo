import CenterFooter from "./CenterFooter";
import "./index.css";
import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";

const Footer = () => {
  return (
    <div className="general-container">
      <LeftFooter />
      <CenterFooter />
      <RightFooter />
    </div>
  );
};

export default Footer;
