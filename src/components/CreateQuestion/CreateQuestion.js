import { useRef, useEffect } from 'react';
import QuestionForm from '../QuestionForm/QuestionForm';
import { connect } from 'react-redux';
import ToolTip from '../shared/Tooltip/Tooltip';
import { createQa, createQaWithDelay } from './../../actions';
import './CreateQuestion.css';
import { generateId } from '../../utils';

const CreateQuestion = ({ createQa, createQaWithDelay, creating }) => {
  const ref = useRef();

  const onSubmit = (values) => {
    const { delayCreate, question, answer } = values;
    const id = generateId();
    const payload = { id, question, answer };
    if (delayCreate) {
      createQaWithDelay(payload);
    } else {
      createQa(payload);
      ref.current.restart();
    }
  };

  useEffect(() => {
    if (!creating) {
      ref.current.restart();
    }
  }, [creating]);

  return (
    <div className='ms-md-5 me-md-5 create-form'>
      <h4 className='f600 mb-3'>
        Create A New Question <ToolTip description='Here you can create new questions and their answers' />
      </h4>
      <QuestionForm create onSubmitProp={onSubmit} innerRef={ref} disableFormSubmit={creating} />
    </div>
  );
};

const mapStateToProps = ({ qaReducer: { creating } }) => {
  return {
    creating,
  };
};
export default connect(mapStateToProps, { createQa, createQaWithDelay })(CreateQuestion);
