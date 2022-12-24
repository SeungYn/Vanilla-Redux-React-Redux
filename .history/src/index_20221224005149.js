import { legacy_createStore as createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

const store = createStore();

let count = 0;
number.innerHTML = count;

const updateText = (count) => {
  number.innerText = count;
};

const handleAdd = () => {
  count++;
  updateText(count);
};

const handleMinus = () => {
  count--;
  updateText(count);
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
