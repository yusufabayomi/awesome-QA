import { Form } from 'react-final-form';
import PropTypes from 'prop-types';
import FinalFormInput from '../shared/FinalFormInput/FinalFormInput';
import TextInput from '../shared/TextInput/TextInput';
import TextArea from '../shared/TextArea/TextArea';
import CheckBox from '../shared/CheckBox/CheckBox';
import Button from '../shared/Button/Button';
import { required } from './../../utils';
import { faPencilAlt, faPlusCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  create: PropTypes.bool,
  initialValues: PropTypes.object,
};

const defaultProps = {
  initialValues: null,
};

const QuestionForm = ({ onSubmit, create, initialValues }) => {
  const onSubmitHandler = async (values, form) => {
    await onSubmit(values);
    form.restart();
  };

  const submitButtonProps = (submitting) => {
    let props;
    if (submitting) {
      props = {
        buttonText: 'Please Wait ...',
        icon: faSpinner,
      };
    } else if (create) {
      props = {
        buttonText: 'Create Question',
        icon: faPlusCircle,
      };
    } else {
      props = {
        buttonText: 'Edit Question',
        icon: faPencilAlt,
      };
    }
    return props;
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <FinalFormInput name='question' validate={required}>
            <TextInput label='Question' disabled={submitting} />
          </FinalFormInput>
          <FinalFormInput name='answer' validate={required}>
            <TextArea label='Answer' disabled={submitting} />
          </FinalFormInput>
          {create && (
            <FinalFormInput name='delayCreate' type='checkbox'>
              <CheckBox label='Delay entry by 5 seconds' disabled={submitting} />
            </FinalFormInput>
          )}
          <Button buttonColor='blue' {...submitButtonProps(submitting)} disabled={submitting} animateIcon={submitting} />
        </form>
      )}
    />
  );
};

QuestionForm.propTypes = propTypes;
QuestionForm.defaultProps = defaultProps;
export default QuestionForm;
