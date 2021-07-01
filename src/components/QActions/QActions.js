import { faSort, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../shared/Button/Button';

const QActions = () => {
  return (
    <div className='row'>
      <div className='col'>
        <Button buttonText='Sort Questions' buttonType='sort' icon={faSort} />
      </div>
      <div className='col'>
        <Button buttonText='Delete Questions' buttonType='delete' icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default QActions;
