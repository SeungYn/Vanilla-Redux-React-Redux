import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
  }
};
