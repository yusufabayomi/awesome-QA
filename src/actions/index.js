import { CREATE_QA, DELETE_ALL_QA, DELETE_QA, EDIT_QA, SORT_QA } from './types';
import { delay } from './../utils';

export const createQa = (qa) => {
  return {
    type: CREATE_QA,
    payload: qa,
  };
};

export const createQaWithDelay = (qa) => async (dispatch) => {
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
  return {
    type: SORT_QA,
  };
};
