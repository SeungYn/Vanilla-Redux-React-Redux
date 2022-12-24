const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

let count = 0;
number.innerHTML = count;
const handleAdd = () => {
  console.log('add');
};

const handleMinus = () => {
  console.log('minus');
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
