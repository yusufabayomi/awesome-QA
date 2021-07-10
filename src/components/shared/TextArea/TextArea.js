import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object,
  disabled: PropTypes.bool,
};

const TextArea = ({ label, input, disabled = false }) => {
  return (
    <>
      <label className='form-label'>{label}</label>
      <textarea {...input} disabled={disabled}></textarea>
    </>
  );
};

TextArea.propTypes = propTypes;
export default TextArea;
