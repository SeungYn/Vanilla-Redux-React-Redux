import { createStore, legacy_createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';
const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
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
