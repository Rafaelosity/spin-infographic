import "./Background.css";
import backgroundVisual from "../assets/image/background-illustration.svg";
const Background = () => {
  return (
    <div className="background_wrapper">
      <img src={backgroundVisual} alt="" />
    </div>
  );
};

export default Background;
