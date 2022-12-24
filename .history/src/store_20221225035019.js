import { createStore, legacy_createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';
const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return { type: DELETE, id: parseInt(id) };
};

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
