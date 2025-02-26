import { useState } from 'react';
import PropTypes from 'prop-types';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Lottie = ({ id, src, text, href}) => {
  const [dotLottieRefs, setDotLottieRefs] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const dotLottieRefCallback = (id, dotLottie) => {
    setDotLottieRefs(prevRefs => ({ ...prevRefs, [id]: dotLottie }));
  };

  const play = (id) => {
    if (dotLottieRefs[id]) {
      dotLottieRefs[id].play();
    }
  };

  const pauze = (id) => {
    if (dotLottieRefs[id]) {
      dotLottieRefs[id].pause();
    }
  }

  const handleMouseEnter = (id) => {
    setIsHovered(true);
    play(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    pauze(id);
  };

  return (
    <a 
    	href={href}
      target='_blank'
      id={id}
      className="icon"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <DotLottieReact
        src={src}
        dotLottieRefCallback={(dotLottie) => dotLottieRefCallback(id, dotLottie)}
      />
         <div className='tooltip'>
      {text}
    </div>
    </a>
  );
}
Lottie.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Lottie;