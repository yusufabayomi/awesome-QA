import Button from '../shared/Button/Button';

const QActions = () => {
  return (
    <div className='row'>
      <div className='col'>
        <Button buttonText='Sort Questions' buttonType='sort' />
      </div>
      <div className='col'>
        <Button buttonText='Delete Questions' buttonType='delete' />
      </div>
    </div>
  );
};

export default QActions;
