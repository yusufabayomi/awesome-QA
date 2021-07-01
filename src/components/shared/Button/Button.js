import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ buttonText, buttonType, icon }) => {
  return (
    <button className={`button btn-${buttonType} w-100`}>
      <FontAwesomeIcon icon={icon} /> {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Button;
