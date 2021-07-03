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
  onSubmitProp: PropTypes.func.isRequired,
  create: PropTypes.bool,
};

const defaultProps = {
  initialValues: null,
  resetForm: false,
  innerRef: null,
  disableFormSubmit: false,
};

const QuestionForm = ({ onSubmitProp, create, initialValues, innerRef, disableFormSubmit }) => {
  const onSubmitForm = (values) => {
    onSubmitProp(values);
  };

  const getProps = () => {
    let props;
    if (disableFormSubmit) {
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
      onSubmit={onSubmitForm}
      render={({ handleSubmit, form }) => {
        if (innerRef) {
          innerRef.current = form;
        }
        return (
          <form onSubmit={handleSubmit}>
            <FinalFormInput name='question' validate={required}>
              <TextInput label='Question' />
            </FinalFormInput>

            <FinalFormInput name='answer' validate={required}>
              <TextArea label='Answer' />
            </FinalFormInput>

            {create && (
              <FinalFormInput name='delayCreate' type='checkbox'>
                <CheckBox label='Delay entry by 5 seconds' />
              </FinalFormInput>
            )}

            <Button buttonColor='blue' {...getProps()} disabled={disableFormSubmit} animateIcon={disableFormSubmit} />
          </form>
        );
      }}
    />
  );
};

QuestionForm.propTypes = propTypes;
QuestionForm.defaultProps = defaultProps;
export default QuestionForm;
