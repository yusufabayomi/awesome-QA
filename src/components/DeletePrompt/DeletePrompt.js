import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import './DeletePrompt.css';

const propTypes = {
  description: PropTypes.string.isRequired,
  yesEvent: PropTypes.func.isRequired,
  noEvent: PropTypes.func.isRequired,
};
const DeletePrompt = ({ description, yesEvent, noEvent }) => {
  return (
    <div>
      <p className='text-center prompt-description'>{description}</p>
      <div className='row'>
        <div className='col'>
          <Button buttonText='No' emitEvent={noEvent} icon={faThumbsDown} buttonColor='red' />
        </div>
        <div className='col'>
          <Button buttonText='Yes' emitEvent={yesEvent} icon={faThumbsUp} buttonColor='blue' />
        </div>
      </div>
    </div>
  );
};

DeletePrompt.propTypes = propTypes;
export default DeletePrompt;
