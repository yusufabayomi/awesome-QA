import QuestionForm from '../QuestionForm/QuestionForm';
import ToolTip from '../shared/Tooltip/Tooltip';
import './CreateQuestion.css';

const CreateQuestion = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className='ms-md-5 me-md-5 create-form'>
      <h4 className='f600 mb-3'>
        Create A New Question <ToolTip description='Here you can create new questions and their answers' />
      </h4>
      <QuestionForm create onSubmitProp={onSubmit} />
    </div>
  );
};

export default CreateQuestion;
