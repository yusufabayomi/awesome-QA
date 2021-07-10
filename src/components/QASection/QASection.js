import QAList from '../QAList/QAList';
import QActions from '../QActions/QActions';
import ToolTip from '../shared/Tooltip/Tooltip';
import { connect } from 'react-redux';

const QASection = ({ isQasEmpty }) => {
  return (
    <>
      <h4 className='text-white f600 mb-3'>
        Created Questions <ToolTip description='Here you can find the created questions and their answers'>/</ToolTip>
      </h4>
      {!isQasEmpty ? (
        <>
          <QAList />
          <QActions />
        </>
      ) : (
        <div data-testid='emptyQA' className='alert alert-danger' role='alert'>
          No questions yet 😊
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ qaReducer: { qas } }) => {
  return { isQasEmpty: qas.length === 0 };
};
export default connect(mapStateToProps, {})(QASection);
