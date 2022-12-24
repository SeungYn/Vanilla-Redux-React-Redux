import { legacy_createStore as createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

const countModifier = (state = 0, action) => {
  console.log(state, action);
  if (action.type === 'ADD') {
    console.log('Add');
  }
  return state;
};
const countStore = createStore(countModifier);
countStore.dispatch({ type: 'ADD' });
//add.addEventListener('click', handleAdd);
//minus.addEventListener('click', handleMinus);
