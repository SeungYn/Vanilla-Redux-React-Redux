import { legacy_createStore as createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return count + 1;
  }
  return state;
};
const countStore = createStore(countModifier);
countStore.dispatch({ type: 'ADD' });
//add.addEventListener('click', handleAdd);
//minus.addEventListener('click', handleMinus);
