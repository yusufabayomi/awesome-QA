import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object,
  disabled: PropTypes.bool,
};

const TextInput = ({ label, input, disabled = false }) => {
  return (
    <>
      <label className='form-label'>{label}</label>
      <input data-testid='text' {...input} type='text' disabled={disabled} />
    </>
  );
};

TextInput.propTypes = propTypes;
export default TextInput;
