import "./HeaderLogo.css";
import logo from "../assets/image/logo.svg";

const HeaderLogo = () => {
  return (
    <div className="infographic_header">
      <div className="infographic_logo_wrapper">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default HeaderLogo;
