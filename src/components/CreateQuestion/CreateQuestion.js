import QuestionForm from '../QuestionForm/QuestionForm';
import './CreateQuestion.css';

const CreateQuestion = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className='ms-md-5 me-md-5 create-form'>
      <QuestionForm onSubmitProp={onSubmit} />
    </div>
  );
};

export default CreateQuestion;
