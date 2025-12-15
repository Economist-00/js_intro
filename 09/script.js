'use strict';


const subscribeBtn = document.querySelector('.sub');

subscribeBtn.addEventListener('click', () => {
  if (subscribeBtn.textContent === "Subscribe") {
  subscribeBtn.textContent = 'Subscribed';
  } else {
    subscribeBtn.textContent = "Subscribe";
  }
});


const text = document.querySelector('.cost');
const calculateBtn = document.querySelector('.cal');

calculateBtn.addEventListener('click', () => {
  calculateCost();
});

text.addEventListener('keydown', (ev) => {
  if (ev.key === 'Enter') {
    calculateCost();
  }
});



const calculateCost = () => {
  let cost = Number(text.value.replace(/[^0-9.-]/g, ""));
  if (isNaN(cost)) {
    alert('please enter cost of order first');
    return; 
  }

  if (cost < 40) {
    cost += 10;
  } 
 
  const p = document.createElement('p');
  p.textContent = `your total cost is $${cost.toFixed(2)}`;
  const div = document.querySelector('div');
  div.textContent = '';
  div.appendChild(p);
}