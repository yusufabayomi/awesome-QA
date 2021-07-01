import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ buttonText, buttonType }) => {
  return <button className={`button btn-${buttonType} w-100`}>{buttonText}</button>;
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
