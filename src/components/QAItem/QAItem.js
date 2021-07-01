import { useState } from 'react';
import PropTypes from 'prop-types';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import QuestionButton from '../shared/QuestionButton/QuestionButton';
import Modal from '../shared/Modal/Modal';
import DeletePrompt from '../DeletePrompt/DeletePrompt';
import './QAItem.css';
import QuestionForm from '../QuestionForm/QuestionForm';

const QAItem = ({ qa: { question, answer } }) => {
  const [isOpen, setOpen] = useState(false);

  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const toggleShowDeletePrompt = () => setShowDeletePrompt(!setShowDeletePrompt);

  const [showEditForm, setShowEditForm] = useState(false);
  const toggleShowEditForm = () => setShowEditForm(!showEditForm);

  return (
    <>
      <div className='qa-wrapper'>
        <div className={`d-flex flex-row justify-content-between align-items-center qa-title ${isOpen ? 'open' : ''}`} onClick={() => setOpen(!isOpen)}>
          <div className='flex-fill'>{question}</div>
          <div>
            <QuestionButton icon={faPencilAlt} buttonText='Edit' />
            <button onClick={() => toggleShowEditForm()}>e</button>
            <QuestionButton icon={faTrashAlt} buttonText='Delete' />
            <button onClick={() => setShowDeletePrompt(!showDeletePrompt)}>d</button>
          </div>
        </div>
        <div className={`qa-item ${!isOpen ? 'collapsed' : ''}`}>
          <div className='qa-content'>{answer}</div>
        </div>
      </div>

      <Modal showModal={showDeletePrompt} toggleShowModal={toggleShowDeletePrompt} title='Delete Question'>
        <DeletePrompt description='Are you sure you want to delete this question? Questions deleted can not be retrieved.' />
      </Modal>

      <Modal showModal={showEditForm} toggleShowModal={toggleShowEditForm} title='Edit Question'>
        <QuestionForm />
      </Modal>
    </>
  );
};

QAItem.propTypes = {
  qa: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string,
  }).isRequired,
};

export default QAItem;
