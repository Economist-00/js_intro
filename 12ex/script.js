'use strict';


const add = (n1, n2) => {
  console.log(n1 + n2);
}

add(2, 3);
add(2, 3);

const runTwice = (fun) => {
  fun();
  fun();
}

runTwice(() => {console.log('12b');});
runTwice(add);

const startButton = document.createElement('button');
startButton.textContent = 'Start'
document.body.appendChild(startButton);
let intervalIdBtn;
let isClicked = false;

startButton.addEventListener('click', () => {
  if (!isClicked) {
    startButton.textContent = 'Loading...';
    intervalIdBtn = setInterval(
      () => {
        startButton.textContent = 'Finished'
      },
      1000
    );
    isClicked = true;
  } else {
    clearInterval(intervalIdBtn);
    startButton.textContent = 'Start';
    isClicked = false;
  }
})

const addButton = document.createElement('button');
const addedP = document.createElement('p');
addButton.textContent = 'Add to cart';
addedP.textContent = 'Added';
document.body.appendChild(addButton);
let timeoutIdAdd = null;

addButton.addEventListener('click', () => {
  
  if (timeoutIdAdd) {
    clearTimeout(timeoutIdAdd);
  } else {
    document.body.appendChild(addedP);
  }

  timeoutIdAdd = setTimeout(() => {
    addedP.remove();
    timeoutIdAdd = null;
  }, 2000);
});


const title = document.querySelector('title');

let messages = 2;

const addBtn = document.querySelector('.add-button');
const removeBtn = document.querySelector('.remove-button');
let intervalId;

const displayNotifications = () => {
  intervalId = setInterval(
    () => {
      if (title.textContent === 'Document') {
        title.textContent = `(${messages}) New messages`;
      } else {
        title.textContent = 'Document';
      }
    }, 1000
  );
}

displayNotifications();

addBtn.addEventListener('click', () => {
  messages++;
  if (messages > 0) {
    if (intervalId === null) {
      displayNotifications();
    }
  }
});

removeBtn.addEventListener('click', () => {
  if (messages > 0) {
    messages--;
    if (messages === 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
});