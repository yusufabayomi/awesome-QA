import { CREATE_QA, CREATING_QA, DELETE_ALL_QA, DELETE_QA, EDIT_QA, FETCH_QA } from '../actions/types';

const initialState = {
  qas: [
    {
      id: 'kqnko9ix',
      question: 'How to add a question?',
      answer: 'Just use the form below!',
    },
  ],
  creating: false,
};

const qaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QA:
      return { ...state, qas: [action.payload, ...state.qas], creating: false };
    case CREATING_QA:
      return { ...state, creating: true };
    case DELETE_QA:
      return { ...state, qas: state.qas.filter((qa) => qa.id !== action.payload) };
    case DELETE_ALL_QA:
      return { ...state, qas: [] };
    case EDIT_QA:
      return { ...state, qas: state.qas.map((qa) => (qa.id === action.payload.id ? action.payload : qa)) };
    default:
      return { ...state };
  }
};

export default qaReducer;
