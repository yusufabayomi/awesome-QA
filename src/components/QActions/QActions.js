import { faSort, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Button from '../shared/Button/Button';
import Modal from '../shared/Modal/Modal';
import DeletePrompt from '../DeletePrompt/DeletePrompt';
import useToggle from '../../hooks/useToggle';
import { deleteAllQa, sortQa } from '../../actions';

const QActions = ({ deleteAllQa, sortQa }) => {
  const [showDeletePrompt, setShowDeletePrompt] = useToggle();

  const onDeleteAll = () => {
    deleteAllQa();
    setShowDeletePrompt();
  };

  return (
    <div className='row'>
      <div className='col'>
        <Button buttonText='Sort Questions' emitEvent={sortQa} buttonColor='green' icon={faSort} />
      </div>
      <div className='col'>
        <Button buttonText='Delete Questions' buttonColor='red' icon={faTrashAlt} emitEvent={setShowDeletePrompt} />
        <Modal show={showDeletePrompt} toggle={setShowDeletePrompt} title='Delete All Questions'>
          <DeletePrompt description='Are you sure you want to delete all questions? Questions deleted can not be retrieved.' yesEvent={onDeleteAll} noEvent={setShowDeletePrompt} />
        </Modal>
      </div>
    </div>
  );
};

export default connect(null, { deleteAllQa, sortQa })(QActions);
