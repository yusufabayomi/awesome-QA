import { Provider } from 'react-redux';
const MockProvider = ({ store, children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MockProvider;
