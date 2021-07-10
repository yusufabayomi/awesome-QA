import qaReducer from './qaReducer';
import { generateId } from './../utils';
import { CREATE_QA, DELETE_ALL_QA, DELETE_QA, EDIT_QA, SORT_QA } from '../actions/types';

describe('Questions/Answers (QA) Reducers', () => {
  const state = {
    qas: [
      {
        id: 'kqnko9ix',
        question: 'How to add a question?',
        answer: 'Just use the form below!',
      },
      {
        id: 'kqnko6qr',
        question: 'Are react components reusable',
        answer: 'Yes, react components should be resuable if well structured',
      },
    ],
    creating: false,
  };

  it('should return the initial state', () => {
    expect(qaReducer(state, {})).toEqual(state);
  });

  it(`should handle the ${CREATE_QA} case`, () => {
    const id = generateId();
    const payload = {
      id,
      question: 'What is react?',
      answer: 'React is a javascript front end library',
    };
    expect(
      qaReducer(state, {
        type: CREATE_QA,
        payload,
      })
    ).toEqual({ qas: [payload, ...state.qas], creating: false });
  });

  it(`should handle the ${EDIT_QA} case`, () => {
    const payload = {
      id: 'kqnko9ix',
      question: 'What is react?',
      answer: 'React is a javascript front end library',
    };
    const expected = [
      payload,
      {
        id: 'kqnko6qr',
        question: 'Are react components reusable',
        answer: 'Yes, react components should be resuable if well structured',
      },
    ];
    expect(
      qaReducer(state, {
        type: EDIT_QA,
        payload,
      })
    ).toEqual({ creating: false, qas: expected });
  });

  it(`should handle the ${DELETE_ALL_QA} case`, () => {
    expect(
      qaReducer(state, {
        type: DELETE_ALL_QA,
      })
    ).toEqual({ creating: false, qas: [] });
  });

  it(`should handle the ${DELETE_QA} case`, () => {
    const id = 'kqnko9ix';
    expect(
      qaReducer(state, {
        type: DELETE_QA,
        payload: id,
      })
    ).toEqual({
      creating: false,
      qas: [
        {
          id: 'kqnko6qr',
          question: 'Are react components reusable',
          answer: 'Yes, react components should be resuable if well structured',
        },
      ],
    });
  });

  it(`should handle the ${SORT_QA} case and return an alphabetically sorted qas state from the previous state`, () => {
    expect(
      qaReducer(state, {
        type: SORT_QA,
      })
    ).toEqual({
      qas: [
        {
          id: 'kqnko6qr',
          question: 'Are react components reusable',
          answer: 'Yes, react components should be resuable if well structured',
        },
        {
          id: 'kqnko9ix',
          question: 'How to add a question?',
          answer: 'Just use the form below!',
        },
      ],
      creating: false,
    });
  });
});
