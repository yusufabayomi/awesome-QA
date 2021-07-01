import PropTypes from 'prop-types';

const TextArea = ({ label, input }) => {
  return (
    <>
      <label className='form-label'>{label}</label>
      <textarea {...input}></textarea>
    </>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TextArea;
