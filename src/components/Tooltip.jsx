import PropTypes from 'prop-types';
import './Tooltip.css';

const Tooltip = ({ text }) => {
  return (
    <div className='tooltip'>
      {text}
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tooltip;