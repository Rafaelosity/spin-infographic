import PropTypes from "prop-types";
import "./Card.css";
import CloseBtn from "./buttons/CloseBtn.jsx";
import LottieNoTooltip from "./LottieNoTooltip.jsx";

const Card = ({ title, detail_text, src, id, onClose }) => {
  return (
    <div className="card_wrapper">
      <div className="card_content">
        <div className="card_header">
          <h1 className="card_title">{title}</h1>
          <p className="card_details">{detail_text}</p>
        </div>
        <div className="card_image_wrapper">
          <LottieNoTooltip src={src} id={id} />
        </div>
        <div className="card_menu_btns">
          <button className="card_btn" onClick={onClose}>
            <CloseBtn />
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  detail_text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Card;
