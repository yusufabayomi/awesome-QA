import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './Button.css';

const propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.oneOf(['blue', 'red', 'green']).isRequired,
  emitEvent: PropTypes.func,
};

const defaultProps = {
  icon: null,
};

const Button = ({ buttonText, buttonColor, icon, emitEvent }) => {
  return (
    <button data-testid='button' className={`button btn-${buttonColor} w-100`} onClick={emitEvent}>
      {icon && <FontAwesomeIcon icon={icon} data-testid='buttonIcon' />} {buttonText}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
