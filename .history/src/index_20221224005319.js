import { legacy_createStore as createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

const reducer = () => {};
const store = createStore(reducer);

//add.addEventListener('click', handleAdd);
//minus.addEventListener('click', handleMinus);
