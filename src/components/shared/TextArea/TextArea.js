import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object,
};

const TextArea = ({ label, input }) => {
  return (
    <>
      <label className='form-label'>{label}</label>
      <textarea {...input}></textarea>
    </>
  );
};

TextArea.propTypes = propTypes;
export default TextArea;
