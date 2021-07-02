import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object,
};

const TextInput = ({ label, input }) => {
  return (
    <>
      <label className='form-label'>{label}</label>
      <input data-testid='text' {...input} type='text' />
    </>
  );
};

TextInput.propTypes = propTypes;
export default TextInput;
