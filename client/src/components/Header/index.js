import "./index.css";
import NavBar from "./NavBar";
import Banners from "./Banners";

const Header = () => {
  return (
    <div className="header-container">
      <NavBar />
      <Banners />
    </div>
  );
};

export default Header;
