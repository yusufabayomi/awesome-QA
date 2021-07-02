import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object,
};

const CheckBox = ({ label, input }) => {
  return (
    <>
      <label className='form-label'>
        <input data-testid='checkbox' {...input} type='checkbox' /> {label}
      </label>
    </>
  );
};
CheckBox.propTypes = propTypes;
export default CheckBox;
