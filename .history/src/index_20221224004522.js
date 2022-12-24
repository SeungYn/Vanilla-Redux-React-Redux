const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

let count = 0;
number.innerHTML = count;

const updateText = (number) => {
  number.innerText = number;
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
