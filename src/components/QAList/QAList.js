import QAItem from '../QAItem/QAItem';
import { connect } from 'react-redux';

const QAList = ({ qas }) => {
  return qas.map((qa) => <QAItem key={qa.id} qa={qa} />);
};

const mapStateToProps = ({ qaReducer: { qas } }) => {
  return { qas };
};
export default connect(mapStateToProps, {})(QAList);
