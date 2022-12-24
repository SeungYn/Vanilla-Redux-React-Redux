import { legacy_createStore as createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

const countModifier = () => {
  return 'hello';
};
const countStore = createStore(countModifier);
console.log(countStore);
//add.addEventListener('click', handleAdd);
//minus.addEventListener('click', handleMinus);
