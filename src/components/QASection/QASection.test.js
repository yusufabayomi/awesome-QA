import { cleanup, render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import MockProvider from '../../store/mockProvider';
import QASection from './QASection';

const mockStore = configureMockStore();
afterEach(cleanup);

describe('Render QASection', () => {
  it(`shows No questions yet 😊 if Question/Answer (QA) is empty`, () => {
    const store = mockStore({
      qaReducer: {
        qas: [],
      },
    });
    const { getByTestId } = render(
      <MockProvider store={store}>
        <QASection />
      </MockProvider>
    );
    const emptyQA = getByTestId('emptyQA');
    expect(emptyQA).toHaveClass('alert-danger');
    expect(emptyQA).toHaveTextContent('No questions yet 😊');
  });

  it('checks if the list of questions is rendered if QA is not empty', () => {
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
    const { container } = render(
      <MockProvider store={store}>
        <QASection />
      </MockProvider>
    );
    expect(container.querySelector('.qa-wrapper')).toBeInTheDocument();
  });
});
