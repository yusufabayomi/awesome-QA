import QuestionForm from '../QuestionForm/QuestionForm';
import { connect } from 'react-redux';
import ToolTip from '../shared/Tooltip/Tooltip';
import { createQa, createQaWithDelay } from './../../actions';
import './CreateQuestion.css';
import { generateId } from '../../utils';

const CreateQuestion = ({ createQa, createQaWithDelay }) => {
  const onSubmit = async (values) => {
    const { delayCreate, question, answer } = values;
    const id = generateId();
    const payload = { id, question, answer };
    if (delayCreate) {
      await createQaWithDelay(payload);
    } else {
      createQa(payload);
    }
  };

  return (
    <div className='ms-md-5 me-md-5 create-form'>
      <h4 className='f600 mb-3'>
        Create A New Question <ToolTip description='Here you can create new questions and their answers' />
      </h4>
      <QuestionForm create onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createQa, createQaWithDelay })(CreateQuestion);
