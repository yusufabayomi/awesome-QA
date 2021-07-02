import QAList from '../QAList/QAList';
import QActions from '../QActions/QActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import ToolTip from '../shared/Tooltip/Tooltip';

const QASection = () => {
  return (
    <>
      <h4 className='text-white'>
        Created Questions{' '}
        <ToolTip title='Here you can find the created questions and their answers'>
          <FontAwesomeIcon icon={faInfo} />
        </ToolTip>
      </h4>
      <QAList />
      <QActions />
    </>
  );
};

export default QASection;
