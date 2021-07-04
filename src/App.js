import Introduction from './components/Introduction/Introduction';
import QASection from './components/QASection/QASection';
import CreateQuestion from './components/CreateQuestion/CreateQuestion';
import './assets/style.css';

const App = () => {
  return (
    <>
      <Introduction />
      <div className='container'>
        <div className='row'>
          <div className='col mb-5'>
            <CreateQuestion />
          </div>
          <div className='col mb-5'>
            <QASection />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
