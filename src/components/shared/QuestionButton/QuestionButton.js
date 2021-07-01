import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './QuestionButton.css';

const QuestionButton = ({ buttonText, icon }) => {
  return (
    <button
      data-test='questionButtonComponent'
      className='question-btn'
      onClick={(e) => {
        e.stopPropagation();
        console.log('click');
      }}>
      <FontAwesomeIcon icon={icon} /> {buttonText}
    </button>
  );
};

QuestionButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default QuestionButton;
