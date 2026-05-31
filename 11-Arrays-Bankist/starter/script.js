'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// 153 创建dom元素
const displayMovs = function (acc) {
  containerMovements.innerHTML = '';
  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    // .filter((int, i, arr) => {
    //   console.log(arr);
    //   return int >= 1;
    // })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// 158 生成用户名
const getUsername = owner =>
  owner
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');
const createUsernames = accounts =>
  accounts.forEach(acc => (acc.username = getUsername(acc.owner)));
createUsernames(accounts);

const updateUI = function (acc) {
  // 显示交易
  displayMovs(acc);

  // 显示余额
  calcDisplayBalance(acc);

  // 显示概况
  calcDisplaySummary(acc);
};

// 165 实现登录
// event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // 避免表格提交时默认刷新网页
  e.preventDefault();
  // console.log(inputLoginUsername.value, inputLoginPin.value);
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // 显示欢迎语句
    labelWelcome.textContent = `${currentAccount.owner.split(' ')[0]}欢迎回来`;

    // 显示界面
    containerApp.style.opacity = 1;

    // 清空输入栏
    inputLoginUsername.value = inputLoginPin.value = '';

    // 输入栏失去焦点
    inputLoginPin.blur();

    // 更新页面
    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = `登录失败`;
    containerApp.style.opacity = 0;
  }
});

// 166 实现转账
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transfertAmount = Number(inputTransferAmount.value);
  const transfertToUsername = inputTransferTo.value;
  // console.log(`transfert ${transfertAmount}'€ to ${transfertToUsername}`);

  const transfertToAccount = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  // console.log(transfertToAccount);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    transfertAmount > 0 &&
    transfertAmount <= currentAccount.balance &&
    transfertToAccount &&
    transfertToAccount?.username !== currentAccount.username
  ) {
    // console.log(`transfert valid`);
    // 转账
    currentAccount.movements.push(-transfertAmount);
    transfertToAccount.movements.push(transfertAmount);

    // 更新页面
    updateUI(currentAccount);
  }
  // else {
  // console.log(`transfert NOT valid`);
  // }
});

/*
// 164 所搜函数find
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// 163 Coding Challenge #3
// 161 Coding Challenge #2
const calcAverageHumanAge = function (ages) {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  // (2+3)/2=2.5 => 2/2+3/2=2.5
  // const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// 162 串联函数
const euroToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   mov * euroToUsd;
  // })
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// 160 精简函数reduce

let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

// accumulator is like snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`${i}: ${acc} + ${cur}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// get max value
const max = movements.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  movements[0],
);
console.log(max);

// 159 过滤函数filter

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

///////////////////////////////////////
// 154 Coding Challenge #1

const isDogAdult = age => (age > 3 ? 'adult' : 'puppy🐶');

const checkDogs = function (dogsJulia, dogsKate) {
  // 1.
  // const dogJuliaCorrected = dogsJulia.slice(1, dogsJulia.length - 2);
  const dogJuliaCorrected = dogsJulia.slice();
  dogJuliaCorrected.splice(0, 1);
  dogJuliaCorrected.splice(-2);
  console.log(dogsJulia, dogJuliaCorrected);

  // 2.
  // const dogs = [...dogJuliaCorrected, ...dogsKate];
  const ages = dogJuliaCorrected.concat(dogsKate);
  console.log(ages);

  // 3.
  ages.forEach(function (age, i) {
    console.log(
      `Dog number ${i + 1} is a ${isDogAdult(age)}, and is ${age} years old`,
    );
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
// 157 数据转换之map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const eurToUsd = 1.1;

const movsUSDfor = [];
for (const mov of movements) movsUSDfor.push(mov * eurToUsd);
console.log(movsUSDfor);

const movsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movsUSD);

const movsUSDArrow = movements.map(mov => mov * eurToUsd);
console.log(movsUSDArrow);

const movsDescription = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`,
);
console.log(movsDescription);

// 152 forEach迭代集映射高阶函数

// 映射map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// 集set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// 151 forEach迭代数组高阶函数
console.log(`--- forof迭代数组 ---`);
// for (const mov of movements) {
for (const [i, mov] of movements.entries()) {
  console.log(
    `${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`,
  );
}

console.log(
  `--- forEach高阶函数(high-order function)迭代数组(无法用continue/break跳出迭代)---`,
);
movements.forEach(function (mov, i, arr) {
  console.log(
    `${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`,
  );
});

/*
/////////////////////////////////////////////////

// 150 数组方法at (ES2022)
const arr = [23, 11, 64];
console.log(`返回数组第一个值`);
console.log(arr[0]);
console.log(arr.at(0));

console.log(`返回数组最后一个值`);
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log(`作用于字符串`);
console.log('jonas'.at(0));
console.log('jonas'.at(-1));

// 149 简单数组方法
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(`不作用于原始数组的切片 slice`);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

console.log(`作用于原始数组上切片 splice`);
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

console.log(`作用于原始数组上倒序 reverse`);
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

console.log(`不作用于原始数组上连接 concat`);
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(`concat`);
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log(`join`);
console.log(letters.join(' - '));
*/
