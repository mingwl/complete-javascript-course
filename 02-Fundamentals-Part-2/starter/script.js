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


// 39 Coding Challenge #5
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);


const checkWinner = function (avgDolphins, avgKoalas) {
    console.log(avgDolphins, avgKoalas)
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} *2)`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins} *2)`)
    } else {
        console.log(`no team wins...`)
    }
}

checkWinner(avgDolphins, avgKoalas);
checkWinner(576, 111);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[friends.length - 1]);
console.log(friends[3]);
console.log(friends.length);

friends[2] = 'Jay';
console.log(friends);

// friends = ['bob'];

const firstName = 'Jonas'
const jonas = [firstName, 'Schemedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = birthYear => 2037 - birthYear;
const years2 = [1990, 1967, 2002, 2010, 2018];

const age0 = calcAge(years2[0]);
const age1 = calcAge(years2[1]);
const ageLast = calcAge(years2[years2.length - 1]);
console.log(age0, age1, ageLast);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

// add element
let newLength = friends.push('Jay');
console.log(friends, newLength);

newLength = friends.unshift('john');
console.log(friends, newLength);

// remove element
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23)
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log(`You have a friend called Peter`);
}
if (friends.includes('Steven')) {
    console.log(`You have a friend called Steven`);
}


const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));
console.log(calcTip(1000));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log(`invalid ${interestedIn}. Choose between firstName, lastName, age, job and friends`)
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas);

// chanllenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }

};

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas['calcAge'](1991));

// Chanllenge
console.log(jonas.getSummary());
console.log(jonas.age);


const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark);

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}


for (let i = 1; i <= 10; i++) {
    console.log(`lifting weights ${i}次`);
}


// 48.
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const jonasTypes = [];

for (let i = 0; i < jonasArray.length; i++) {
    // jonasTypes[i] = typeof jonasArray[i];
    jonasTypes.push(typeof jonasArray[i]);
    console.log(`${i + 1}: ${jonasArray[i]} (of type ${jonasTypes[i]})`);
}
console.log(jonasArray);
console.log(jonasTypes);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log(`--- ONLY STRING ---`)
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string')
        continue;
    console.log(`${i + 1}: ${jonasArray[i]} (of type ${jonasTypes[i]})`);
}

console.log(`--- BREAK WITH NUMBER ---`)
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number')
        break;
    console.log(`${i + 1}: ${jonasArray[i]} (of type ${jonasTypes[i]})`);
}

*/

// 49
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(`${i}: ${jonasArray[i]}`);
}

for (let i = 1; i <= 3; i++) {
    console.log(`------ Starting ex${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`Lifting weight rep${i}${j}`);
    }
}