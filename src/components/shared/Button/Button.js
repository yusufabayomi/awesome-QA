import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ buttonText, buttonColor, icon }) => {
  return (
    <button className={`button btn-${buttonColor} w-100`}>
      <FontAwesomeIcon icon={icon} /> {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Button;
