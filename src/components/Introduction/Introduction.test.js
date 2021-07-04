import { cleanup, render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import MockProvider from '../../store/mockProvider';
import Introduction from './Introduction';

const mockStore = configureMockStore();
afterEach(cleanup);

describe('Renders Introduction Component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      qaReducer: {
        qas: [],
      },
    });
    const { asFragment } = render(
      <MockProvider store={store}>
        <Introduction />
      </MockProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct instruction if store has 1 qa', () => {
    const store = mockStore({
      qaReducer: {
        qas: [
          {
            id: 'kqnko9ix',
            question: 'How to add a question?',
            answer: 'Just use the form below!',
          },
        ],
      },
    });
    const { getByTestId } = render(
      <MockProvider store={store}>
        <Introduction />
      </MockProvider>
    );
    expect(getByTestId('instruction')).toHaveTextContent('Here you can find 1 question. Feel free to create your own questions');
  });

  it('renders the correct instruction if store has more than 1 qas', () => {
    const store = mockStore({
      qaReducer: {
        qas: [
          {
            id: 'kqnko9ix',
            question: 'How to add a question?',
            answer: 'Just use the form below!',
          },
          {
            id: 'kqneo9ix',
            question: 'What is React?',
            answer: 'A Javascript UI library!',
          },
        ],
      },
    });
    const { getByTestId } = render(
      <MockProvider store={store}>
        <Introduction />
      </MockProvider>
    );
    expect(getByTestId('instruction')).toHaveTextContent('Here you can find 2 questions. Feel free to create your own questions');
  });
});
