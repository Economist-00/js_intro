'use strict';

const store = localStorage;
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');
const hands = ['rock', 'paper', 'scissors'];
let score = JSON.parse(store.getItem('score')) || {win: 0, loss: 0, tie: 0};

// if (score === null) {
//   score = {win: 0, loss: 0, tie: 0};
// }

rockBtn.addEventListener('click', () => play(rockBtn.value));
paperBtn.addEventListener('click', () => play(paperBtn.value));
scissorsBtn.addEventListener('click', () => play(scissorsBtn.value));
resetBtn.addEventListener('click', () => {
  score.win = 0;
  score.loss = 0;
  score.tie = 0;
  store.removeItem('score');
  window.alert('your score is reset');
});

const chooseRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)];
}

const battle = (hand1, hand2) => {
	if ((hand1 === 'rock' && hand2 === 'rock') || (hand1 === 'paper' && hand2 === 'paper') || (hand1 === 'scissors' && hand2 === 'scissors')) {
		score.tie += 1;
    store.setItem('score', JSON.stringify(score));
    return 'tie';
	} else if ((hand1 === 'rock' && hand2 === 'paper') || (hand1 === 'paper' && hand2 === 'scissors') || (hand1 === 'scissors' && hand2 === 'rock')) {
		score.loss += 1;
    store.setItem('score', JSON.stringify(score));
    return 'lose';
	} else {
    score.win += 1;
    store.setItem('score', JSON.stringify(score));
		return 'win';
	}
}

const play = (hand) => {
	const computer = chooseRandom(hands);
	const result = battle(hand, computer);
	window.alert(`you picked ${hand} and computer picked ${computer} and you ${result}\nwin:${score.win} loss:${score.loss} tie:${score.tie}`);
}