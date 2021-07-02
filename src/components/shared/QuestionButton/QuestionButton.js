import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './QuestionButton.css';

const propTypes = {
  buttonText: PropTypes.string.isRequired,
  emitEvent: PropTypes.func.isRequired,
};

const defaultProps = {
  icon: null,
};

const QuestionButton = ({ buttonText, icon, emitEvent }) => {
  const onClickButton = (event) => {
    event.stopPropagation();
    if (emitEvent) {
      emitEvent();
    }
  };
  return (
    <button data-testid='button' className='question-btn' onClick={(event) => onClickButton(event)}>
      {icon && <FontAwesomeIcon icon={icon} data-testid='buttonIcon' />} {buttonText}
    </button>
  );
};

QuestionButton.propTypes = propTypes;
QuestionButton.defaultProps = defaultProps;
export default QuestionButton;
