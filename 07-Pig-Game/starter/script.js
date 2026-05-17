'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting condition
let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];
let playing = true;
score0El.textContent = currentScore;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

const winTheGame = () => {
  const activePlayerEl = document.querySelector(`.player--${activePlayer}`);
  activePlayerEl.classList.add('player--winner');
  activePlayerEl.classList.remove('player--active');
  diceEl.classList.add('hidden');
  playing = false;
};

const switchPlayer = () => {
  // clean score for current player
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  // switch player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// holding score functionality
btnHold.addEventListener('click', () => {
  if (!playing) return;

  // 1. hold score for current player
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2. check whether score >= 100
  if (scores[activePlayer] >= 10) {
    // finish the game
    winTheGame();
  } else {
    // switch player
    switchPlayer();
  }
});

// rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (!playing) return;

  // 1. generate a random dice roll
  const dice = rollDice();
  // console.log(dice);

  // 2. display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. check whether dice roll is 1
  // debugger;
  if (dice === 1) {
    // 4. if true switch to next player
    switchPlayer();
  } else {
    // 5. display dice roll
    // 6. display new score
    currentScore += dice;
  }
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
});
