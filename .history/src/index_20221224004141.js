const add = document.querySelector('#add');
const minus = document.querySelector('#minus');

const handleAdd = () => {
  console.log('add');
};

const handleMinus = () => {
  console.log('minus');
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
