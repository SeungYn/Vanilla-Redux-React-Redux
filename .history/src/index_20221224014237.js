import { legacy_createStore as createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.fillter((s) => s.text !== action.text);
    default:
      return state;
  }
};
const store = createStore(reducer);

store.subscribe(() => paintToDos());

const paintToDos = () => {
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
  });
};

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  addToDo(toDo);
};

form.addEventListener('submit', onSubmit);
