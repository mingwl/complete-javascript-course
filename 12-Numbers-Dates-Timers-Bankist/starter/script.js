'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [
    200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300, 100, 200, 300,
    400, 500,
  ],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
    '2026-06-03T10:51:36.790Z',
    '2026-06-04T10:51:36.790Z',
    '2026-06-05T10:51:36.790Z',
    '2026-06-06T10:51:36.790Z',
    '2026-06-07T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const calcDaysPassed = (d1, d2) =>
  Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));

const formatMovementDate = function (date) {
  const today = new Date();
  const daysPassed = calcDaysPassed(today, date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}/${month}/${year}`;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDates = acc.movements.map((mov, i) => ({
    mov,
    date: acc.movementsDates.at(i),
    i,
  }));
  console.log(combinedMovsDates);

  // const movs = sort
  //   ? acc.movements.slice().sort((a, b) => a - b)
  //   : acc.movements;
  if (sort) combinedMovsDates.sort((a, b) => a.mov - b.mov);

  // 188 Banquist应用纠正排序错误
  combinedMovsDates.forEach(function (obj) {
    const { mov, date, i } = obj;
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // 187 Banquist应用添加日期
    const movDate = new Date(date);
    const displayDate = formatMovementDate(movDate);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// 假装已登录
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  // if (currentAccount?.pin === Number(inputLoginPin.value)) {
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    const now = new Date();
    // now.setDate(12);
    const day = `${now.getDate()}`.padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hour = now.getHours();
    const min = now.getMinutes().toString().padStart(2, '0');
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  // const amount = Number(inputTransferAmount.value);
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    const now = new Date();
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(now.toISOString());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(now.toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // const amount = Number(inputLoanAmount.value);
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    // Number(inputClosePin.value) === currentAccount.pin
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// 189 日期运算
const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+future);

// const calcDaysPassed = (d1, d2) =>
// Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
const days1 = calcDaysPassed(
  new Date(2037, 3, 14),
  new Date(2037, 3, 24, 10, 8),
);
console.log(days1);

/*
// 186 日期对象

// 1. create a date
const now = new Date();
console.log(now);

// 2. create a date by parsing a string
// 解析字符串创建日期
console.log(new Date('Jun 06 2026 22:03:48'));
console.log(new Date('December 24, 2015'));
console.log(new Date('2026年6月6日'));
console.log(new Date('June 6, 2026'));
console.log(new Date(account1.movementsDates[0]));

// 3.
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33, 15, 23, 5));

// 4.
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// 日期对象函数
console.log('---日期对象函数---');
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142253380000));
console.log(Date.now());

future.setFullYear(2040);

// 185 BigInt类型ES2020

// Number类型最大数值
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// 超出Number类型最大数值后不再精确
console.log(2 ** 53 + 0);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

// Number
console.log(1231231231231231231231231231231212312);
// BigInt
console.log(1231231231231231231231231231231212312n);
console.log(BigInt(1231231231231231231231231231231212312));

// 运算符
console.log(10000n + 10000n);
console.log(1231231231231231231231231231231212312n * 10000n);
// console.log(1231231231231231231231231231231212312n * 10000);
console.log(1231231231231231231231231231231212312n * BigInt(10000));

console.log(20n > 15);
console.log(20n === 20);
console.log(20n == 20);
console.log(20n == '20');
console.log(typeof 20n);

console.log(1231231231231231231231231231231212312n + ' is big');

console.log(Math.sqrt(16));
// console.log(Math.sqrt(16n));

// divisions
console.log(12n / 3n);
console.log(11n / 3n);
console.log(10n / 3n);
console.log(10 / 3);

// 184 数字分割运算符ES2021

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;
console.log(transferFee1, transferFee2);

const PI = 3.1415;
console.log(PI);

console.log(Number('230000'));
console.log(Number('230_000'));
console.log(parseInt('230_000'));

// 182 余数运算符 remainder operator
console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

const isEven = n => n % 2 === 0;
let num = 5;
console.log(`${num} is ${isEven(num) ? 'even' : 'odd'}`);
num = 6;
console.log(`${num} is ${isEven(num) ? 'even' : 'odd'}`);

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0,2,4,6
    if (i % 2 === 0) row.style.backgroundColor = 'yellowgreen';
    // 0,3,6,0
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// 182 数学与四舍五入函数
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

console.log('---randomInt---');
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
// console.log('1-6:', randomInt(1, 6));
console.log('10-20:', randomInt(10, 20));
console.log('0-3:', randomInt(0, 3));

// 四舍五入整数 rounding integer
// 强制类型转换 type coersion
console.log(`取整四舍五入`);
console.log('trunc', Math.trunc('23.3'));
console.log('trunc', Math.trunc(23.3));
console.log('trunc', Math.trunc(-23.3));

console.log(`最近四舍五入`);
console.log('round', Math.round('23.3'));
console.log('round', Math.round(23.9));

console.log(`向上四舍五入`);
console.log('ceil', Math.ceil('23.3'));
console.log('ceil', Math.ceil(23.9));

console.log(`向下四舍五入 负数情况下floor比trunc更准确`);
console.log('floor', Math.floor('23.3'));
console.log('floor', Math.floor('-23.3'));
console.log('floor', Math.floor(23.9));

// 四舍五入小数 Rouding decimals
// toFixed 返回字符串
// js把(2.7)打包成对象
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
// toFixed 返回字符串转换成数字
console.log(+(2.345).toFixed(2));
console.log(Number((2.345).toFixed(2)));

// 181 数字转换与检验
console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(1 / 10);
console.log(3 / 10);

// 字符串转换为数字 conversion
console.log(Number('23'));
console.log(+'23');

// 字符串解析为数字 parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e30'));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseInt(' 2.5rem '));
console.log(Number.parseFloat('2.5rem'));

// 全局函数
console.log(parseFloat('2.5rem'));

console.log('---isNaN---');
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(+'20'));
console.log(Number.isNaN(23 / 0));

console.log('---isFinite 检测是否为数字---');
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite(23 / 0));

console.log('---isInteger 检测是否为数字---');
console.log(Number.isInteger(20.0));
console.log(Number.isInteger(20.1));
console.log(Number.isInteger('20'));
console.log(Number.isInteger(+'20x'));
console.log(Number.isInteger(+'20'));
console.log(Number.isInteger(23 / 0));
*/
