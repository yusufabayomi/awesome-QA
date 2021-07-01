const CheckBox = ({ label, input }) => {
  return (
    <>
      <label className='form-label'>
        <input {...input} type='checkbox' /> {label}
      </label>
    </>
  );
};

export default CheckBox;
