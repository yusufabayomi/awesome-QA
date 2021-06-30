import Introduction from './components/Introduction/Introduction';
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
          <div className="col">
            Column
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
