'use strict';


const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const hands = ['rock', 'paper', 'scissors'];

rockBtn.addEventListener('click', () => play(rockBtn.value));
paperBtn.addEventListener('click', () => play(paperBtn.value));
scissorsBtn.addEventListener('click', () => play(scissorsBtn.value));

const chooseRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)];
}

const battle = (hand1, hand2) => {
	if ((hand1 === 'rock' && hand2 === 'rock') || (hand1 === 'paper' && hand2 === 'paper') || (hand1 === 'scissors' && hand2 === 'scissors')) {
		return 'tie'
	} else if ((hand1 === 'rock' && hand2 === 'paper') || (hand1 === 'paper' && hand2 === 'scissors') || (hand1 === 'scissors' && hand2 === 'rock')) {
		return 'lose'
	} else {
		return 'win'
	}
}

const play = (hand) => {
	const computer = chooseRandom(hands);
	const result = battle(hand, computer);
	window.alert(`you picked ${hand} and computer picked ${computer} and it is ${result}`);
}