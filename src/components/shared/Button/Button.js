import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './Button.css';

const propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.oneOf(['blue', 'red', 'green']).isRequired,
  emitEvent: PropTypes.func,
  disabled: PropTypes.bool,
  animateIcon: PropTypes.bool,
};

const defaultProps = {
  icon: null,
  disabled: false,
  animateIcon: false,
};

const Button = ({ buttonText, buttonColor, icon, emitEvent, disabled, animateIcon }) => {
  return (
    <button data-testid='button' disabled={disabled} className={`button btn-${buttonColor} w-100`} onClick={emitEvent}>
      {icon && <FontAwesomeIcon icon={icon} data-testid='buttonIcon' className={`${animateIcon && 'fa-spin'}`} />} {buttonText}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
