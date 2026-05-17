'use strict';

// selecting elements
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

// starting condition
let currentScore = 0;
let score = 0;
score0El.textContent = currentScore;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// rolling dice functionality
btnRoll.addEventListener('click', () => {
  // 1. generate a random dice roll
  const dice = rollDice();
  // console.log(dice);

  // 2. display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. check whether dice roll is 1
  if (dice === 1) {
    // 4. if true switch to next player
    score += currentScore;
    currentScore = 0;
    score0El.textContent = score;
    current0El.textContent = currentScore;
  } else {
    // 5. else display dice roll to current score
    currentScore += dice;
    current0El.textContent = currentScore;
    // 6. display new score
  }
});
