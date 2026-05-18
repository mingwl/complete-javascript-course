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

*/
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
