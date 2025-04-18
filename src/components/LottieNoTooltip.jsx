import PropTypes from "prop-types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Lottie.css";

const LottieNoTooltip = ({ id, src, alt }) => {
  return (
    <div id={id} className="icon">
      <DotLottieReact autoplay loop alt={alt} src={src} className="lottie" />
    </div>
  );
};

LottieNoTooltip.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default LottieNoTooltip;
