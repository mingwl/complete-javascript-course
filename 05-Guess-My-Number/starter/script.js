'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct Number🎉`;
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const labelMessage = document.querySelector('.message');
const labelSecretNumber = document.querySelector('.number');
const labelScore = document.querySelector('.score');
const labelHighscore = document.querySelector('.highscore');
const inputNumber = document.querySelector('.guess');
const body = document.querySelector('body');
const bntCheck = document.querySelector('.check');
const bntAgain = document.querySelector('.again');

let secretNumber;
let score;
let highscore = 0;

// 返回一个1到max之间的随机整数
const getRandomNumber = max => Math.trunc(Math.random() * max) + 1;

const displayMesage = msg => (labelMessage.textContent = msg);

const decreaseScore = () => {
  score--;
  labelScore.textContent = score;
};

const guessRight = () => {
  displayMesage('🎉答案正确');
  labelSecretNumber.texctContent = secretNumber;
  labelSecretNumber.style.width = '30rem';
  body.style.backgroundColor = '#60b347';
  highscore = score > highscore ? score : highscore;
  labelHighscore.textContent = highscore;
};

const guessWrong = guess => {
  if (score === 0) {
    displayMesage('🔚游戏结束');
    body.style.backgroundColor = '#b67c1f';
  } else {
    displayMesage(guess < secretNumber ? '⬆️数字太小' : '⬇️数字太大');
  }
};

const init = () => {
  score = 20;
  secretNumber = getRandomNumber(20);
  displayMesage('Start guessing...');
  inputNumber.value = '';
  labelScore.textContent = score;
  labelHighscore.textContent = highscore;
  labelSecretNumber.textContent = '?';
  labelSecretNumber.style.width = '15rem';
  body.style.backgroundColor = '#222';
  // labelSecretNumber.textContent = secretNumber;
};
init();

bntAgain.addEventListener('click', init);

bntCheck.addEventListener('click', function () {
  const guess = Number(inputNumber.value);
  console.log(guess, typeof guess);

  // 无输入
  if (!guess) {
    displayMesage('⚠️数字框不能为空');

    // 答案正确
  } else if (guess === secretNumber) {
    decreaseScore();
    guessRight();

    // 数字错误
  } else {
    decreaseScore();
    guessWrong(guess);
  }
});
