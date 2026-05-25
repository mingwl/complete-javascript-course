'use strict';

// 140 重置this关键词(call/apply)
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  // 增强对象表达式：
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sara Williams');
// call: 调用函数重置this关键词
// call: 参数列表逐个出现
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// apply: 参数列表以数组形式出现
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

/*
// 139 返回新函数的高阶函数
// 函数表达式
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas2');

// 箭头函数
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greet('Hi')('JonasArrow');

// 138 接收回调函数的函数
const oneWord = function (str) {
  // return str.replaceAll(' ', '');
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// 高阶函数 higher order function: transformer
// 回调函数 called backed function：upperFirstWord/oneWord
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// higher order function: addEventListener
// called backed function: high5
const high5 = function () {
  console.log(`🙌`);
};
document.body.addEventListener('click', high5);

// higher order function: forEach
// called backed function: high5
['Jonas', 'Martha', 'Adam'].forEach(high5);

// 136 函数数值与引用参数
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schemdtmann',
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 1234567890) {
    alert(`Check in`);
  } else {
    alert(`Wrong passport`);
  }
};
// checkIn(flight, jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

console.log(flight, jonas);
newPassport(jonas);
console.log('after newPassport:', jonas);
checkIn(flight, jonas);

// 135 函数默认参数
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 100 * numPassengers,
) {
  // ES5
  // numPassengers ||= 1;
  // price ||= 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 3);
createBooking('LH123', undefined, 600);
createBooking('LH123', 2, 800);
*/
