import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QuestionForm from '../QuestionForm/QuestionForm';
import ToolTip from '../shared/Tooltip/Tooltip';
import './CreateQuestion.css';

const CreateQuestion = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className='ms-md-5 me-md-5 create-form'>
      <h4>
        Create A New Question{' '}
        <ToolTip title='Here you can create new questions and their answers'>
          <FontAwesomeIcon icon={faInfo} />
        </ToolTip>
      </h4>
      <QuestionForm onSubmitProp={onSubmit} />
    </div>
  );
};

export default CreateQuestion;
