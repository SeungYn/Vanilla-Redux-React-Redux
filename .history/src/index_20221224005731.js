import { legacy_createStore as createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

const countModifier = (state = 0) => {
  console.log(state);
  return state;
};
const countStore = createStore(countModifier);
console.log(countStore.getState());
//add.addEventListener('click', handleAdd);
//minus.addEventListener('click', handleMinus);
