import Introduction from './components/Introduction/Introduction';
import QASection from './components/QASection/QASection';
import './assets/style.css';
import CreateQuestion from './components/CreateQuestion/CreateQuestion';

const App = () => {
  return (
    <>
      <Introduction />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <CreateQuestion />
          </div>
          <div className='col'>
            <QASection />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
