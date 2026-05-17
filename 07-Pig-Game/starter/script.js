'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playing, activePlayer, currentScore, scores;
const WIN_SCORE = 20;

const init = () => {
  // starting condition
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player1El.classList.remove('player--winner');
};
init();

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

btnNew.addEventListener('click', init);

// holding score functionality
btnHold.addEventListener('click', () => {
  if (!playing) return;

  // 1. hold score for current player
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2. check whether score >= 100
  if (scores[activePlayer] >= WIN_SCORE) {
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
