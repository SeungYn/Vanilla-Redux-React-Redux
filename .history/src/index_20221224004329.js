const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

let count = 0;
number.innerHTML = count;
const handleAdd = () => {
  count++;
  number.innerHTML = count;
};

const handleMinus = () => {
  console.log('minus');
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
