'use strict';


const buttonHeads = document.getElementById('heads');
const buttonTails = document.getElementById('tails');
const coinDiv = document.getElementById('coinDiv');

buttonHeads.addEventListener('click', () => {
  func1(buttonHeads);
});

buttonTails.addEventListener('click', () => {
  func1(buttonTails);
});

const func1 = (button) => {
  const data = button.textContent;
  const p = document.createElement('p');
  p.textContent = `You chose ${data}`;
  coinDiv.textContent = '';
  coinDiv.appendChild(p);
}

const buttonName = document.getElementById('nameBtn');
const nameInput = document.getElementById('namebox');
const nameDiv = document.getElementById('nameDiv');


buttonName.addEventListener('click', () => {
  func2();
});

nameInput.addEventListener('keydown', (ev) => {
  if (ev.key === 'Enter') {
    func2();
  }
});


const func2 = () => {
  const data = nameInput.value;
  const p = document.createElement('p');
  p.textContent = `Your name is ${data}`;
  nameDiv.textContent = '';
  nameDiv.appendChild(p);
}

const keyInput = document.getElementById('keybox');
const keyDiv = document.getElementById('keyDiv');

keyInput.addEventListener('keyup', (ev) => {
  if (ev.key === 'Backspace') {
    keyDiv.textContent = keyDiv.textContent.slice(0, -1);
  } 
  if (ev.key.length > 1) {
    return;
  }
  keyDiv.textContent += ev.key;

});