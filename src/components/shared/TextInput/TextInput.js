import PropTypes from 'prop-types';

const TextInput = ({ label, input }) => {
  return (
    <>
      <label className='form-label'>{label}</label>
      <input {...input} type='text' />
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TextInput;
