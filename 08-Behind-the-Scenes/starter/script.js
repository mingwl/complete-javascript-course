'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // creating new variable with same name as outer scope's variable
      const firstName = 'Steven';

      // reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

// 99 Hoisting and TDZ

// Hoisting variable
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Hoisting function
console.log(addDecl(2, 3));
console.log(addExpr);
// console.log(addExpr(2, 3)); // undefined(2,3)
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}
var addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

// example pitfull of Hoisting
console.log(`numProduts: ${numProduts}`);
if (!numProduts) deleteShoppingCart();
var numProduts = 10;
function deleteShoppingCart() {
  console.log(`All products deleted`);
}

var a = 1;
let b = 2;
const c = 3;

console.log(a === window.a);
console.log(b === window.b);
console.log(c === window.c);

// 101 This keyword

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


// 102 regular function vs arrow funciton

// NEVER USE var
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // this is undefined in a regular function call

    // solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // NEVER USE arrow function as method
  // greet: () => {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`);
  // },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

// firstname is undefined in global execution context
console.log(this.firstName);

jonas.greet();
console.log('---');
jonas.calcAge();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8, 12);

*/

// 102 引用对象

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
const marriedJessica = marryPerson(jessica1, 'Davis2');

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// shallow copy: copy only the 1st level
const jessicaShallow = { ...jessica };
jessicaShallow.lastName = 'Davis3';
console.log(jessica, jessicaShallow);

jessicaShallow.family.push('Mary');
jessicaShallow.family.push('John');

console.log('Before:', jessica);
console.log('After:', jessicaShallow);

// deep copy/clone
const jessicaDeep = structuredClone(jessica);
jessicaDeep.family.push('Mary2');
jessicaDeep.family.push('John2');
console.log('Before:', jessica);
console.log('After:', jessicaDeep);
