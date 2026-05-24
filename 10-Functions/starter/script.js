'use strict';

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

/*
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
