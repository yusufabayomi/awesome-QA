import { useState } from 'react';
import { faSort, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../shared/Button/Button';
import Modal from '../shared/Modal/Modal';
import DeletePrompt from '../DeletePrompt/DeletePrompt';

const QActions = () => {
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const toggleShowDeletePrompt = () => setShowDeletePrompt(!setShowDeletePrompt);

  return (
    <div className='row'>
      <div className='col'>
        <Button buttonText='Sort Questions' buttonColor='green' icon={faSort} />
      </div>
      <div className='col'>
        <Button buttonText='Delete Questions' buttonColor='red' icon={faTrashAlt} />
        <button onClick={() => setShowDeletePrompt(!showDeletePrompt)}>ddd</button>
        <Modal showModal={showDeletePrompt} toggleShowModal={toggleShowDeletePrompt} title='Delete All Questions'>
          <DeletePrompt description='Are you sure you want to delete all questions? Questions deleted can not be retrieved.' />
        </Modal>
      </div>
    </div>
  );
};

export default QActions;
