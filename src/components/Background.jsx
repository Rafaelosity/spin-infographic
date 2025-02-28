import image from "../assets/image/background-01.svg";
import "./Background.css";


const Background = () => {
  return (
    <div className="background_wrapper">
      <img className="background" src={image} alt="" />
    </div>
  )
}

export default Background
