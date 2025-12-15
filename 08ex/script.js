'use strict';

const store = localStorage;

const product = {name: 'basketball', price: 2095};
console.log(product);
product.price += 500;
console.log(product);
product['delivery-time'] = '3 days';
console.log(product);

const comparePrice = (product1, product2) => {
  if (product1.price < product2.price) {
    return product1;
  } else {
    return product2;
  }
}

const product1 = {name: 'pen', price: 500};
const product2 = {name: 'pencil', price: 150};

console.log(comparePrice(product1, product2));

const isSameProduct = (product1, product2) => {
  if (product1.name === product2.name && product1.price === product2.price) {
    return true;
  } else {
    return false;
  }
}

console.log(isSameProduct(product1, product2));

console.log('ABC'.toLowerCase());
console.log('ABC'.repeat(2));

let calculation = store.getItem('calculation') || '';

const updateCalculation = (value) => {
  calculation += value;
  store.setItem('calculation', calculation);
  console.log(calculation);
}


document.querySelectorAll('button[data-value]').forEach(button => {
  button.addEventListener('click', () => {
    updateCalculation(button.dataset.value);
  });
});

document.getElementById('equals').addEventListener('click', () => {
  const result = eval(calculation);
  const p = document.createElement('p');
  p.textContent = `${calculation} = ${result}`;
  const div = document.querySelector('div');
  div.appendChild(p);
  console.log(result);
});

document.getElementById('clear').addEventListener('click', () => {
  calculation = '';
  const div = document.querySelector('div');
  div.querySelectorAll('p').forEach(p => p.remove());
  store.removeItem('calculation');
  console.log(calculation);
});

