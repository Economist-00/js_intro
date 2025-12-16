'use strict';

const store = localStorage;
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');
const hands = ['rock', 'paper', 'scissors'];
let score = JSON.parse(store.getItem('score')) || {win: 0, loss: 0, tie: 0};
const div = document.querySelector('div');

const pElement = document.createElement('p');
pElement.textContent = `win:${score.win} loss:${score.loss} tie:${score.tie}`;
div.textContent = '';
div.appendChild(pElement);

rockBtn.addEventListener('click', () => play(rockBtn.value));
paperBtn.addEventListener('click', () => play(paperBtn.value));
scissorsBtn.addEventListener('click', () => play(scissorsBtn.value));
resetBtn.addEventListener('click', () => {
  confirmation();
});

const autoBtn = document.querySelector('.auto-play-button');
let isAutoPlaying = false;
let intervalId;

autoBtn.addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (ev) => {
  if (ev.key === 'r') {
    play('rock');
  } else if (ev.key === 'p') {
    play('paper');
  } else if (ev.key === 's') {
    play('scissors');
  } else if (ev.key === 'a') {
    autoPlay();
  } else if (ev.key === 'Backspace') {
    confirmation();
  }
})

const chooseRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)];
}

const battle = (hand1, hand2) => {
  let result = '';
	if ((hand1 === 'rock' && hand2 === 'rock') || (hand1 === 'paper' && hand2 === 'paper') || (hand1 === 'scissors' && hand2 === 'scissors')) {
		score.tie += 1;
    result = 'tie';
	} else if ((hand1 === 'rock' && hand2 === 'paper') || (hand1 === 'paper' && hand2 === 'scissors') || (hand1 === 'scissors' && hand2 === 'rock')) {
		score.loss += 1;
    result = 'lose';
	} else {
    score.win += 1;
    result = 'win';
	}
  store.setItem('score', JSON.stringify(score));
  return result;
}

const play = (hand) => {
	const computer = chooseRandom(hands);
	const result = battle(hand, computer);
  const p = document.createElement('p');
  p.classList.add('result');
  p.innerHTML = `you picked <img src="images/${hand}.png" alt="rock" class="move-icon"> and computer picked <img src="images/${computer}.png" alt="rock" class="move-icon"><br>you ${result}<br><br><br>win:${score.win} loss:${score.loss} tie:${score.tie}`;
  div.textContent = '';
  div.appendChild(p);
}

const autoPlay = () => {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = chooseRandom(hands);
      play(playerMove);
    }, 1000); 
    isAutoPlaying = true;
    autoBtn.textContent = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoBtn.textContent = 'Auto Play';
  }
}

const resetDiv = document.querySelector('.reset-confirm-div');

const confirmation = () => {
  const confirmP = document.createElement('p');
  confirmP.textContent = 'Are you sure you want to reset the score?';
  const yesBtn = document.createElement('button');
  const noBtn = document.createElement('button');
  yesBtn.classList.add('yes-btn');
  noBtn.classList.add('no-btn');
  yesBtn.textContent = 'Yes';
  noBtn.textContent = 'No';
  resetDiv.appendChild(confirmP);
  resetDiv.appendChild(yesBtn);
  resetDiv.appendChild(noBtn);
  yesBtn.addEventListener('click', () => {
    resetScore();
    confirmP.remove();
    yesBtn.remove();
    noBtn.remove();
  });
  noBtn.addEventListener('click', () => {
    confirmP.remove();
    yesBtn.remove();
    noBtn.remove();
  });
}

const resetScore = () => {
  score.win = 0;
  score.loss = 0;
  score.tie = 0;
  store.removeItem('score');
  const p = document.createElement('p');
  p.textContent = 'your score is reset';
  div.textContent = '';
  div.appendChild(p);
}