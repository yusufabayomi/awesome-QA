import { faSort, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../shared/Button/Button';
import Modal from '../shared/Modal/Modal';
import DeletePrompt from '../DeletePrompt/DeletePrompt';
import useToggle from '../../hooks/useToggle';

const QActions = () => {
  const [showDeletePrompt, setShowDeletePrompt] = useToggle();

  const emitEvent = () => console.log('eeeee');

  return (
    <div className='row'>
      <div className='col'>
        <Button buttonText='Sort Questions' buttonColor='green' icon={faSort} emitEvent={emitEvent} />
      </div>
      <div className='col'>
        <Button buttonText='Delete Questions' buttonColor='red' icon={faTrashAlt} emitEvent={setShowDeletePrompt} />
        <Modal show={showDeletePrompt} toggle={setShowDeletePrompt} title='Delete All Questions'>
          <DeletePrompt description='Are you sure you want to delete all questions? Questions deleted can not be retrieved.' />
        </Modal>
      </div>
    </div>
  );
};

export default QActions;
