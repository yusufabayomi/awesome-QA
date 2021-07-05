import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import QuestionButton from '../shared/QuestionButton/QuestionButton';
import Modal from '../shared/Modal/Modal';
import DeletePrompt from '../DeletePrompt/DeletePrompt';
import QuestionForm from '../QuestionForm/QuestionForm';
import useToggle from '../../hooks/useToggle';
import { deleteQa, editQa } from '../../actions';
import './QAItem.css';

const propTypes = {
  qa: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string,
  }).isRequired,
};

const QAItem = ({ qa, deleteQa, editQa }) => {
  const { id, question, answer } = qa;
  const [isOpen, setOpen] = useToggle();
  const [showDeletePrompt, setShowDeletePrompt] = useToggle();
  const [showEditForm, setShowEditForm] = useToggle();

  const onSubmit = (values) => {
    editQa(values);
    setShowEditForm();
  };

  const onDelete = () => {
    deleteQa(id);
    setShowDeletePrompt();
  };

  return (
    <>
      <div className='qa-wrapper'>
        <div className={`d-flex flex-row justify-content-between align-items-center qa-title ${isOpen ? 'open' : ''}`} onClick={setOpen}>
          <div className='flex-fill'>{question}</div>
          <div>
            <QuestionButton icon={faPencilAlt} buttonText='Edit' emitEvent={setShowEditForm} />
            <QuestionButton icon={faTrashAlt} buttonText='Delete' emitEvent={setShowDeletePrompt} />
          </div>
        </div>
        <div className={`qa-item ${!isOpen ? 'collapsed' : ''}`}>
          <div className='qa-content'>{answer}</div>
        </div>
      </div>

      <Modal show={showDeletePrompt} toggle={setShowDeletePrompt} title='Delete Question'>
        <DeletePrompt description='Are you sure you want to delete this question? Questions deleted can not be retrieved.' noEvent={setShowDeletePrompt} yesEvent={onDelete} />
      </Modal>

      <Modal show={showEditForm} toggle={setShowEditForm} title='Edit Question'>
        <QuestionForm onSubmitProp={onSubmit} initialValues={qa} />
      </Modal>
    </>
  );
};

QAItem.propTypes = propTypes;
export default connect(null, { deleteQa, editQa })(QAItem);
