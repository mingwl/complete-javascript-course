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
*/

function logger() {
    console.log(`My name is Jonas`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

// console.log(fruitProcessor(2, 3));
const appelJuice = fruitProcessor(5, 0);
console.log(appelJuice);

const appelOrangeJuice = fruitProcessor(2, 4);
console.log(appelOrangeJuice)