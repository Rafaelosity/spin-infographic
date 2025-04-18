import "./headerLogo.css";
import logo from "../assets/image/Asset 4.svg";

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
