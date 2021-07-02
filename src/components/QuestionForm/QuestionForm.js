import { Form } from 'react-final-form';
import PropTypes from 'prop-types';
import FinalFormInput from '../shared/FinalFormInput/FinalFormInput';
import TextInput from '../shared/TextInput/TextInput';
import TextArea from '../shared/TextArea/TextArea';
import CheckBox from '../shared/CheckBox/CheckBox';
import Button from '../shared/Button/Button';
import { required } from './../../utils';
import { faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const propTypes = {
  onSubmitProp: PropTypes.func.isRequired,
  create: PropTypes.bool,
};

const QuestionForm = ({ onSubmitProp, create }) => {
  const onSubmit = (values) => {
    onSubmitProp(values);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FinalFormInput name='question' validate={required}>
            <TextInput label='Question' />
          </FinalFormInput>

          <FinalFormInput name='answer' validate={required}>
            <TextArea label='Answer' />
          </FinalFormInput>

          {create && (
            <FinalFormInput name='delay' type='checkbox'>
              <CheckBox label='Delay entry by 5 seconds' />
            </FinalFormInput>
          )}

          {create ? <Button buttonText='Create Question' buttonColor='blue' icon={faPlusCircle} /> : <Button buttonText='Edit Question' buttonColor='blue' icon={faPencilAlt} />}
        </form>
      )}
    />
  );
};

QuestionForm.propTypes = propTypes;
export default QuestionForm;
