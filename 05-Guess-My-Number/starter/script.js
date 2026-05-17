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
const inputNumber = document.querySelector('.guess');
const body = document.querySelector('body');

// 返回一个1到max之间的随机整数
const getRandomNumber = max => Math.trunc(Math.random() * max) + 1;

const secretNumber = getRandomNumber(20);

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(inputNumber.value);
  console.log(guess, typeof guess);

  // 无输入
  if (!guess) {
    labelMessage.textContent = '⚠️数字框不能为空';

    // 答案正确
  } else if (guess === secretNumber) {
    labelSecretNumber.textContent = secretNumber;
    labelMessage.textContent = '🎉答案正确';
    labelSecretNumber.style.width = '30rem';
    body.style.backgroundColor = '#60b347';

    // 数字太小
  } else if (guess < secretNumber) {
    score--;
    labelScore.textContent = score;
    if (score === 0) {
      labelMessage.textContent = '🔚游戏结束';
      body.style.backgroundColor = '#b67c1f';
    } else {
      labelMessage.textContent = '⬆️数字太小';
    }

    // 数字太大
  } else {
    score--;
    labelScore.textContent = score;
    if (score === 0) {
      labelMessage.textContent = '🔚游戏结束';
      body.style.backgroundColor = '#b67c1f';
    } else {
      labelMessage.textContent = '⬇️数字太大';
    }
  }
});
