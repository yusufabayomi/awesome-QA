import { useState } from 'react';
import PropTypes from 'prop-types';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import QuestionButton from '../shared/QuestionButton/QuestionButton';
import './QAItem.css';

const QAItem = ({ qa: { question, answer } }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='qa-wrapper'>
      <div className={`d-flex flex-row justify-content-between align-items-center qa-title ${isOpen ? 'open' : ''}`} onClick={() => setOpen(!isOpen)}>
        <div className='flex-fill'>{question}</div>
        <div>
          <QuestionButton icon={faPencilAlt} buttonText='Edit' />
          <QuestionButton icon={faTrashAlt} buttonText='Delete' />
        </div>
      </div>
      <div className={`qa-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className='qa-content'>{answer}</div>
      </div>
    </div>
  );
};

QAItem.propTypes = {
  qa: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string,
  }).isRequired,
};

export default QAItem;
