import QAList from '../QAList/QAList';
import QActions from '../QActions/QActions';
import ToolTip from '../shared/Tooltip/Tooltip';

const QASection = () => {
  return (
    <>
      <h4 className='text-white f600 mb-3'>
        Created Questions <ToolTip description='Here you can find the created questions and their answers'>/</ToolTip>
      </h4>
      <QAList />
      <QActions />
    </>
  );
};

export default QASection;
