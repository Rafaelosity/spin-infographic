import { useState } from 'react';
import PropTypes from 'prop-types';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Tooltip from './Tooltip';
import './Lottie.css';

const Lottie = ({ id, src, text, href }) => {
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

  const loop = (id) => {
    if (dotLottieRefs[id]) {
      dotLottieRefs[id].addEventListener('complete', () => {
        play(id);
      });
    }
  };

  const pause = (id) => {
    if (dotLottieRefs[id]) {
      dotLottieRefs[id].pause();
    }
  };

  const handleMouseEnter = (id) => {
    setIsHovered(true);
    play(id);
    loop(id);
  };

  const handleMouseLeave = (id) => {
    setIsHovered(false);
    pause(id);
  };

  return (
    <a 
      href={href}
      target='_blank'
      id={id}
      className={`icon ${id}`}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
    >
      <DotLottieReact
        src={src}
        dotLottieRefCallback={(dotLottie) => dotLottieRefCallback(id, dotLottie)}
      />
      <Tooltip text={text} />
    </a>
  );
};

Lottie.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Lottie;