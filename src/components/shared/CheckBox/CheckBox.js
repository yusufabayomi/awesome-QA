import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object,
  disabled: PropTypes.bool,
};

const CheckBox = ({ label, input, disabled = false }) => {
  return (
    <>
      <label className='form-label'>
        <input data-testid='checkbox' {...input} disabled={disabled} type='checkbox' /> {label}
      </label>
    </>
  );
};
CheckBox.propTypes = propTypes;
export default CheckBox;
