import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import Button from '../shared/Button/Button';
import './DeletePrompt.css';

const DeletePrompt = ({ description }) => {
  return (
    <div>
      <p className='text-center prompt-description'>{description}</p>
      <div className='row'>
        <div className='col'>
          <Button buttonText='No' icon={faThumbsDown} buttonColor='red' />
        </div>
        <div className='col'>
          <Button buttonText='Yes' icon={faThumbsUp} buttonColor='blue' />
        </div>
      </div>
    </div>
  );
};

export default DeletePrompt;
