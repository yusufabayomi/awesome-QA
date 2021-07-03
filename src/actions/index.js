import { CREATE_QA, CREATING_QA, DELETE_ALL_QA, DELETE_QA, EDIT_QA, FETCH_QA, SORT_QA } from './types';
import { delay } from './../utils';

export const fetchQa = () => {
  return {
    type: FETCH_QA,
  };
};

export const createQa = (qa) => {
  return {
    type: CREATE_QA,
    payload: qa,
  };
};

export const creatingQa = () => {
  return {
    type: CREATING_QA,
  };
};

export const createQaWithDelay = (qa) => async (dispatch) => {
  dispatch(creatingQa());
  await delay(5000);
  dispatch(createQa(qa));
};

export const editQa = (qa) => {
  return {
    type: EDIT_QA,
    payload: qa,
  };
};

export const deleteAllQa = () => {
  return {
    type: DELETE_ALL_QA,
  };
};

export const deleteQa = (qa_id) => {
  return {
    type: DELETE_QA,
    payload: qa_id,
  };
};

export const sortQa = () => {
  console.log('sort qa');
  return {
    type: SORT_QA,
  };
};
