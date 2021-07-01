import Introduction from './components/Introduction/Introduction';
import QASection from './components/QASection/QASection';
import './assets/style.css';

const App = () => {
  return (
    <>
      <Introduction />
      <div className="container">
        <div className="row">
          <div className="col">
            Column
          </div>
          <QASection />
        </div>
      </div>
    </>
  );
}

export default App;
