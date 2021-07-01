import { Form } from 'react-final-form';
import FinalFormInput from '../shared/FinalFormInput/FinalFormInput';
import TextInput from '../shared/TextInput/TextInput';
import TextArea from '../shared/TextArea/TextArea';
import CheckBox from '../shared/CheckBox/CheckBox';
import Button from '../shared/Button/Button';
import { required } from './../../utils';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const QuestionForm = ({ onSubmitProp }) => {
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

          <FinalFormInput name='delay' type='checkbox'>
            <CheckBox label='Delay entry by 5 seconds' />
          </FinalFormInput>

          <Button buttonText='Create Question' buttonType='create' icon={faPlusCircle} />
        </form>
      )}
    />
  );
};

export default QuestionForm;
