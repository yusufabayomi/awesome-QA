import { connect } from 'react-redux';
const Introduction = ({ qas }) => {
  const renderNoOfQuestions = () => {
    let noOfQuestionsText;
    if (qas === 0) {
      noOfQuestionsText = 'no question';
    } else if (qas === 1) {
      noOfQuestionsText = '1 question';
    } else {
      noOfQuestionsText = `${qas} questions`;
    }
    return noOfQuestionsText;
  };
  return (
    <div className='text-center mt-5 mb-5'>
      <h1 className='text-white f600'>The Awesome QA Tool</h1>
      <p className='text-white' data-testid='instruction'>
        Here you can find {renderNoOfQuestions()}. Feel free to create your own questions
      </p>
    </div>
  );
};
const mapStateToProps = ({ qaReducer: { qas } }) => {
  return {
    qas: qas.length,
  };
};
export default connect(mapStateToProps)(Introduction);
