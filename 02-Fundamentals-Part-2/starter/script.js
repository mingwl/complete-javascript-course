'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) {
    console.log(`I can drive`)
}

// const interface = 'audio'
// const private = 123
// const if = 123

function logger() {
    console.log(`My name is Jonas`);
}

logger();
logger();
logger();

function cessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

// console.log(cessor(2, 3));
const appelJuice = cessor(5, 0);
console.log(appelJuice);

const appelOrangeJuice = cessor(2, 4);
console.log(appelOrangeJuice)

const num = Number('23');
console.log(num);

// function declaration
const age1 = calcAge1(1991);
console.log(age1);
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2)

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge1(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`
}
console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice
}

console.log(fruitProcessor(2, 3))

*/

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1
    }
}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1950, 'Mike'));