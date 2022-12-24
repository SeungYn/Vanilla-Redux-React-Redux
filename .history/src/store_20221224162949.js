import { createStore, legacy_createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo !== action.id);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);
