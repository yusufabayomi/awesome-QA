import { cloneElement } from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';

const FinalFormInput = ({ children, name, type, validate }) => {
  return (
    <Field name={name} type={type} validate={validate}>
      {({ input, meta }) => (
        <div className='mb-3'>
          {cloneElement(children, { input })}
          {meta.error && meta.touched && <div className='small text-danger'>{meta.error}</div>}
        </div>
      )}
    </Field>
  );
};

FinalFormInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

FinalFormInput.defaultProps = {
  type: 'text',
  validate: null,
};

export default FinalFormInput;
