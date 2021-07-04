import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { createQa, createQaWithDelay, creatingQa, deleteAllQa, deleteQa, editQa, fetchQa, sortQa } from '.';
import { generateId } from './../utils';
import { CREATE_QA, CREATING_QA, DELETE_ALL_QA, DELETE_QA, EDIT_QA, SORT_QA } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Questions/Answers (QA) Actions', () => {
  const id = generateId();
  const payload = {
    id,
    question: 'How to add a question?',
    answer: 'Just use the form below!',
  };

  it(`should create an action with ${CREATE_QA} type`, () => {
    const expectedAction = {
      type: CREATE_QA,
      payload,
    };
    expect(createQa(payload)).toEqual(expectedAction);
  });

  it(`should create an action with ${EDIT_QA} type`, () => {
    const expectedAction = {
      type: EDIT_QA,
      payload,
    };
    expect(editQa(payload)).toEqual(expectedAction);
  });

  it(`should create an action with ${DELETE_QA} type`, () => {
    const expectedAction = {
      type: DELETE_QA,
      payload: id,
    };
    expect(deleteQa(id)).toEqual(expectedAction);
  });

  it(`should create an action with ${DELETE_ALL_QA} type`, () => {
    const expectedAction = {
      type: DELETE_ALL_QA,
    };
    expect(deleteAllQa()).toEqual(expectedAction);
  });

  it(`should create an action with ${SORT_QA} type`, () => {
    const expectedAction = {
      type: SORT_QA,
    };
    expect(sortQa()).toEqual(expectedAction);
  });

  it(`should create an action with ${CREATING_QA} type`, () => {
    const expectedAction = {
      type: CREATING_QA,
    };
    expect(creatingQa()).toEqual(expectedAction);
  });

  it(`should create ${CREATING_QA}, then ${CREATE_QA} when creating a QA with delay`, () => {
    const expectedActions = [{ type: CREATING_QA }, { type: CREATE_QA, payload }];
    const store = mockStore({});
    return store.dispatch(createQaWithDelay(payload)).then(() => {
      expect(store.getActions()).toMatchObject(expectedActions);
    });
  }, 6000);
});
