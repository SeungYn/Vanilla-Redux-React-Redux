import { createStore, legacy_createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';
const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = createAction('ADD');

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = legacy_createStore(
  reducer,
  JSON.parse(localStorage.getItem('todos'))
);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;